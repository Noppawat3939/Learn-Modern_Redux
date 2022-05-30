import React, { useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import { increase, amountAdded } from "./features/counter/couterSlice";
import { useFetchBreedsQuery } from "./features/dogs/dog-Slice-Api";

function App() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);

  const { data, isFetching } = useFetchBreedsQuery(numDogs);

  function handleClick() {
    dispatch(amountAdded(1));
  }

  return (
    <div className="App">
      <h1>redux toolkit</h1>
      <button onClick={handleClick}>counter is: {value}</button>
      <div>
        <p>dogs to fetch:</p>
        <select value={numDogs} onChange={(e) => setNumDogs(e.target.value)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>breed</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>{breed?.breed_group}</td>
                <td>
                  <img src={breed.image.url} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
