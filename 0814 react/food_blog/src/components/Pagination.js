import React from "react";

function Pagination({paginationItems}) {
    return (
        <div className="w3-center w3-padding-32">
            <div className="w3-bar">
                {paginationItems.map((item) => {
                    return (
                        item === 1 ?
                            <a href="#" className="w3-bar-item w3-black w3-button">{item}</a>
                            :
                            <a href="#" className="w3-bar-item w3-button w3-hover-black">{item}</a>

                    )
                })}
            </div>
        </div>

    )
}

export default Pagination;