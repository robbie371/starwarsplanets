import React from 'react';
import Card from './Card';


const CardList = ({ planets }) => {
    return (
        <div>
            {
                planets.map((info, i) => {
                    return (<Card 
                        key={i} 
                        id={planets[i].id} 
                        name={planets[i].name} 
                        diameter={planets[i].diameter} 
                        population={planets[i].population}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;