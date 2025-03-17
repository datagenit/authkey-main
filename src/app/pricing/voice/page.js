import SignupComponent from '../../../../components/SignupComponent';


export const metadata = {
    title: "Voice call Pricing | Authkey.io",
    description: "Learn more about voice call pricing. Give your customer a unique voice calling experience with globally scallale solution. Pay for connected calls, addon extra discounts on high volume.",
    alternates: {
        canonical: "https://authkey.io/pricing/voice",
    },
};

const VoicePricing = () => {

    return (
        <div>
            <div className="hero herocontainer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center pb-5">
                            <h1>Simple & <br /> <span className="orange_txtcolor">  Flexible Voice  </span>
                                <span className="voilet_txtcolor"> Pricing</span> </h1>
                            <p className="mt-4"> Pay As You Go. No Hidden Setup Fees. Forever Free To Use Platform.  </p>
                        </div>
                    </div>
                </div>
            </div>



            <section className="slice pt-lg-6 pb-0">
                <div className="container pricing ">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-12">

                            <ul className='price-link'>
                                <li ><a href="/pricing/sms">SMS</a></li>
                                <li className='active'><a href="/pricing/voice">Voice</a></li>
                                <li><a href="/pricing/email">Email</a></li>
                                <li><a href="/whatsapp-business-api/pricing">Whatsapp</a></li>
                            </ul>



                            <div className="table-responsive">
                                <table className="table table-hover mt-2 my-0">
                                <tbody>
                                    <tr style={{ borderTop: 0 + 'px' }}>
                                        <th> Voice Quantity </th>
                                        <th> Per Pack </th>
                                        <th> Per Voice </th>
                                        <th> GST </th>
                                        <th> Buy Now  </th>
                                    </tr>


                                    <tr>
                                        <td>10,000 Voice Calls </td>
                                        <td>Rs.3,540 </td>
                                        <td>30 paisa </td>
                                        <td>18% </td>
                                        <td>  <a href="https://console.authkey.io/signup"> <span className="price-button">Sign up</span></a> </td>
                                    </tr>

                                    <tr>
                                        <td>25,000 Voice Calls </td>
                                        <td>Rs.7,670 </td>
                                        <td>26 paisa </td>
                                        <td>18% </td>
                                        <td>  <a href="https://console.authkey.io/signup"> <span className="price-button">Sign up</span></a> </td>
                                    </tr>
                                    <tr>
                                        <td>50,000 Voice Calls </td>
                                        <td>Rs.14,160 </td>
                                        <td>24 paisa </td>
                                        <td>18% </td>
                                        <td>  <a href="https://console.authkey.io/signup"> <span className="price-button">Sign up</span></a> </td>
                                    </tr>
                                    <tr>
                                        <td>1 Lac Voice Calls </td>
                                        <td>Rs.25,960 </td>
                                        <td>22 paisa </td>
                                        <td>18% </td>
                                        <td> <a href="https://console.authkey.io/signup"> <span className="price-button">Sign up</span></a> </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="fixbgColor">
                <div className="container pt-5 pb-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <h2 className="mt-4"> Choose from flexible month-to-month or annual plans  </h2>
                            <p>
                                Small team? Big team? Just-right team? Whether you have one dedicated Authkey Services give you entire company to log in, we've got you covered.
                            </p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-4">
                        <SignupComponent />
                        </div>
                    </div>
                </div>
            </section>
       
        </div>
    );
}

export default VoicePricing;