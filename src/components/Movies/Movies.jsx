import MoviesList from '../MoviesList/MoviesList';
import { useState } from 'react';
import { FormStyled, InputStyled, ButtonStyled } from './Movies.styled';
import { ContainerStyled } from '../ContainerStyled.styled';
import { fetchedListByName } from '../../api/api';

const Movies = () => {
  const [moviesArray, setMoviesArray] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(55);
    try {
      const fetchData = async () => {
        const data = await fetchedListByName(inputValue);
        setMoviesArray(data.results);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ContainerStyled>
      <FormStyled action="" onSubmit={onSubmit}>
        <InputStyled type="text" value={inputValue} onChange={onChange} />
        <ButtonStyled type="button">Search</ButtonStyled>
      </FormStyled>
      <MoviesList data={moviesArray} />
    </ContainerStyled>
  );
};

export default Movies;
