import React, { useState } from 'react';
import { BsChevronDoubleLeft } from "react-icons/bs";

import { BsChevronDoubleRight } from "react-icons/bs";

import { HiOutlineChevronDoubleRight } from "react-icons/hi2";



function CardList ({ add, min }:any) {
 
 


  return (
      <div className={'w-[200px]  main_content_next_page relative left-3/4 hidden  xl:flex justify-between mt-10'}>


        <button onClick={min} className={'flex '}>

        <BsChevronDoubleLeft />
        
            {/* <img src="src/assets/icons/left-chevron1.png" alt="left_arrow_01"
                 className={'w-16 h-10 relative filter border-b-blue-700'}/>
            <img src="src/assets/icons/left-chevron2.png" alt="left_arrow_02"
                 className={'w-14 h-8 relative right-[2vw] top-[4px]'}/>
            <img src="src/assets/icons/left-chevron3.png" alt="left_arrow_03"
                 className={'w-12 h-6 relative right-[4vw] top-[8px]'}/> */}
        </button>

        <button onClick={add} className={'flex '}>

        <BsChevronDoubleRight />

            {/* <img src="src/assets/icons/left-chevron1.png" alt="left_arrow_01"
                 className={'w-16 h-10 relative'}/>
            <img src="src/assets/icons/left-chevron2.png" alt="left_arrow_02"
                 className={'w-14 h-8 relative right-[2vw] top-[4px]'}/>
            <img src="src/assets/icons/left-chevron3.png" alt="left_arrow_03"
                 className={'w-12 h-6 relative right-[4vw] top-[8px]'}/> */}
        </button>


    </div>
  );
}



export default CardList;