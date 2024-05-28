const Carousel = () => {
        return(
                <>
                <div className="container slider-container">
                        <div className="row">
                                <div className="col">
                                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                        <div className="carousel-item active">
                                                <img src="images/image-slider-4.jpg" className="d-block w-100" alt="..."/>
                                        
                                        </div>
                                        <div className="carousel-item">
                                                <img src="images/image-slider-5.jpg" className="d-block w-100" alt="..."/>
                                        
                                        </div>
                                        <div className="carousel-item">
                                                <img src="images/image-slider-6.jpg" className="d-block w-100" alt="..."/>
                                        
                                        </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                        </button>
                                        </div>
                                </div>
                        </div>
                </div>
                </>
        )
}
export default Carousel