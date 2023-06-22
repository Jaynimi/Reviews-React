import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // Set the useState for the particular review displayed using id as key.
  // Arrays start counting from 0. So people[0] is the first item in the people array.
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index]

  // Put it in a loop and Display the first item again when you click on nextperson at the end, and last person when you click on previous person at the befinning.
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // Display the next item when you click on the nextPerson button
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  // Display the prev item when you click on the prevPerson button
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index ) {
      randomNumber = index + 1;
    }
    return setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>          
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>          
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>          
          surprise me
      </button>
    </article>
  )
};

export default Review;
