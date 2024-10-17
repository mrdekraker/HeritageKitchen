import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Welcome to the DeKraker Family Cookbook</h1>
      <p>{message}</p>
    </div>
  );
}
