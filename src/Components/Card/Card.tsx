import React from 'react';
import imgCard from '../../assets/images/imageCard.jpg';
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return (
    <div className='card'>
        <img src={imgCard} alt="pcCoding" 
        />
        <div className='details'>
            <h2>
              {companyName}({ticker})
            </h2>
            <p>
              ${price}
            </p>
        </div>
        <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, vel?</p>
    </div>
  )
}

export default Card