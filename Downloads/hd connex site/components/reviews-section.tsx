
'use client';

import { reviewsData } from '../lib/data';
import StarRating from './star-rating';

export default function ReviewsSection() {
  // Get all reviews and sort by date, take first 6
  const allReviews = Object.values(reviewsData)
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from real customers who found their perfect contractor match through HD Connex
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map(review => (
            <div key={review.id} className="review-card rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {review.customerName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.customerName}</h4>
                    <p className="text-sm text-gray-500">{review.projectType}</p>
                  </div>
                </div>
                {review.verified && (
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                    <i className="fas fa-check-circle mr-1"></i>Verified
                  </div>
                )}
              </div>
              
              <StarRating rating={review.rating} size="text-base" />
              
              <p className="text-gray-700 mt-4 leading-relaxed">
                &ldquo;{review.review}&rdquo;
              </p>
              
              <div className="mt-6 text-sm text-gray-500">
                <i className="fas fa-calendar-alt mr-2"></i>
                {new Date(review.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center mr-6">
              <i className="fas fa-star text-yellow-400 text-2xl mr-2"></i>
              <span className="text-3xl font-bold text-gray-800">4.9</span>
              <span className="text-gray-600 ml-2">average rating</span>
            </div>
            <div className="border-l pl-6">
              <span className="text-3xl font-bold text-gray-800">200+</span>
              <span className="text-gray-600 ml-2">happy customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
