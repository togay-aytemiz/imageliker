const PhotoCreate = ({ onCreate }) => {
  return (
    <div onClick={onCreate}>
      <button className="btn" type="button">
        <strong>CREATE NEW</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </div>
  );
};
export default PhotoCreate;
