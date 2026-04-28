import img1 from '../../public/img/property-1.jpg'; 
import img2 from '../../public/img/property-2.jpg';
import img3 from '../../public/img/property-3.jpg';
import img4 from '../../public/img/property-4.jpg'; 
import img5 from '../../public/img/property-5.jpg';
import img6 from '../../public/img/property-6.jpg';

function Footer(){
    return(
            <div>
                <footer>      
                        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="container py-5">
                                <div className="row g-5">
                                    <div className="col-lg-3 col-md-6">
                                        <h5 className="text-white mb-4">Get In Touch</h5>
                                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>KG 123 St Nyarutarma</p>
                                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+250 782 895 666</p>
                                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                                        <div className="d-flex pt-2">
                                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <h5 className="text-white mb-4">Quick Links</h5>
                                        <a className="btn btn-link text-white-50" href="">About Us</a>
                                        <a className="btn btn-link text-white-50" href="">Contact Us</a>
                                        <a className="btn btn-link text-white-50" href="">Our Services</a>
                                        <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
                                        <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <h5 className="text-white mb-4">Photo Gallery</h5>
                                        <div className="row g-2 pt-2">
                                            <div className="col-4">
                                                <img className="img-fluid rounded bg-light p-1" src={img1} />
                                            </div>
                                            <div className="col-4">
                                                <img className="img-fluid rounded bg-light p-1" src= {img2} alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img className="img-fluid rounded bg-light p-1" src={img3} />
                                            </div>
                                            <div className="col-4">
                                                <img className="img-fluid rounded bg-light p-1" src= {img4} alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img className="img-fluid rounded bg-light p-1" src={img5} />
                                            </div>
                                            <div className="col-4">
                                                <img className="img-fluid rounded bg-light p-1" src= {img6} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <h5 className="text-white mb-4">Newsletter</h5>
                                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="copyright">
                                    <div className="row">
                                        <div className="col-md-12 text-center text-md-center mb-3 mb-md-0">
                                            &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
                                            
                                            
                                            Designed By <a className="border-bottom" href="mailto:01ericmax@gmail.com">ERIC MAX</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>  
                    
                {/* Back to Top  */}

                <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>    
        </div>

    );
}
export default Footer;