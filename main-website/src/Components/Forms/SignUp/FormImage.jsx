import { useState } from "react";

function FileInput({ userData, setUserData, error }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("File input change event:", file);
    setSelectedFile(file);
    setUserData({
      ...userData,
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
    <div className="flex flex-col col-span-2 justify-start space-y-4 w-full ">
      <label className="relative  cursor-point text-black py-2 rounded-lg ">
        <span className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"></span>
        <span className="">Profile Image</span>
        <input
          type="file"
          name="profile_image"
          className="hidden "
          onChange={handleFileChange}
        />
        <div className="flex items-center justify-between bg-[var(--white)] border border-solid border-[var(--input-border)] w-full h-10 rounded-lg pl-4 mt-3  space-x-2">
          <div className=" outline-none ">
            <span className="truncate ">
              {selectedFile
                ? truncateFileName(selectedFile.name, 20)
                : "No file selected"}
            </span>
          </div>
          <button
            className="bg-[var(--yellow)] text-black h-10 py-1 px-4 rounded-lg text-sm"
            type="button"
            onClick={() => {
              // Add logic to trigger the file input when the button is clicked
              const fileInput = document.querySelector('input[type="file"]');
              if (fileInput) {
                fileInput.click();
              }
            }}
          >
            Upload
          </button>
        </div>
        {error && error.profile_image && (
          <div className="text-red-500">{error.profile_image}</div>
        )}
      </label>
    </div>
  );
}

export default FileInput;
