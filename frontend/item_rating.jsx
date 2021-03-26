import React, {useState} from 'react'
import {IoFastFoodSharp} from 'react-icons/io5'


const ItemRating = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
 
    return (
        // create empty array with 5 undefined elements
        // then map it over with each with the food item. 
        // remember to add a unique 'key' prop, otherwise you'll get a "Warning: Each Child .."
        <div>
            {[...Array(5)].map((item, i) => {
                const ratingValue = i+1;

                return (
                    <label>
                        <input 
                            type="radio" 
                            name ="rating" 
                            value = {ratingValue}
                            onClick={() => setRating(ratingValue)}


                        />
                        <IoFastFoodSharp 
                            className="item"
                            color={ratingValue <= (hover || rating) ? "#ffc107":"e4e5e9"}
                            size={100}
                            onMouseEnter={()=> setHover(ratingValue)}
                            onMouseExit={()=> setHover(null)}
                        />
                    </label>
                )
            })}
        </div>
    );

};

export default ItemRating;