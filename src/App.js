import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [sentences, setSentences] = useState([]);

  const fetchData = async () => {
    const response = await fetch('/ml');
    const data = await response.json();
    setSentences(data.sentences);
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="App">
      <div className="search-form">
        <form>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
      <div className="search-results">
        {sentences.map(sentence => (
          <p>{sentence}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
