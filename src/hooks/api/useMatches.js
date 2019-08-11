import * as axios from 'axios';
import { useEffect, useState } from 'react';

export const useMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      const res = await axios('http://localhost:3100/matches');
      setMatches(res.data);
    };

    getMatches();
  }, []);

  return matches;
};
