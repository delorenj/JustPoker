import { useState, useEffect } from 'react'

const useBrowserFingerprint = () => {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    complete: false,
    error: false
  });

  const [browser_id, set_browser_id] = useState(() => {
    const key = "justpoker_browser_id";
    let saved_browser_id = localStorage.getItem(key);
    if(!saved_browser_id) {
      saved_browser_id = generate_id();
      localStorage.setItem(key, saved_browser_id);
    }
    return saved_browser_id;
  });

  const generate_id = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    set_browser_id(result);
    return result;
  };

  useEffect(() => {
    setResponse({
      data: {
        browser_id
      },
      loading: false,
      complete: true,
      error: false
    });
  }, []);

  return response;
};

export default useBrowserFingerprint;
