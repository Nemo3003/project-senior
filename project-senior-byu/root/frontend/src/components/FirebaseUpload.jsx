import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase/firebase";
import { v4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FirebaseUpload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const navigate = useNavigate();


  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        Swal.fire({
          icon: "success",
          title: "Image Uploaded",
          text: "Your receipt has been uploaded successfully!",
        });

        navigate('/auth-class')
      });
      
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[40vh] bg-gray-100">
    <h2 className="text-2xl font-semibold mb-6">Upload your receipt</h2>
    <div className="flex flex-col items-center bg-white p-8 rounded shadow w-80">
      <label
        htmlFor="file-input"
        className="flex items-center justify-center w-full p-4 bg-white border border-gray-300 rounded cursor-pointer hover:bg-blue-50"
      >
        <FontAwesomeIcon icon={faUpload} className="w-6 h-6 mr-2 text-blue-500" />
        <span className="text-gray-500">{imageUpload ? imageUpload.name : 'Choose a file'}</span>
        <input
          id="file-input"
          type="file"
          className="hidden"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
      </label>
      <button
        onClick={uploadFile}
        disabled={!imageUpload}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full mt-4 disabled:bg-gray-400 disabled:pointer-events-none"
      >
        Upload Image
      </button>
    </div>
  </div>
  );
}

export default FirebaseUpload;