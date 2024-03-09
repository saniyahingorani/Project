import React from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'

function Testimonial() {
    return (
        <div>
            <Header/>
            <div>
                {/* Hero Start */}
                <div className="container-fluid bg-primary py-5 bg-hero" style={{ marginBottom: 90 }}>
                    <div className="container py-5">
                        <div className="row justify-content-start">
                            <div className="col-lg-8 text-center text-lg-start">
                                <h1 className="display-1 text-dark">Testimonial</h1>
                                <div className="pt-2">
                                    <a href className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Home</a>
                                    <a href className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Testimonial</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero End */}
                {/* Testimonial Start */}
                <div className="container-fluid bg-primary bg-testimonial py-5" style={{ margin: '180px 0' }}>
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
            </div>

            <Footer />
        </div>

    )
}

export default Testimonial