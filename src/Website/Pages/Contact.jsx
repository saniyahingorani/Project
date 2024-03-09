import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

function Contact() {
  const [formValue, setFormValue] = useState({
    id: '',
    name: '',
    email: '',
    comment: '',
  });

  const getForm = (e) => {
    setFormValue({ ...formValue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
  };

  const validation = () => {
    var result = true;

    if (formValue.name === '') {
      result = false;
      return false;
    }

    if (formValue.email === '') {
      result = false;
      return false;
    }

    if (formValue.comment === '') {
      result = false;
      return false;
    }

    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validation()) {
      try {
        const res = await axios.post(`http://localhost:3000/contact`, formValue);

        if (res.status === 201) {
          // Clear the form after successful submission
          setFormValue({
            id: '',
            name: '',
            email: '',
            comment: '',
          });
          alert('Contact submitted successfully!');
          return false;
        }
      } catch (error) {
        console.error('Error submitting contact form:', error);
        alert('Error submitting contact form. Please try again.');
      }
    }
  };

  return (
    <div className="container-xxl bg-white p-0">
      <Header title={"Contact"} />
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center"><span /><span /></p>
            <h1 className="text-center mb-5">Contact For Any Query</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <form action="" method="post" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="name"
                          value={formValue.name}
                          onChange={getForm}
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          value={formValue.email}
                          onChange={getForm}
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          name="comment"
                          value={formValue.comment}
                          onChange={getForm}
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 150 }}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
