"use client";
import React, { useState } from 'react';

const EclerxOutIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [bgColor, setBgColor] = useState('');

  const contactUs = () => {
    document.querySelector('body').scrollTo(0, 500);
    const contactData = {
      name,
      email,
      mobile: phone,
      message,
      method: 'create',
    };

    fetch('https://authkey.io/api/contact-us.php', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    })
      .then((result) => result.json())
      .then((resp) => {
        if (resp.success === true) {
          setBgColor('alert alert-success alert-dismissible');
          setSuccessMessage(true);
          setErrorMessage(resp.message);
          document.getElementById('contact-form').reset();
        } else {
          setBgColor('alert alert-danger alert-dismissible');
          setErrorMessage(resp.message);
          setSuccessMessage(true);
        }
      });
  };

  return (
    <div>
      <section className="hero homebg">
        <div className="container text-center py-5">
          <img alt="opt in" src="/img/eClerx.png" className="img-fluid" />
        </div>
      </section>
      <section className="slice slice-lg" id="sct-form-contact">
        <div className="container position-relative zindex-100">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 text-center">
              <h2>Eclerx Token Registration Form</h2>
              <p>By filling up this form you are allowing Eclerx to send Tokens for VPN Login via SMS</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {successMessage && (
                <div className={bgColor} role="alert">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                  <div>{errorMessage}</div>
                </div>
              )}
              <form id="contact-form">
                <div className="form-group">
                  <input
                    onChange={(event) => setName(event.target.value)}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(event) => setPhone(event.target.value)}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="+40-745-234-567"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(event) => setMessage(event.target.value)}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Employee ID"
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="form-check ml-2">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      I allow Eclerx to send Tokens for VPN Login via SMS
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button type="button" onClick={contactUs} className="btn btn-block btn-lg btn-primary mt-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EclerxOutIn;