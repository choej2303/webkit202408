import Photo from "../Photo";

export default ({photoArr}) => {
    return (
        <div className="w3-content">
            <h1>PhotoList</h1>
            {photoArr.map((photo, index) => {
                return (
                    <Photo
                        key={index}
                        photo={photo}>
                    </Photo>
                )
            })}
        </div>
    )
}