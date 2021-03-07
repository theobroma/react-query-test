import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

interface Props {
  className?: string;
}

export const Basic: React.FC<Props> = () => {
  const queryInfo = useQuery('pokemon', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.data.results);
  });
  console.log(queryInfo);

  return (
    <span>
      basic
      <span>1231</span>
    </span>
  );
};
