import React from 'react';
import './index.css';


const Cards = ({cards}) => {
console.log(cards);
  return (
    <>
    {
        cards.map((curElem,index)=>{
            return(
                <div className='cards' key={index}>
                <span className='number'>{curElem.id}</span>
                <p>{curElem.body.slice(0,130)}</p>
                <button>{curElem.title.slice(0,15)}</button>
            </div>
            )
        })
    }
   
    </>
  )
}

export default Cards