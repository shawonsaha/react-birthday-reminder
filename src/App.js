import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const clearData = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h4>{people.length} people have birthday today</h4>
        <List people={people} />
        <button className="btn" onClick={() => clearData()}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
