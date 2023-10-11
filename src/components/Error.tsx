import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// TODO
const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);
  return <div>Error</div>;
};

export default Error;
