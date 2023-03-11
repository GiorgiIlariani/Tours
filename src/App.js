
import React, { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from './components/Loading'

const url = "https://course-api.com/react-tours-project";

function App() {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetching the data
  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  // remove single tour
  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className="center-div">
        <h3>No Tours Left</h3>
        <button className="refresh-btn" onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="title">
        <h2>Out Tours</h2>
        <div className="underline"></div>
      </div>
      {/* tours */}
      <Tours tours={tours} removeTour={removeTour} />
    </React.Fragment>
  );
}
export default App;
