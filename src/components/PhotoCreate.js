const PhotoCreate = ({ onCreate }) => {
  return (
    <div onClick={onCreate}>
      <button class="btn" type="button">
        <strong>CREATE NEW</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button>
    </div>
  );
};
export default PhotoCreate;
