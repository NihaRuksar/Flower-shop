import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah M.',
    rating: 5,
    text: 'The floral arrangement was absolutely stunning! The flowers were fresh and lasted for over a week.',
    date: 'Oct 12, 2023',
  },
  {
    id: '2',
    name: 'Emily R.',
    rating: 4,
    text: 'Beautiful bouquet, though the delivery was a bit late. The customer service team was very helpful.',
    date: 'Nov 5, 2023',
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    
    const review: Review = {
      id: Date.now().toString(),
      name: newReview.name,
      rating: newReview.rating,
      text: newReview.text,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    
    setReviews([review, ...reviews]);
    setNewReview({ name: '', text: '', rating: 5 });
  };

  return (
    <section className="mt-32 max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl text-forest mb-4">Customer Reviews</h2>
        <p className="text-brown/70">Read what our clients have to say about our floral arrangements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Write a Review Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 h-fit">
          <h3 className="font-serif text-xl text-forest mb-6">Write a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-brown mb-2">Your Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none transition-colors"
                  >
                    <Star 
                      className={`w-6 h-6 ${
                        star <= (hoverRating || newReview.rating) 
                          ? 'fill-[#FF9900] text-[#FF9900]' 
                          : 'text-gray-300'
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brown mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full px-4 py-3 bg-ivory border border-black/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="text" className="block text-sm font-medium text-brown mb-2">Review</label>
              <textarea
                id="text"
                value={newReview.text}
                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                className="w-full px-4 py-3 bg-ivory border border-black/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest min-h-[120px] resize-none"
                placeholder="Share your experience with our products..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-forest text-ivory rounded-full font-medium hover:bg-forest/90 transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-black/5"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-medium text-forest">{review.name}</h4>
                  <p className="text-xs text-brown/60 mt-1">{review.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating 
                          ? 'fill-[#FF9900] text-[#FF9900]' 
                          : 'text-gray-200'
                      }`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-brown/80 text-sm leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
