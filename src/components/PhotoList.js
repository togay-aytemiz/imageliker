import PhotoCard from "./PhotoCard";

const PhotoList = ({ photoData, onUpdate }) => {
  const renderedPhotos = photoData.map((photo) => {
    return <PhotoCard key={photo.id} photoData={photo} onUpdate={onUpdate} />;
  });

  return <div className="photo-list">{renderedPhotos}</div>;
};
export default PhotoList;
