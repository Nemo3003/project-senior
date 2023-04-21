import { useState } from "react";
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'YOUR_REGION',
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
});
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const s3 = new AWS.S3();
    const fileName = photo.name;
    const fileType = photo.type;
  
    s3.putObject({
      Bucket: 'YOUR_BUCKET_NAME',
      Key: fileName,
      Body: photo,
      ContentType: fileType,
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  };
  

  return (
    <div className=" flex justify-center items-center">
      <div className="max-w-md w-full mx-auto shadow-lg rounded-md p-8">
        <div className="text-center font-medium text-xl mb-4">Sign Up</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2">
              Are you a student?
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="isStudent"
                checked={isStudent}
                onChange={() => setIsStudent(true)}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="isStudent"
                checked={!isStudent}
                onChange={() => setIsStudent(false)}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2" htmlFor="photo">
              Upload your photo
            </label>
            <input
              className="block appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photo"
              type="file"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
