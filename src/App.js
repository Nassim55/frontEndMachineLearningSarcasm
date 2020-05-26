import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { 
  onMouseEnterSearchForm,
  onMouseLeaveSearchForm,
  onFocusSearchForm,
  onBlurSearchForm
} from './domManipulationFunctions';
import './App.css';


const App = () => {
  const [sentence, setSentence] = useState('');
  const [isSentenceSarcastic, setIsSentenceSarcastic] = useState('');

  const fetchData = async () => {
    const response = await fetch('/ml');
    const data = await response.json();
    setIsSentenceSarcastic(data['isSarcastic']);
  };

  const fetchDataPost = async () => {
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
    setSentence('')
    fetchDataPost()
    e.preventDefault();
  };

  const onBeforeInputSearchForm = () => {
    if (sentence === '') {
      setIsSentenceSarcastic('');
    };
  };

  return (
    <div className="App">
      <form
      className="search-form"
      method="post"
      onMouseEnter={onMouseEnterSearchForm}
      onMouseLeave={onMouseLeaveSearchForm}
      onSubmit={handleSubmit}>
        <button type="submit" className="search-button">
          <svg className="submit-button">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#search"></use>
          </svg>
        </button>
        <input
        className="search-input"
        action=""
        type="text"
        placeholder="Type your sentence here..."
        onFocus={onFocusSearchForm}
        onBlur={onBlurSearchForm}
        onBeforeInput={onBeforeInputSearchForm}
        onChange={e => setSentence(e.target.value)}
        value={sentence}>
        </input>
        <animated.div 
        className="result">
          {isSentenceSarcastic}
        </animated.div>
      </form>
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" display="none">
        <symbol id="search" viewBox="0 0 32 32">
          <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
        </symbol>
      </svg>
    </div>
  );
}

export default App;