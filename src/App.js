import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [sentence, setSentence] = useState('');
  const [isSentenceSarcastic, setIsSentenceSarcastic] = useState('');

  const fetchData = async () => {
    console.log('fetchData() has been called')
    const response = await fetch('/ml');
    const data = await response.json();
    setIsSentenceSarcastic(data['isSarcastic']);
  };

  const fetchDataPost = async () => {
    console.log('fetchDataPost() has been called')
    console.log(JSON.stringify(sentence));
    const response = await fetch('/ml', {
      method: 'POST',
      body: JSON.stringify(sentence),
      headers:{"content_type": "application/json"}
    });
    const data = await response.json();
    setIsSentenceSarcastic(data['isSarcastic']);
    return data;
  };
  

  useEffect(() => {
    fetchData()
  }, []);

  const handleSubmit = e => {
    fetchDataPost()
    e.preventDefault();

  }

  return (
    <div className="App">
      <div className="search-form">
        <form
        method="post"
        onSubmit={handleSubmit}>
          <input
          action=""
          type="text"
          name="nm"
          onChange={e => setSentence(e.target.value)}
          value={sentence}>
          </input>
          <input type="submit"></input>
        </form>
      </div>
      <div className="search-results">
        <div className="input-sentence">{sentence}</div>
        <div className="sarcasm-result">{isSentenceSarcastic}</div>
      </div>
    </div>
  );
}

export default App;
