import { useState, useEffect } from 'react'

const useCreateSession = session_id => {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    complete: false,
    error: false
  });

  const generate_id = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  };

  useEffect(() => {
    setResponse({
      data: {
        session_id: session_id || generate_id(),
      },
      loading: false,
      complete: true,
      error: false
    });
  }, []);

  return response;
};

export default useCreateSession;
