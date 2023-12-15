import { useState } from "react";
import truncateText from "../Helpers/TruncateText";

const TruncateDescription = ({ description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxLength = 500; // You can adjust this value based on your preference

  const truncatedDescription = truncateText(
    description,
    maxLength,
    !showFullDescription,
  );

  return (
    <div>
      <p className="text-gray-600 mt-5 mb-3">{truncatedDescription}</p>
      {description.length > maxLength && (
        <button
          className="text-gray-600 font-semibold hover:underline"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Read Less <<" : "Read More >>"}
        </button>
      )}
    </div>
  );
};

export default TruncateDescription;
