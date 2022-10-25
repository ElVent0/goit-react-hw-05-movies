import { fetchedListOfReviews } from '../../api/api';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  ReviewsContent,
  ListStyled,
  ItemStyled,
  SubTitle,
  Paragraph,
} from './Reviews.styled';
import { Suspense } from 'react';

const Reviews = () => {
  const movieId = useOutletContext();
  const [reviewsData, setReviewsData] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        console.log('----', movieId);
        const data = await fetchedListOfReviews(movieId);
        if (data) {
          setReviewsData(data);
          console.log(45678901, data);
        }
      };
      fetchData();
    } catch (e) {
      console.log('Something is wrong');
    }
  }, [movieId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReviewsContent>
        {reviewsData && (
          <ListStyled>
            {reviewsData.results.map(item => {
              return (
                <ItemStyled key={item.id}>
                  <SubTitle>Author: {item.author}</SubTitle>
                  <Paragraph>{item.content}</Paragraph>
                </ItemStyled>
              );
            })}
          </ListStyled>
        )}
      </ReviewsContent>
    </Suspense>
  );
};

export default Reviews;
