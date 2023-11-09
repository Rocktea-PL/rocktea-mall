import { useState } from "react";
import { FiUpload } from "react-icons/fi";
function ProfileImage({ formData, setFormData, error }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("File input change event:", file);
    setSelectedFile(file);
    setFormData({
      ...formData,
      profile_image: file,
    });
  };

  const truncateFileName = (fileName, maxLength) => {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    const truncatedFileName = fileName.slice(0, maxLength - 3) + "...";
    return truncatedFileName;
  };

  /*const handleImageError = ()=> {
    if(error === 'The submitted data was not a file. Check the encoding type on the form.'){
     setError('Image cannot be empty')
    }
    else{
     setError(error)
    }
   }*/
  return (
    <div className="flex flex-col  justify-start space-y-4 w-full ">
      <label className="relative flex flex-col items-start  cursor-point text-black rounded-lg mt-3">
        <span className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"></span>

        <input
          type="file"
          name="profile_image"
          className="hidden "
          onChange={handleFileChange}
        />
        <div className="flex items-center justify-between bg-[var(--white)] border-2 border-solid border-[var(--form-border)] w-full h-10 rounded-md pl-4   space-x-2">
          <div className=" outline-none ">
            {selectedFile ? (
              <span className="truncate ">
                {truncateFileName(selectedFile.name, 15)}
              </span>
            ) : (
              <span className="truncate text-gray-300">Profile Image</span>
            )}
          </div>
          <button
            className=" text-black px-3  text-sm"
            type="button"
            onClick={() => {
              // Add logic to trigger the file input when the button is clicked
              const fileInput = document.querySelector('input[type="file"]');
              if (fileInput) {
                fileInput.click();
              }
            }}
          >
            <FiUpload />
          </button>
        </div>
        {error && error.profile_image && (
          <div className="text-red-500">{error.profile_image}</div>
        )}
      </label>
    </div>
  );
}

export default ProfileImage;
