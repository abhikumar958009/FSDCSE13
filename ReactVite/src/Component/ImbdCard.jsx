import React from 'react';

const ImdbCard = () => {
  // Movie data extracted from the IMDb Best of 2025 chart
  const movies = [
    { rank: 1, title: 'Superman', image: 'https://unsplash.com' },
    { rank: 2, title: 'Weapons', image: 'https://unsplash.com' },
    { rank: 3, title: 'Sinners', image: 'https://unsplash.com' },
    { rank: 4, title: 'One Battle After Another', image: 'https://unsplash.com' },
    { rank: 5, title: 'Jurassic World: Rebirth', image: 'https://unsplash.com' },
    { rank: 6, title: 'Frankenstein', image: 'https://unsplash.com' },
    { rank: 7, title: 'Happy Gilmore 2', image: 'https://unsplash.com' },
    { rank: 8, title: 'Thunderbolts*', image: 'https://unsplash.com' },
    { rank: 9, title: 'Mission: Impossible - The Final Reckoning', image: 'https://unsplash.com' },
    { rank: 10, title: 'F1', image: 'https://unsplash.com' },
  ];

  // Split into two columns for the 1-5 and 6-10 grid layout
  const leftColumn = movies.slice(0, 5);
  const rightColumn = movies.slice(5, 10);

  return (
    <div style={styles.cardContainer}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.brandTitle}>
          IMDb <span style={styles.badge}>BEST OF 2025</span>
        </h1>
        <h2 style={styles.subTitle}>MOST POPULAR MOVIES</h2>
        <p style={styles.dateTag}>AS OF 12/2/25</p>
      </div>

      {/* Grid Layout for Columns */}
      <div style={styles.grid}>
        {/* Left Column (1-5) */}
        <div style={styles.column}>
          {leftColumn.map((movie) => (
            <div key={movie.rank} style={styles.movieRow}>
              <img src={movie.image} alt={movie.title} style={styles.avatar} />
              <div style={styles.textContainer}>
                <span style={styles.rank}>{movie.rank}</span>
                <span style={styles.title}>{movie.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (6-10) */}
        <div style={styles.column}>
          {rightColumn.map((movie) => (
            <div key={movie.rank} style={styles.movieRow}>
              <img src={movie.image} alt={movie.title} style={styles.avatar} />
              <div style={styles.textContainer}>
                <span style={styles.rank}>{movie.rank}</span>
                <span style={styles.title}>{movie.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Inline Styles to match the deep blue and pink/white aesthetics
const styles = {
  cardContainer: {
    backgroundColor: '#1E3A8A', // Deep blue theme background
    color: '#FFFFFF',
    fontFamily: '"Arial Black", Gadget, sans-serif',
    padding: '30px',
    borderRadius: '16px',
    maxWidth: '800px',
    margin: '20px auto',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    textTransform: 'uppercase',
  },
  brandTitle: {
    fontSize: '2.5rem',
    margin: '0 0 5px 0',
    letterSpacing: '-1px',
  },
  badge: {
    backgroundColor: '#FFFFFF',
    color: '#1E3A8A',
    padding: '2px 8px',
    fontSize: '1.2rem',
    borderRadius: '4px',
    verticalAlign: 'middle',
    marginLeft: '10px',
  },
  subTitle: {
    fontSize: '1.8rem',
    color: '#FFB6C1', // Light pink accent color
    margin: '0',
    letterSpacing: '1px',
  },
  dateTag: {
    fontSize: '0.85rem',
    color: '#E0E7FF',
    margin: '5px 0 0 0',
    opacity: 0.8,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  movieRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  avatar: {
    width: '65px',
    height: '65px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #FFFFFF',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.2',
  },
  rank: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#FFB6C1',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: '600',
  },
};

export default ImdbCard;
