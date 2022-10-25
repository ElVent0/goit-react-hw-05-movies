import MoviesList from '../../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { FormStyled, InputStyled, ButtonStyled } from './Movies.styled';
import { ContainerStyled } from '../../components/ContainerStyled.styled';
import { fetchedListByName } from '../../api/api';
import { useSearchParams } from 'react-router-dom';
import { Suspense } from 'react';

const Movies = () => {
  const [moviesArray, setMoviesArray] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  const onChange = e => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);
  };

  const onSubmit = e => {
    e.preventDefault();
    try {
      const fetchData = async () => {
        const data = await fetchedListByName(inputValue);
        setMoviesArray(data.results);
      };
      fetchData();
      setInputValue('');
      setSearchParams({ name: inputValue });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (name === '' || name === null) return;

    try {
      const fetchData = async () => {
        const data = await fetchedListByName(name);
        setMoviesArray(data.results);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [name]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContainerStyled>
        <FormStyled action="" onSubmit={onSubmit}>
          <InputStyled type="text" value={inputValue} onChange={onChange} />
          <ButtonStyled type="submit">Search</ButtonStyled>
        </FormStyled>
        <MoviesList data={moviesArray} />
      </ContainerStyled>
    </Suspense>
  );
};

export default Movies;
