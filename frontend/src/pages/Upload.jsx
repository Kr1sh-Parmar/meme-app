"use client";

import { useState } from "react";
import "../styles/upload.css";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsUploading(true);

    if (!title || !file) {
      setError("Please provide both a title and an image.");
      setIsUploading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/memes/createMeme`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload meme");
      }

      const data = await response.json();
      console.log(data.message);
      navigate("/");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while uploading the meme."
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload a New Meme</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="title">Meme Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Meme Image:</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={isUploading}>
          {isUploading ? "Uploading..." : "Upload Meme"}
        </button>
      </form>
    </div>
  );
}
