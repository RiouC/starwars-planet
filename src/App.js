import './App.css';
import { useState, useEffect } from "react";
import Header from './components/Header';
import Planets from './components/Planets';

function App() {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true)
    fetch(`http://swapi.dev/api/planets/?page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Something went wrong, status ${response.status}`
          )
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setPlanets(data)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page])

  return (
    <section className="container py-5">
      <Header />
      <Planets />
      <button type="button" class="btn btn-dark">Suivantes</button>
    </section>
  );
}

export default App;
