import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase/firebase";
import { v4 } from "uuid";
import Swal from "sweetalert2";

const FirebaseUpload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => getDownloadURL(snapshot.ref))
      .then((url) => {
        const uploadedImage = {
          url,
          date: new Date().toLocaleString(),
        };
        setImageUrls((prev) => [uploadedImage, ...prev]);
  
        // Show success notification
        Swal.fire({
          icon: "success",
          title: "Image Uploaded",
          text: "Your image has been uploaded successfully!",
        });
  
        // Clear the file input field and remove the file name
        setImageUpload(null);
        const fileInput = document.getElementById("file-input");
        if (fileInput) fileInput.value = "";
      })
      .catch((error) => {
        // Show error notification
        Swal.fire({
          icon: "error",
          title: "Upload Failed",
          text: "There was an error uploading your image. Please try again.",
        });
      });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          const image = {
            url,
            date: new Date().toLocaleString(),
          };
          setImageUrls((prev) => [...prev, image]);
        });
      });
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-[40vh] bg-gray-100">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-6">Upload your ticket</h2>
        <div className="mb-6">
        <input
          type="file"
          id="file-input"
          className="py-2 px-4 border border-gray-300 rounded w-full"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />

        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
          onClick={uploadFile}
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default FirebaseUpload;
