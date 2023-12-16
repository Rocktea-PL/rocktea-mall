function ImageUpdate() {
  return (
    <div>
      <label htmlFor="profileImageInput">
        <input
          id="profileImageInput"
          type="file"
          accept="image/*"
          // onChange={(e) => handleProfileImageUpdate(URL.createObjectURL(e.target.files[0]))}
          style={{ display: "none" }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* ... (your SVG path for the update icon) */}
        </svg>
      </label>
    </div>
  );
}

export default ImageUpdate;
