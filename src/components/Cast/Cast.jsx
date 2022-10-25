import { fetchedListOfCast } from '../../api/api';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CastContent, ListStyled, ItemStyled, Paragraph } from './Cast.styled';
import { Suspense } from 'react';

const Cast = () => {
  // console.log('movieId', context);
  const movieId = useOutletContext();
  const [castData, setCastData] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        console.log('----', movieId);
        const data = await fetchedListOfCast(movieId);
        if (data) {
          setCastData(data);
          console.log(4567, data);
        }
      };
      fetchData();
    } catch (e) {
      console.log('Something is wrong');
    }
  }, [movieId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CastContent>
        <ListStyled>
          {castData &&
            castData.cast.map(item => {
              const actorImage = `https://image.tmdb.org/t/p/w200${item.profile_path}`;
              return (
                <ItemStyled key={item.id}>
                  <img src={actorImage} alt={item.name} />
                  <Paragraph>{item.name}</Paragraph>
                  <Paragraph>Character: {item.character}</Paragraph>
                </ItemStyled>
              );
            })}
        </ListStyled>
      </CastContent>
    </Suspense>
  );
};

export default Cast;
