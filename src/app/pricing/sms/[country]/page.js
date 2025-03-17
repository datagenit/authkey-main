"use client";
import { useEffect, useState } from "react";
import { getCuntryWisePriceList } from "../../../../../components/Api";
import CountryWisePricing from "../../../../../components/CountryWisePricing";
import { MdOutlineTextsms } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbCreditCardPay } from "react-icons/tb";

const HelpCenterDetails = ({ params }) => {

    let country = params.country.replace(/-/g, ' ').toLowerCase()

    const [countryPriceDetails, setCountryPriceDetails] = useState([]);

    useEffect(() => {
        getCuntryWisePriceList(country).then((res) => {
            if (res) {
                setCountryPriceDetails(res.data.data);
            }
        });
    }, [params]); // Depend on id, not params

    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row  mt-5 justify-content-center">
                        <div className="col-md-10 text-center">
                            <h1>Simple SMS pricing for Country  <br /> <span style={{ color: '#ff8434', textTransform: 'capitalize' }}> {country} </span> </h1>
                            <p className="mt-4"> Global SMS pricing based on the destination, with one fixed price per {country}.
                                Best SMS API pricing for sending messaging, critical OTPs, notification, alerts and more. </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className=" mt-5">
                                <div className="table-responsive  m3-5">
                                    {countryPriceDetails ? (
                                        <table className="table table-bordered my-0">
                                            <thead>
                                                <tr>
                                                    <th className="d-xl-table-cell">Country Name</th>
                                                    <th className="d-xl-table-cell text-right"> SMS Cost</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {countryPriceDetails.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.country_name}</td>
                                                        <td className="text-right">{item.s} EURO</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <button type="button" className="btn btn-block btn-sm btn-primary py-3">
                                            Please select your country name
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-4 mb-4">
                            <div className="card text-center heightFull">
                                <div className="card-body smscornerbox pb-4">
                                    <div class="mt-2 mb-2 rcsicon rcsiconBlue">
                                        <TbCreditCardPay size={25} />
                                    </div>
                                    <h5>Pay as You Go</h5>
                                    <p className="mb-0">Our pay as you go model allows you to pay only for the SMS messages you send.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center heightFull">
                                <div className="card-body smscornerbox pb-4">
                                    <div class="mt-2 mb-2 rcsicon rcsiconYellow">
                                        <MdOutlineTextsms  size={25} />
                                    </div>
                                    <h5>SMS API</h5>
                                    <p className="mb-0">Our SMS API lets you integrate messaging capabilities. Send SMS through your
                                        application.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center heightFull">
                                <div className="card-body smscornerbox pb-4">
                                    <div class="mt-2 mb-2 rcsicon rcsiconOrange">
                                        <RiDiscountPercentLine  size={25} />
                                    </div>
                                    <h5>Volume based Discounts</h5>
                                    <p className="mb-0">Plan to send more than 50,000. Make your SMS pricing shorter. Take advantage of volume discounts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fixbgColor">
                <div className="container pt-5 pb-5">
                    <div className="row mb-2 justify-content-center mt-2">
                        <div className="col-md-10 text-center">
                            <h2>Worldwide SMS Pricing</h2>
                            <h6>
                                Get Discounts form 50,000 SMS
                            </h6>
                        </div>
                    </div>
                    <div className="mb-3">
                            <CountryWisePricing />
                    </div>
                </div>
            </section>


            <section className="py-4">
                <div className="container">
                    <div className="row mb-5 mt-5 justify-content-center">
                        <div className="col-md-10 text-center">
                            <h2> Pay Only for what You use</h2>
                            <h6 className="mt-2">
                                The cost depends on the country of destination and the requirements you have.
                            </h6>
                        </div>
                    </div>
                    <div className="mt-5 mb-5">
                            <div className="row justify-content-center">
                                <div className="col-md-4 text-center">
                                    <a href='https://console.authkey.io/signup'>   
                                    <button className="button-link btn-block">
                                        Signup Now
                                    </button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default HelpCenterDetails;
