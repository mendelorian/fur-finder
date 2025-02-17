import { useEffect, useState } from "react";

const APIURL = 'https://frontend-take-home-service.fetch.com';

export default function Search() {
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${APIURL}/dogs/search`);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);

        };

        const data = await response.json();
        setPetList(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPets();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="size-14 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );

  if (error) return <p className={"text-red-500"}>{error}</p>

  return (
    <div>
      <h1>Search for Pets</h1>
      <ul>
        {petList.resultIds.map((petId: string):void => {
          <li key={petId}>petId</li>
        })}
      </ul>
    </div>
  )
}