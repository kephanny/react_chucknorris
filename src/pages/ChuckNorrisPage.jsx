import React, { useEffect, useState } from "react";
import { fetchChuckJoke } from "../services/chuckNorrisApi";

export default function ChuckNorrisPage() {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChuckJoke()
      .then(setJoke)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>

      <h1>Chuck Norris</h1>

      {loading && <p className="loading">Carregando...</p>}
      {error && <p className="error">{error}</p>}

      {joke && (
        <div className="card center">
          <img src={joke.icon_url} alt="Chuck Norris" />
          <p><strong>{joke.value}</strong></p>
        </div>
      )}
    </>
  );
}
