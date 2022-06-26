import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  // useState can be used multiple times for different data
  const [artist, setArtist] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title); // salje title kao props prema SongList
    setTitle(''); // Resetuje input i vrednos u useState
  }

  console.log(title);
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type='submit' value='add' />
    </form>
  );
}
 
export default NewSongForm;