import { useState, useEffect } from 'react'

const useBrowserFingerprint = () => {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    complete: false,
    error: false
  });

  const generate_id = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length || 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  };

  useEffect(() => {
    setResponse({
      data: {
        browser_id: generate_id()
      },
      loading: false,
      complete: true,
      error: false
    });
  }, []);

  return response;
};

export default useBrowserFingerprint;
