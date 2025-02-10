import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/post.css";

export default function MemePost() {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/memes/getMemeById/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch meme");
        return response.json();
      })
      .then((data) => {
        setMeme(data);
        console.log(data)
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleLike = async () => {
    const formData = new FormData()

    console.log(meme._id);
    
    formData.append("memeId", meme._id);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/memes/toggleLike`, {
      method: "POST", 
      body: JSON.stringify({memeId:meme._id}),
      credentials: "include",
      headers:{"Content-Type":"application/json"}
    })
  }

  if (loading) return <div className="loading">Loading meme...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="meme-container">
      <Link to="/" className="back-btn">
        ← Back to Gallery
      </Link>
      <div className="meme-card">
        <img src={meme.imageUrl} alt={meme.title} className="meme-image" />
        <div className="meme-info">
          <h2>{meme.title}</h2>
          <button onClick={handleLike}>Like</button>
          <p>Likes: {meme.likes.length}</p>
          <p>Comments: {meme.comments.length}</p>
          <p>Created: {new Date(meme.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
