import { useState, useEffect } from 'react'

const useGetFingerprint = () => {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    complete: false,
    error: false
  });

  const generate_session_id = () => {
    let result = '';
    const length = 5;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  };

  useEffect(() => {
    const session_id = generate_session_id();
    setResponse({
      data: {
        session_id
      },
      loading: false,
      complete: true,
      error: false
    });
  }, []);

  return response;
};

export default useCreateSession;
