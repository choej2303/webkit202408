const Photo = ({photo}) => {
    return (<div className="w3-row w3-margin">

        <div className="w3-third">
            <img src={photo.img} style={{width: "100%", minHeight: "200px"}}/>
        </div>
        <div className="w3-twothird w3-container">
            <h2>{photo.title}</h2>
            <p>
                {photo.content}
            </p>
        </div>

    </div>)
}

export default Photo