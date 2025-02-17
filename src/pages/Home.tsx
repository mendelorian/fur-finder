import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>Welcome to FurFinder</h1>
      <Link to="/search" className="text-blue-500 underline">
        Go to Search
      </Link>
    </>
  )
}