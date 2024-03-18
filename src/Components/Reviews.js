import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="flex items-center gap-2 mt-4">
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <p className="text-yellow-500">{review.rating}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
