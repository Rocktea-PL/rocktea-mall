import { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";

function ServiceImage({
  storeData,
  setStoreData,
  error,
  setError,
  imageIdentifier,
  label,
}) {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (error && error[imageIdentifier]) {
      setError(error);
    }
  }, [error, setError, imageIdentifier]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setError((prevErrors) => ({
        ...prevErrors,
        [imageIdentifier]: `Please select an image file for ${imageIdentifier}.`,
      }));
      setSelectedFile(null);
      setStoreData({
        ...storeData,
        [imageIdentifier]: null,
      });
      return;
    } else if (!file.type.startsWith("image/")) {
      setError((prevErrors) => ({
        ...prevErrors,
        [imageIdentifier]: `Please select a valid image file for ${imageIdentifier}.`,
      }));
      setSelectedFile(null);
      setStoreData({
        ...storeData,
        [imageIdentifier]: null,
      });
      return;
    }

    setError((prevErrors) => ({
      ...prevErrors,
      [imageIdentifier]: "",
    }));

    setSelectedFile(file);
    setStoreData({
      ...storeData,
      [imageIdentifier]: file,
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
    <div className="flex flex-col justify-start space-y-4 !w-full">
      <label className="relative cursor-pointer text-black  rounded-lg  !w-full">
        <span className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"></span>
        <span className={`capitalize`}>{label}</span>
        <input
          type="file"
          name={imageIdentifier}
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex items-center justify-between bg-[var(--white)] border border-solid border-[var(--input-border)] w-full h-10 rounded-lg pl-4 mt-3 space-x-2">
          <div className="outline-none">
            <span className="truncate">
              {selectedFile
                ? truncateFileName(selectedFile.name, 15)
                : `No file selected`}
            </span>
          </div>
          <button
            className="text-black h-10 py-1 px-4 rounded-lg text-sm"
            type="button"
            onClick={() => {
              const fileInput = document.querySelector('input[type="file"]');
              if (fileInput) {
                fileInput.click();
              }
            }}
          >
            <FiUpload />
          </button>
        </div>
        {error && error[imageIdentifier] && (
          <div className="text-red-500">{error[imageIdentifier]}</div>
        )}
      </label>
    </div>
  );
}

export default ServiceImage;
