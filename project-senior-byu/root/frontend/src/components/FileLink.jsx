import React from 'react';
import { Link } from 'react-router-dom';

const FileLink = ({ fileId, fileName }) => {
  const fileUrl = `/files/${fileId}`;

  return (
    <Link to={fileUrl}>{fileName}</Link>
  );
};

export default FileLink;
