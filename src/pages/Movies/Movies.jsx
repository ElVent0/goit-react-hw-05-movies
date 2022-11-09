import MoviesList from '../../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { ContainerStyled } from '../../components/ContainerStyled.styled';
import { fetchedListByName } from '../../api/api';
import { useSearchParams, useLocation } from 'react-router-dom';
import Form from '../../components/Form/Form';

const Movies = () => {
  const [moviesArray, setMoviesArray] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  const location = useLocation();

  const onChange = e => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);
  };

  const onSubmit = e => {
    e.preventDefault();
    try {
      location.search = inputValue;
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
    <ContainerStyled>
      <Form onChange={onChange} onSubmit={onSubmit} inputValue={inputValue} />
      <MoviesList data={moviesArray} />
    </ContainerStyled>
  );
};

export default Movies;
