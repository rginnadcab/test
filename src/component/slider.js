function Slider(){
   const myStyle = {
        height : "500px"
    }
    return(
        <div>
           
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" style={myStyle} src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x900.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" style={myStyle}  src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" style={myStyle}  src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>



        </div>
    )
}

export default Slider;