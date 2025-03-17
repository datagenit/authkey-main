"use client";
import React, { useState } from 'react';

const EmailUnsubscribes = () => {

    const [showmessage, Setshowmessage]= useState(false);

    const [EmailUnsubscribe, SetEmailUnsubscribe]= useState('');
    
    const handleChange = (e) => {
 
        if(e.target.value==='others'){
            Setshowmessage(true);
        }else{
            Setshowmessage(false);
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault(); 
       // console.log(EmailUnsubscribe)
    }

    return (
        <div>
            <section style={{backgroundColor:'#efeaea',height:100+'vh'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 api-doc mt-5  bg-white p-3 shadow mb-0 text-left">
                                <div className="email-unsubscribe">
                                    <div className="text-center">
                                        <h2>munnakumar572@gmail.com </h2>
                                        <p>is subscribed to our mailing list(s).</p>
                                        

                                        <h3 style={{color:'red'}}>Unsubscribe from our mailing list </h3>
                                            <hr/>
                                    </div>
                                <div>
                                <p>
                                To help us improve our services, we would be grateful if you could tell us why:

                                </p>

                                <form onSubmit={handleSubmit} className="col-md-8 text-left">

                                <div className="form-check">
                                    <input onChange={e => SetEmailUnsubscribe(e.target.value)} className="form-check-input" type="radio" name="emailunsub" value="Your emails are not relevant to me" id="flexCheckDefault"/>
                                    <label value="Your emails are not relevant to me" className="form-check-label" for="flexCheckDefault">
                                    Your emails are not relevant to me
                                    </label>
                                 </div>

                                 <div className="form-check">
                                    <input className="form-check-input" onChange={e => SetEmailUnsubscribe(e.target.value)} type="radio" name="emailunsub" value="Your emails are too frequent" id="flexCheckDefault"/>
                                    <label value="Your emails are too frequent" className="form-check-label" for="flexCheckDefault">
                                    Your emails are too frequent
                                    </label>
                                 </div>

                                 <div className="form-check">
                                    <input className="form-check-input"  onChange={e => SetEmailUnsubscribe(e.target.value)} type="radio" name="emailunsub" value="I don't remember signing up for this" id="flexCheckDefault"/>
                                    <label value="I don't remember signing up for this" className="form-check-label" for="flexCheckDefault">
                                    I don't remember signing up for this
                                    </label>
                                 </div>

                                 <div className="form-check">
                                    <input className="form-check-input"  onChange={e => SetEmailUnsubscribe(e.target.value)} type="radio" name="emailunsub" value="I no longer want to receive these emails" id="flexCheckDefault"/>
                                    <label value="I no longer want to receive these emails" className="form-check-label" for="flexCheckDefault">
                                    I no longer want to receive these emails
                                    </label>
                                 </div>

                                 <div className="form-check">
                                    <input className="form-check-input"  onChange={e => SetEmailUnsubscribe(e.target.value)} type="radio" name="emailunsub" value="The emails are spam and should be reported" id="flexCheckDefault"/>
                                    <label value="The emails are spam and should be reported" className="form-check-label" for="flexCheckDefault">
                                    The emails are spam and should be reported
                                    </label>
                                 </div>

                                 <div className="form-check">
                                    <input className="form-check-input" onChange={handleChange}  type="radio" name="emailunsub" value="others" id="flexCheckDefault"/>
                                    <label value="others" className="form-check-label" for="flexCheckDefault">
                                    Others
                                    </label>
                                 </div>

                               

                                {
                                    showmessage ?

                                    <textarea className="form-control mt-3" onChange={e => SetEmailUnsubscribe(e.target.value) } placeholder="Enter Your Message"></textarea>

                                    :
                                    null

                                }


                                <div className="text-center col-md-12 m-auto">
                                <input type="submit" className='btn btn-primary mt-3' value="Unsubscribe" />
                        
                                </div>
                              
                               

                                </form>

                             

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </div>
    );
}

export default EmailUnsubscribes;