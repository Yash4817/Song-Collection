// src/components/SongDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SongDetails.css'; // Import the CSS file

const SongDetails = () => {
  const { id } = useParams();

  // Replace this with your actual data fetching logic
  const songDetails = {
    id: 1,
    title: 'Jaane Vo Kaise Log The',
    artist: 'Hemant Kumar',
    lyrics: 'Lyrics for Song 1...',
    cover: 'song1.jpg',
  };

  return (
    <div className="song-details">
      <img src={`/${songDetails.cover}`} alt={`${songDetails.title} Cover`} className="song-cover" />
      <h3>{songDetails.title}</h3>
      <p>Artist: {songDetails.artist}</p>
      <p>Lyrics: {songDetails.lyrics}</p>
      <Link to="/" className="back-link">
        Back to Song Chart
      </Link>
    </div>
  );
};

export default SongDetails;

