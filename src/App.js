import './App.css';
import { useState, useEffect } from "react";
import Header from './components/Header';
// import Planets from './components/Planets';

function App() {
  const baseUrl = 'http://swapi.dev/api';
  const [entity, setEntity] = useState('planets');
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleButtonClick = () => setPage(page + 1);



  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      try {
        setEntity('planets');
        const url = `${baseUrl}/${entity}/?page=${page}`;
        console.log(url)
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Something went wrong, status ${response.status}`
          )
        }
        const data = await response.json();
        setPlanets(pl => [...pl, ...data.results]);
      } catch (error) {
        setError(error.message);
        console.error(error.message)
      }
    }
    fetchData();

    setLoading(false)
  }, [entity, page])

  // <Planets planets={planets} />
  return (
    <section className="container py-5">
      <Header />
      <div className="row">
        {planets.map((planet) => {
          return (
            <div key={planet.name} className="col-md-6  col-lg-4 col-xl-3 mb-4">
              <article className="bg-warning p-3">
                <h2 className="h5">{planet.name}</h2>
                <p className="mb-0">
                  <b>population</b> <br /> {planet.population}
                </p>
                <p className="mb-0">
                  <b>climat</b> <br /> {planet.climate}
                </p>
              </article>
            </div>
          );
        })}
        {loading && (
          <div className="mb-4 text-center p-3">loading...</div>
        )}
      </div>
      {error && <p>{error}</p>}
      <button type="button" className="btn btn-dark" onClick={handleButtonClick}>Suivantes</button>
    </section>
  );
}

export default App;
