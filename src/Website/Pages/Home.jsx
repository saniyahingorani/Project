import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Home() {
    return (
        <div>
            <Header/>
            {/* Hero Start */}
            <div className="container-fluid bg-primary py-5 bg-hero" style={{ marginBottom: 90 }}>
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-dark">We Bring Your Home To Lively Colors</h1>
                            <p className="fs-4 text-dark mb-4">Nonumy diam dolores est ipsum diam amet lorem clita clita sit eirmod duo clita dolore dolor ut diam diam justo sed est</p>
                            <div className="pt-2">
                                <a href className="btn btn-secondary rounded-pill py-md-3 px-md-5 mx-2">Get A Quote</a>
                                <a href className="btn btn-outline-secondary rounded-pill py-md-3 px-md-5 mx-2">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero End */}
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row gx-0 mb-3 mb-lg-0">
                        <div className="col-lg-6 my-lg-5 py-lg-5">
                            <div className="about-start bg-primary p-5">
                                <h1 className="display-5 mb-4">Welcome To Painter</h1>
                                <p>Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et, tempor sit sit diam amet et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor magna dolore erat amet </p>
                                <a href className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src="website/img/about-1.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0">
                        <div className="col-lg-6" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src="website/img/about-2.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 my-lg-5 py-lg-5">
                            <div className="about-end bg-primary p-5">
                                <h1 className="display-5 mb-4">Why Choose Us?</h1>
                                <p>Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et, tempor sit sit diam amet et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor magna dolore erat amet </p>
                                <a href className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Get A Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Services Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                        <h1 className="display-5">Professional Painting Services</h1>
                        <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
                    </div>
                    <div className="row gy-4 gx-3">
                        <div className="col-lg-4 col-md-6 pt-5">
                            <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                                <div className="service-icon p-3">
                                    <div><i className="fa fa-2x fa-paint-brush" /></div>
                                </div>
                                <h3 className="mt-5">Regular Painting</h3>
                                <a className="btn shadow-none text-secondary" href>View Detail<i className="bi bi-arrow-right ms-1" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-5">
                            <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                                <div className="service-icon p-3">
                                    <div><i className="fa fa-2x fa-paint-roller" /></div>
                                </div>
                                <h3 className="mt-5">Wall Painting</h3>
                                <a className="btn shadow-none text-secondary" href>View Detail<i className="bi bi-arrow-right ms-1" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-5">
                            <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                                <div className="service-icon p-3">
                                    <div><i className="fa fa-2x fa-brush" /></div>
                                </div>
                                <h3 className="mt-5">Floor Coating</h3>
                                <a className="btn shadow-none text-secondary" href>View Detail<i className="bi bi-arrow-right ms-1" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-5">
                            <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                                <div className="service-icon p-3">
                                    <div><i className="fa fa-2x fa-eraser" /></div>
                                </div>
                                <h3 className="mt-5">Graffiti Removal</h3>
                                <a className="btn shadow-none text-secondary" href>View Detail<i className="bi bi-arrow-right ms-1" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-5">
                            <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                                <div className="service-icon p-3">
                                    <div><i className="fa fa-2x fa-spray-can" /></div>
                                </div>
                                <h3 className="mt-5">Mildew Removal</h3>
                                <a className="btn shadow-none text-secondary" href>View Detail<i className="bi bi-arrow-right ms-1" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-5">
                            <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                                <div className="service-icon p-3">
                                    <div><i className="fa fa-2x fa-city" /></div>
                                </div>
                                <h3 className="mt-5">Window Washing</h3>
                                <a className="btn shadow-none text-secondary" href>View Detail<i className="bi bi-arrow-right ms-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}
            {/* Quote Start */}
            <div className="container-fluid bg-primary bg-quote py-5" style={{ margin: '90px 0' }}>
                <div className="container py-5">
                    <div className="row g-0 justify-content-start">
                        <div className="col-lg-6">
                            <div className="bg-white text-center p-5">
                                <h1 className="mb-4">Get A Quote</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control bg-light border-0 py-3" rows={2} placeholder="Message" defaultValue={""} />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Get A Quote</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quote End */}
            {/* Team Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                        <h1 className="display-5">Dedicated Team Members</h1>
                        <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img className="img-fluid w-100" src="website/img/team-1.jpg" alt />
                                <div className="team-text">
                                    <div className="team-social">
                                        <a className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                    <div className="mt-auto mb-3">
                                        <h4 className="mb-1">Full Name</h4>
                                        <span className="text-uppercase">Designation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img className="img-fluid w-100" src="website/img/team-2.jpg" alt />
                                <div className="team-text">
                                    <div className="team-social">
                                        <a className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                    <div className="mt-auto mb-3">
                                        <h4 className="mb-1">Full Name</h4>
                                        <span className="text-uppercase">Designation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img className="img-fluid w-100" src="website/img/team-3.jpg" alt />
                                <div className="team-text">
                                    <div className="team-social">
                                        <a className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                    <div className="mt-auto mb-3">
                                        <h4 className="mb-1">Full Name</h4>
                                        <span className="text-uppercase">Designation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            {/* Testimonial Start */}
            <div className="container-fluid bg-primary bg-testimonial py-5" style={{ margin: '90px 0' }}>
                <div className="container py-5">
                    <div className="row g-0 justify-content-end">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-4">Testimonials</h1>
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item">
                                    <p className="fs-4 fw-normal"><i className="fa fa-quote-left text-secondary me-3" />Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid p-1 bg-secondary" src="website/img/testimonial-1.jpg" alt />
                                        <div className="ps-3">
                                            <h3>Client Name</h3>
                                            <span className="text-uppercase">Profession</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <p className="fs-4 fw-normal"><i className="fa fa-quote-left text-secondary me-3" />Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid p-1 bg-secondary" src="website/img/testimonial-2.jpg" alt />
                                        <div className="ps-3">
                                            <h3>Client Name</h3>
                                            <span className="text-uppercase">Profession</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
            {/* Blog Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                        <h1 className="display-5">Latest Articles From Painting Blog</h1>
                        <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src="website/img/blog-1.jpg" alt />
                                <div className="d-flex align-items-center">
                                    <div className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4" style={{ width: 60, height: 100 }}>
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href>Dolor clita vero elitr sea stet dolor justo  diam</a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle me-2" src="website/img/user.jpg" width={30} height={30} alt />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3"><i className="fa fa-eye text-secondary me-2" />12345</small>
                                        <small className="ms-3"><i className="fa fa-comment text-secondary me-2" />123</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src="website/img/blog-2.jpg" alt />
                                <div className="d-flex align-items-center">
                                    <div className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4" style={{ width: 60, height: 100 }}>
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href>Dolor clita vero elitr sea stet dolor justo  diam</a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle me-2" src="website/img/user.jpg" width={30} height={30} alt />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3"><i className="fa fa-eye text-secondary me-2" />12345</small>
                                        <small className="ms-3"><i className="fa fa-comment text-secondary me-2" />123</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src="website/img/blog-3.jpg" alt />
                                <div className="d-flex align-items-center">
                                    <div className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4" style={{ width: 60, height: 100 }}>
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href>Dolor clita vero elitr sea stet dolor justo  diam</a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle me-2" src="website/img/user.jpg" width={30} height={30} alt />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3"><i className="fa fa-eye text-secondary me-2" />12345</small>
                                        <small className="ms-3"><i className="fa fa-comment text-secondary me-2" />123</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}
            {/* Call To Action Start */}
            <div className="container-fluid bg-primary bg-call-to-action py-5" style={{ marginTop: 90 }}>
                <div className="container py-5">
                    <div className="row g-0 justify-content-start">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-4">Do You Have Any Project?</h1>
                            <p className="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                            <a href className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Call To Action Start */}
            <Footer/>
        </div>

    )
}

export default Home