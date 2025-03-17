"use client";
import { useState } from 'react';
const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const [bgColor, setBgColor] = useState('');

    const contactUs = async () => {
        document.querySelector('body').scrollTo(0, 500);

        const contactData = {
            name,
            email,
            mobile: phone,
            message,
            method: 'create'
        };

        try {
            const response = await fetch('https://console.authkey.io/api/contact-us.php', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactData)
            });

            const resp = await response.json();
            
            if (resp.success === true) {
                setBgColor("alert alert-success alert-dismissible");
                setSuccessMessage(true);
                setErrorMessage(resp.message);
                document.getElementById('contact-form').reset();
            } else {
                setBgColor("alert alert-danger alert-dismissible");
                setErrorMessage(resp.message);
                setSuccessMessage(true);
            }
        } catch (error) {
            setBgColor("alert alert-danger alert-dismissible");
            setErrorMessage("An error occurred. Please try again later.");
            setSuccessMessage(false);
        }
    };

    return (
        <div>
            <section style={{ background: '#3f3966' }} className="py-6 pt-lg-7 pb-lg-7">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="card text-center hover-translate-y-n10 hover-shadow-lg">
                                <div className="px-5 pb-5 pt-5">
                                    <div className="">
                                        <div className="icon text-warning icon-sm mx-auto">
                                            <i data-feather="phone-call"></i>
                                        </div>
                                    </div>
                                    <h5 className=""> Mail Us</h5>
                                    <div className="mt-4">
                                        <a href="mailto:hello@authkey.io" className="link-underline-warning">hello@authkey.io</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="slice slice-lg" id="sct-form-contact">
                <div className="container position-relative zindex-100">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-6 text-center">
                            <h3>Contact us</h3>
                            <p className="lh-190">If there's something we can help you with, just let us know. We'll be more than happy to offer you our help</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            {
                                successMessage && (
                                    <div className={bgColor} role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <div className="">
                                            {errorMessage}
                                        </div>
                                    </div>
                                )
                            }
                            <form id="contact-form" onSubmit={(e) => { e.preventDefault(); contactUs(); }}>
                                <div className="form-group">
                                    <input onChange={(event) => setName(event.target.value)} className="form-control form-control-lg" type="text" placeholder="Your name" required />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => setEmail(event.target.value)} className="form-control form-control-lg" type="text" placeholder="email@example.com" required />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => setPhone(event.target.value)} className="form-control form-control-lg" type="text" placeholder="+40-745-234-567" required />
                                </div>
                                <div className="form-group">
                                    <textarea onChange={(event) => setMessage(event.target.value)} className="form-control form-control-lg" placeholder="Tell us a few words ..." rows="3" required></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-block btn-lg btn-primary mt-4">Send your message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;