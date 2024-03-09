import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Service() {
    return (
        <div>
            <Header/>
            {/* Hero Start */}
            <div className="container-fluid bg-primary py-5 bg-hero" style={{ marginBottom: 90 }}>
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-dark">Our Services</h1>
                            <div className="pt-2">
                                <a href className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Home</a>
                                <a href className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Our Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero End */}

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
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
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
            <Footer />
        </div>

    )
}

export default Service