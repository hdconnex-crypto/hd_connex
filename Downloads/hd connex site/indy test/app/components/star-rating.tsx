
'use client';

interface StarRatingProps {
  rating: number;
  size?: string;
}

export default function StarRating({ rating, size = "text-sm" }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className={`flex items-center star-rating ${size}`}>
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="fas fa-star"></i>
      ))}
      {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={`empty-${i}`} className="far fa-star"></i>
      ))}
      <span className="ml-1 text-gray-600">({rating})</span>
    </div>
  );
}
