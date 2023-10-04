import { useState, useEffect } from "react";

function StoreImage({ storeData, setStoreData, error, setError }) {
  const [selectedFile, setSelectedFile] = useState(null);
  if (error && error.logo == 'The submitted data was not a file. Check the encoding type on the form.') {
    setError((prevErrors) => ({
      ...prevErrors,
      logo: "",
    }));
  }

  useEffect(() => {
    if (error && error.logo) {
      setError(error);
    }
  }, [error, setError]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("File input change event:", file);

    // Check if a file is selected
    if (!file) {
      setError((prevErrors) => ({
        ...prevErrors,
        logo: "Please select an image file.",
      }));
      setSelectedFile(null);
      setStoreData({
        ...storeData,
        logo: null,
      });
      return;
    } else if (!file.type.startsWith("image/")) {
      setError((prevErrors) => ({
        ...prevErrors,
        logo: "Please select a valid image file.",
      }));
      // ...
    } else {
      // Clear the error for the logo
      setError((prevErrors) => ({
        ...prevErrors,
        logo: "",
      }));
  
      // ...
    }

    // Check if the selected file is an image (you can modify this check based on your requirements)
    if (!file.type.startsWith("image/")) {
      setError((prevErrors) => ({
        ...prevErrors,
        logo: "Please select a valid image file.",
      }));
      setSelectedFile(null);
      setStoreData({
        ...storeData,
        logo: null,
      });
      return;
    }
    
   
    // Clear the error for the logo
    setError((prevErrors) => ({
      ...prevErrors,
      logo: "",
    }));

    setSelectedFile(file);
    setStoreData({
      ...storeData,
      logo: file,
    });

  };

  const truncateFileName = (fileName, maxLength) => {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    const truncatedFileName = fileName.slice(0, maxLength - 3) + "...";
    return truncatedFileName;
  };

  return (
    <div className="flex flex-col justify-start space-y-4 w-full">
      <label className="relative cursor-pointer text-black py-2 rounded-lg">
        <span className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"></span>
        <span className="">Store Image</span>
        <input
          type="file"
          name="profile_image"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex items-center justify-between bg-[var(--white)] border border-solid border-[var(--input-border)] w-[90%] h-10 rounded-lg pl-4 mt-3 space-x-2">
          <div className="outline-none">
            <span className="truncate">
              {selectedFile
                ? truncateFileName(selectedFile.name, 20)
                : "No file selected"}
            </span>
          </div>
          <button
            className="bg-[var(--yellow)] text-black h-10 py-1 px-4 rounded-lg text-sm"
            type="button"
            onClick={() => {
              const fileInput = document.querySelector('input[type="file"]');
              if (fileInput) {
                fileInput.click();
              }
            }}
          >
            Upload
          </button>
        </div>
        {error && error.logo && <div className="text-red-500">{error.logo}</div>}
      </label>
    </div>
  );
}

export default StoreImage;
