import { useState, useEffect, useContext } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll
} from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import AdminNav from "./AdminNav";


const UploadedFiles = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
  
    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          const uploadedImage = {
            url,
            date: new Date().toLocaleString(),
          };
          setImageUrls((prev) => [uploadedImage, ...prev]);
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

    const refreshImages = () => {
        setImageUrls([]);
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
      };
    
      useEffect(() => {
        refreshImages();
      }, []);
  
    return (
        <>
          <AdminNav />
          <div className="flex justify-center items-center  bg-gray-100">
            <div className=" w-full mx-auto p-8 bg-white rounded shadow">
              <div className="flex flex-wrap justify-center">
                {imageUrls.map((image, index) => (
                  <div
                    key={index}
                    className="flex items-center border border-gray-300 rounded p-2 mb-4 mr-4 w-1/6"
                  >
                    <div className="w-16">
                      <img
                        src={image.url}
                        className="w-full h-auto rounded"
                        alt="uploaded image"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold mb-1">
                        Uploaded on {image.date}
                      </div>
                      <a
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
            onClick={refreshImages}
          >
            Refresh Images
          </button>
            </div>
          </div>
        </>
      );
      
  };
  
  export default UploadedFiles;
  