import React from "react";

function FoodItems({foodItems}) {
    return (
        <div className="w3-row-padding w3-padding-16 w3-center" id="food">
            {
                foodItems.map((foodItem) => {
                    return (
                        <div className="w3-quarter">
                            <img src={foodItem.src} alt={foodItem.alt} style={{width: "100%"}}/>
                            <h3>{foodItem.title}</h3>
                            <p>{foodItem.description}</p>
                            {foodItem.additionalDescription && <p>{foodItem.additionalDescription}</p>}
                        </div>
                    )
                })
            }
        </div>

    )
}

export default FoodItems;