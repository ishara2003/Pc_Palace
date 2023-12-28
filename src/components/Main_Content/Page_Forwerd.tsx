import React, { useState } from 'react';

const CardList = ({ cards }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + 5);
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 5));
  };

  return (
    <div>
      <button onClick={handlePrevClick} disabled={startIndex === 0}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={startIndex + 5 >= cards.length}>
        Next
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards.slice(startIndex, startIndex + 5).map((card, index) => (
          <div key={index} style={{ border: '1px solid gray', margin: '8px', padding: '8px', width: '200px' }}>
            {/* Render your card content here */}
            <p>{card.title}</p>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage:
/*
const App = () => {
  const exampleCards = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 1', description: 'Description 3' },
    { title: 'Card 2', description: 'Description 4' },
    { title: 'Card 1', description: 'Description 5' },
    { title: 'Card 2', description: 'Description 6' },
    { title: 'Card 1', description: 'Description 7' },
    { title: 'Card 2', description: 'Description 8' },
    // Add more cards as needed
  ];

  return <CardList cards={exampleCards} />;
};
*/

export default App;