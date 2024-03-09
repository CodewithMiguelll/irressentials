
const ReviewCard = ({ review }) => {
  return (
    <div className="bg-[#aa8be2] mx-auto p-6 rounded-lg shadow-md w-72">
      <div className="flex items-center mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-[#f6f6f6]">
            {review.name}
          </h3>
          <p className="text-[#f6f6f6]">{review.date}</p>
        </div>
      </div>
      <p className="text-[#f6f6f6]">{review.content}</p>
      <div className="flex items-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-yellow-500 mr-1"
        >
          <path d="M12 2l2.5 7h7.9l-6 4.7 2.4 7.3-6-4.5-6 4.5 2.4-7.3-6-4.7h7.9z" />
        </svg>
        <p className="text-yellow-500">{review.rating}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
