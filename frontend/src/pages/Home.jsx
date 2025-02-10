"use client";

import { useState, useEffect } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/memes/getAllMemes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch memes");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setMemes(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading memes...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <>
    <Navbar />
    <div className="meme-gallery">
      <h1>Meme Gallery</h1>
      <Link to={"/upload"}>
        <button>Upload Meme</button>
      </Link>
      <div className="meme-grid">
        {memes.map((meme) => (
          <Link key={meme._id} className="meme-card" to={`/meme/${meme._id}`}>
            <img
              src={meme.imageUrl || "/placeholder.svg"}
              alt={meme.title}
              className="meme-image"
            />
            <div className="meme-info">
              <h2>{meme.title}</h2>
              <p>Likes: {meme.likes.length}</p>
              {/* <p>Comments: {meme.comments.length}</p> */}
              {/* <p>Created: {new Date(meme.createdAt).toLocaleDateString()}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
