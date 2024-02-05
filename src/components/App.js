import { useState } from "react";
import PhotoCreate from "./PhotoCreate";
import PhotoList from "./PhotoList";

const App = () => {
  const mockPhotoData = [
    { id: 1, img: "https://picsum.photos/300/300", count: 1 },
    { id: 2, img: "https://picsum.photos/300/300", count: 2 },
  ];

  const [photoData, setPhotoData] = useState([]);
  const handleNewImage = () => {
    const id = crypto.randomUUID();
    const updatedPhotoData = [
      ...photoData,
      { id: id, img: `https://picsum.photos/seed/${id}/300/`, count: 0 },
    ];
    console.log(updatedPhotoData);
    setPhotoData(updatedPhotoData);
  };

  const handleUpdateCount = (id) => {
    const updatedCount = photoData.map((photo) => {
      if (photo.id === id) {
        let count = photo.count + 1;
        return { ...photo, count: count };
      }
      return photo;
    });
    setPhotoData(updatedCount);
  };

  return (
    <main>
      <PhotoCreate onCreate={handleNewImage} />
      <PhotoList photoData={photoData} onUpdate={handleUpdateCount} />
    </main>
  );
};
export default App;
