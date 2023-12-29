import React, { useState } from 'react';
import Product from "./Product.tsx";
import product from "./Product.tsx";

function CardList () {
  const [startIndex, setStartIndex] = useState(0);

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + 5);
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 5));
  };

  return (
      <div className={'w-fit  main_content_next_page relative left-3/4 hidden  xl:flex'}>


        <button/* onClick={handlePrevClick} disabled={startIndex === 0} */ className={'flex '}>
            <img src="src/assets/icons/left-chevron1.png" alt="left_arrow_01"
                 className={'w-16 h-10 relative filter border-b-blue-700'}/>
            <img src="src/assets/icons/left-chevron2.png" alt="left_arrow_02"
                 className={'w-14 h-8 relative right-[2vw] top-[4px]'}/>
            <img src="src/assets/icons/left-chevron3.png" alt="left_arrow_03"
                 className={'w-12 h-6 relative right-[4vw] top-[8px]'}/>
        </button>

        <button /*onClick={handleNextClick} disabled={startIndex + 5 >= product.length}*/ className={'flex rotate-180'}>
            <img src="src/assets/icons/left-chevron1.png" alt="left_arrow_01"
                 className={'w-16 h-10 relative'}/>
            <img src="src/assets/icons/left-chevron2.png" alt="left_arrow_02"
                 className={'w-14 h-8 relative right-[2vw] top-[4px]'}/>
            <img src="src/assets/icons/left-chevron3.png" alt="left_arrow_03"
                 className={'w-12 h-6 relative right-[4vw] top-[8px]'}/>
        </button>


      {/*<button onClick={handlePrevClick} disabled={startIndex === 0}>
        Previous
      </button>*/}
     {/* <button onClick={handleNextClick} disabled={startIndex + 5 >= product.length}>
        Next
      </button>*/}
   {/*   <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {product.slice(startIndex, startIndex + 5).map((product, index) => (
          <div key={index} style={{ border: '1px solid gray', margin: '8px', padding: '8px', width: '200px' }}>
             Render your card content here

          </div>
        ))}
      </div>*/}
    </div>
  );
}

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

export default CardList;