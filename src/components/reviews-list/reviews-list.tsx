import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviewsCount: number
  reviews: string[]
};

function ReviewsList ({reviewsCount, reviews}: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsItem key={`review-${review}`} reviewText={review}/>)}
      </ul>
    </>
  );
}

export default ReviewsList;
