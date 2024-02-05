import icon from "../../public/heart.svg";
import Image from "next/image";

const PhotoCard = ({ photoData, onUpdate }) => {
  const handleClick = () => {
    onUpdate(photoData.id);
    console.log(photoData.id);
  };

  let dimension = photoData.count * 3 + 40;
  return (
    <div>
      <div className="photo-card" onClick={handleClick}>
        <div className="image-container">
          <img src={photoData.img} alt="" className="generated-image" />
          <div className="like-counter">
            <Image
              src={icon}
              alt="emoji"
              className="emoji-icon"
              height={photoData.count > 40 ? 160 : dimension}
              width={photoData.count > 40 ? 160 : dimension}
            />
          </div>
          <div className="photo-like">
            {photoData.count > 0 && photoData.count}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhotoCard;
