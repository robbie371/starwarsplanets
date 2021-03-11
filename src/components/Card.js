import React from 'react';

const Card = ({name, diameter, population, id}) => {
    return (
        <div className='tc dib bg-washed-blue o-80 br3 pa4 ma2 grow bw2 shadow-5'>
            <img alt='planet' src={`https://loremflickr.com/${id}320/240/landscape`} 
                style={{width:'200px', height:'200px', resizeMode: 'contain'}}/> 
            <div>
                <h2>{name}</h2>
                <p>Diameter: {diameter}</p>
                <p>Population: {population}</p>
            </div>
        </div>
    );
}

export default Card;

