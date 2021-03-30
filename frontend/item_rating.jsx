import React from 'react';
import {IoFastFoodSharp} from 'react-icons/io5';

class ItemRating extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            // if you have never rated anything, it will start off as null
            rating: null,
            hover: null
        };
    }
    
    setRating(newValue){
        this.setState ({ rating: newValue})
    }

    setHover(newValue){
        this.setState ({ hover: newValue})
    }

    render() {
        return(
        
            // create an empty array with length of 5 and map over each index with the 
            // food icon

            // (5)].map((item, i) 
                // we want to iterate through the array 5 times
                // aso we can produce 5 items
                // item -> arbitraty name
                // i -> index of the iteration we are on
            <div>
                {[...Array(5)].map((item, i) => {
                    // since array indices start at 0 and we want the first value to be 1
                    // we simply add 1 to it
                    const ratingValue = i + 1;

                    return (
                        // wrap this in an label so we we can use a radio button
                        // which we will hide. it will allow us to sudo click on the icon
                        <label>
                            <input 
                                type="radio"
                                // hides the radio button
                                style={{display:'none'}}
                                // value of the current icon
                                value = {ratingValue}
                                // call the setRating function and pass in ratingValue as a prop
                                onClick = {() => this.setRating(ratingValue)}

                            />


                        
                            <IoFastFoodSharp 
                                size={50}
                                // react icons can take in a color prop
                                    // if the rating is less than the rating that we clicked (this.state.rating)
                                        // change it to yellow ("ffc107")
                                    // else
                                        // change it to grey ("#e4e5e9")
                                color={ratingValue <= (this.state.hover ||this.state.rating) ? "ffc107" : "#e4e5e9"}
                                    // this.state.hover ||this.state.rating
                                        // we want this.state.hover to take precedent
                                
                                onMouseEnter={()=> this.setHover(ratingValue)}
                                onMouseExit={()=> this.setHover(null)}
                                />
                        </label>
                    )

                } )}
            </div>
                    

        )
        }
}


export default ItemRating;