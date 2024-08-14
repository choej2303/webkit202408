import React from "react";

function PopularTags({popularTags}) {
    return (
        <div className="w3-third w3-serif">
            <h3>POPULAR TAGS</h3>
            <p>
                {popularTags.map((tag, index) => (
                    <span className="w3-tag w3-black w3-margin-bottom">{tag}</span>
                ))}
            </p>
        </div>
    )
}

export default PopularTags;