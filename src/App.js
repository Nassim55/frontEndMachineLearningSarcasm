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
      {sentences.map(sentence => (
        <p>{sentence}</p>
      ))}
    </div>
  );
}

export default App;
