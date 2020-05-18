import React, { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("...loading");

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await (await fetch("/api")).json();
        setMessage(data.message);
      } catch (err) {
        setMessage(err.message);
      }
    }
    fetchData();
  });

  return <div className="App">sdf </div>;
};

export default App;
