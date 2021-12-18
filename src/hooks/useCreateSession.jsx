import { useState, useEffect } from 'react'

const useCreateSession = () => {
  const [response, setResponse] = useState({
    data: null,
    loading: false,
    complete: false,
    error: false
  });

  useEffect(() => {
    setResponse({
      data: {
        session_id: "abc123"
      },
      loading: false,
      complete: true,
      error: false
    });
  }, []);

  return response;
};

export default useCreateSession;
