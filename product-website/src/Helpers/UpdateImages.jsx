// useImageUpload.js
import { useState, useRef } from "react";
import toast from "react-hot-toast";

const useImageUpload = (initialImage, customKey, url) => {
  const [image, setImage] = useState(initialImage);
  const fileInputRef = useRef(null);

  const handleFileChange = (files) => {
    const selectedFile = files[0];

    if (selectedFile) {
      updateImage(selectedFile);
    }
  };

  const updateImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append(customKey, file);

      // Replace the URL with your actual API endpoint
      const response = await fetch(url, {
        method: "PATCH",
        body: formData,
      });

      if (response.ok) {
        console.log("Image updated successfully");
        toast.success("Profile Updated Successfully");
        setImage(URL.createObjectURL(file));
      } else {
        toast.error("Failed to update image");
      }
    } catch (error) {
      console.error("Error updating image:", error);
      toast.error(error?.response?.data || error.message);
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return {
    image,
    fileInputRef,
    handleFileChange,
    openFileInput,
  };
};

export default useImageUpload;
