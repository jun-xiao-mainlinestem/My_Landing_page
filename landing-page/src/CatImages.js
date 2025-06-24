import React, { useState, useEffect } from 'react';

const CAT_API_KEY = 'live_FyoikMkTml356sWv32kjHMVxV40hMPMGJPdbXmqErts4Rvzs8vbmdgpgeAZWud4a';

function CatImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    // Fetch cat breeds on mount
    const fetchBreeds = async () => {
      const res = await fetch('https://api.thecatapi.com/v1/breeds', {
        headers: { 'x-api-key': CAT_API_KEY }
      });
      const data = await res.json();
      setBreeds(data);
    };
    fetchBreeds();
  }, []);

  const fetchCatImages = async () => {
    setLoading(true);
    let url = 'https://api.thecatapi.com/v1/images/search?limit=12';
    if (selectedBreed) {
      url += `&breed_ids=${selectedBreed}`;
    }
    const res = await fetch(url, {
      headers: {
        'x-api-key': CAT_API_KEY
      }
    });
    const data = await res.json();
    setImages(data.map(img => img.url));
    setLoading(false);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h2>Random Cat Images</h2>
      <div className="mb-3" style={{ minWidth: 220 }}>
        <select
          className="form-select"
          value={selectedBreed}
          onChange={e => setSelectedBreed(e.target.value)}
        >
          <option value="">All Breeds</option>
          {breeds.map(breed => (
            <option key={breed.id} value={breed.id}>{breed.name}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary mb-3" onClick={fetchCatImages} disabled={loading}>
        {loading ? 'Loading...' : 'Get Cat Images'}
      </button>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {images.map((url, idx) => (
          <div key={idx} style={{ width: '100%', aspectRatio: '1/1', minWidth: '180px', minHeight: '180px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px #ccc', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={url}
              alt="A cute cat"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatImages; 