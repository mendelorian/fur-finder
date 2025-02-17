import { useState } from 'react';
const API_URL = import.meta.env.VITE_API_URL;

interface LoginProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

async function login(
    name: string,
    email: string,
    setLoggedIn: (val: boolean) => void,
    setError: (msg: string) => void
) {
  setError('');
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    setLoggedIn(true);
  } catch (err) {
    setError('Login failed. Please check your credentials and try again.');
    console.error(`Login failed: ${err}`);
  }
}

export default function Login({ setLoggedIn }: LoginProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(name, email, setLoggedIn, setError);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}
