import dynamic from "next/dynamic";

const FaqComponents = dynamic(
    () => import("../../../../components/FaqComponents"),
    {
      loading: () => <p>Loading...</p>,
    }
  );


const data = {
    rows: [
        {
            title: "What is a Voice OTP?",
            content: `The sending OTP numbers through a phone call using the text to speech technology is called a Voice Call OTP. The voice call otp is triggered on an event of API hit.  
            `,
        },
        {
            title: "How can I get an OTP on a call?",
            content:
                `You can get the OTP on phone call using the Voice OTP service by Authkey.io. Authkey is a leading OTP service provider that will offer you a multichannel API that triggers voice based OTP on timely delivery. You just have to integrate the API into your application code to start a call based OTP service. 
                `,
        },
        {
            title: "How can I use Voice OTP service?",
            content:
                ` <ol>
                <li>Simply you can use voice OTP service to deliver the call based OTPs.
                </li>
                <li>You can also use it as a fallback solution for SMS OTP failure i.e. an automated voice call OTP is triggered on the failure/delay of OTP SMS. 
                </li>
            </ol>  
                `,
        },
        {
            title: "Which are the best 2FA techniques for business?",
            content:
                `SMS OTP and Voice OTP are the most commonly used techniques.
                Hardware keys and authenticator apps are also used by businesses who work on highly secured scenarios like google, microsoft, banking, etc.  
                `,
        },
        {
            title: "What are the advantages of a Voice OTP service?",
            content:
                `<ol>
                <li>Sending a Voice call OTP under good network coverage is always quick to reach for a valid number.

                </li>
                <li>A voice OTP service never gives a glance like SMS, as OTP is heard only by the callee.

                </li>
                <li>Voice OTP can also be used as a substitute for OTP SMS (Fallback). If SMS OTP fails to deliver on time, an automated call based OTP is triggered.</li>
            </ol> 
                `,
        }

    ],
};

export const metadata = {
    title: "Voice OTP Service provider | Voice OTP - Authkey.io ",
    description: "Voice OTP 2FA service is the way of sending OTP through phone call. Use automated calls to deliver the OTP on occurrence of OTP SMS failure. Authkey is a leading voice OTP service provider that helps you set up call based OTP authentication.",
    alternates: {
        canonical: "https://authkey.io/otp-service-provider/voice",
    },
};


const OtpServiceProviderVoice = () => {
    return (
        <div>
             <div className="hero">
                <div className="container">
                <div className="row d-flex align-items-center">
                        <div className="col-md-6 mt-5">
                            <h1>
                                Send Secure  <span className="orange_txtcolor"> Voice OTP</span>
                            </h1>
                            <p> Use automated phone calls to send Voice OTP or create a failsafe fallback for SMS OTP  </p>
                            <a href="https://console.authkey.io/signup"> <button className="btn mt-4">
                                Sign up
                            </button> </a>
                        </div>
                        <div className="col-md-6">
                            <div className='text-right'>
                                <img className='img-fluid w-75 mt-5' alt='voice' src="/img/voice-otp-service-provider.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="slice slice-lg pt-lg-6 pb-0 pb-lg-6">
                <div className="container">

                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h2 className=""> What is voice OTP service? </h2>
                            <div className="mt-2">
                                <p className="lead lh-180">
                                    The voice OTP service is a sending of one time password through an automated voice call on a registered mobile number and  it  is generated using the text to speech generator. In most  of the cases it is perfectly used as a fallback for SMS OTP failure.  </p>
                            </div>
                            <div className="border_bar mt-5 mb-5"></div>
                        </div>
                    </div>

                    <div className="row justify-content-center mb-5">
                        <div className="col-md-4 text-left">
                            <img alt='video' className='img-fluid' src="/img/voice-otp-service.jpg"/>
                        </div>
                        <div className="col-md-6 text-left">
                            <div className="sms-api">
                                <h2 className="mb-4 mt-5"> Start with call-based OTP  </h2>
                                <p className="mt-2">
                                    Businesses can facilitate the generation of call-based OTPs for their prospective customers through voice OTP 2FA. Customers can receive time-sensitive notifications instantly on their mobile like OTP, utility passwords, transactions, alerts and notifications.

                                </p>
                                <a href="https://console.authkey.io/signup"> <button className="button-link ">
                                    signup Now
                                </button> </a>

                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="slice slice-lg  pb-0 pb-lg-6">

                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-12">
                            <div style={{ 'background': '#f2f3fe' }} className="card">

                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img alt='video provide' className='img-fluid' src="/img/img-call-to-action.png" />
                                    </div>
                                    <div className='col-md-8'>

                                        <div className="card-body text-center pb-5">

                                            <h2 className="h4 lh-130 mt-5 mb-3">  Sign up for Authkey’s Voice Call OTP </h2>

                                            <p className=" mt-5">
                                                Voice call based OTP service is helping many businesses as a failsafe delivery tool for SMS OTP failure. It is cost-effective and will never let your customers wait as Authkey ensures the timely delivery of OTP calls. </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            <section className="">
                <div className="container">
                    <div className="row mb-5 mt-5 justify-content-center text-center">
                        <div className="col-lg-10">
                            <h2 className=""> Some use cases of Voice OTP solution </h2>
                            <div className="border_bar"></div>

                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className="">Fallback Solution</h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0">The failed SMS OTP can be followed by triggering an automated voice OTP with the same API. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className=""> Authentication  </h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0">Using the voice OTP verification for login or signup for product, transaction, etc is a fast and secure approach. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className="">  Transactional </h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0"> Protect your customer while doing a financial transaction with voice OTP authentication with a registered number. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className=""> Password Resets </h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0"> Allow your customer to change the email address or password using the voice OTP verification.  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className=""> Account Reactivations </h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0"> Give a business back option with retrieval of suspended accounts using the number verification with Voice OTP. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className=""> Voice OTP as a Password  </h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0">  Replace the static password with dynamic & unique real time authentication process using call based OTP.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ 'background': '#f9fafa' }} className="slice slice-lg pt-lg-6 pb-lg-6 pb-0 ">
                <div className="container ">

                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-6 text-center">
                            <h2 className="">  Advantages of using Voice OTP </h2>
                            <p>Authkey is a enterprise grade OTP service provider that offer secure OTP authentication platform</p>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-lg-12">
                            <div className="buletpoint">
                                <div className="row">
                                    <div className="col-md-4">
                                        <strong>  Quick to reach </strong>
                                        <p> Phone calls are quick to reach to callee. Automated Triggering of a voice OTP reaches within a few seconds.</p>
                                    </div>
                                    <div className="col-md-4">
                                        <strong> Simple Integrations </strong>
                                        <p> One API integration offers multi functionality. Perform voice OTP verification using a robust single API. </p>
                                    </div>
                                    <div className="col-md-4">
                                        <strong>  Custom Voice Template </strong>
                                        <p>Configure your voice OTP call
                                            Audio through dashboard. Initially play a brand signature as an impression. </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ 'background': '#f9fafa' }} className="slice slice-lg pb-lg-6 pb-0 ">
                <div className="container ">

                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-10 text-center">
                            <h2 className="">  Best in Market Pricing. Ready to Get Started?

                            </h2>


                            <p className="mt-2">
                                Enjoy the best OTP platform. Get volume based discounts and <a href="/startup-india">Free Startup Credits</a>.

                            </p>

                            <div className="border_bar"></div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-lg-8">
                            <div className="buletpoint">
                                <div className="row">
                                    <div className="col-md-4">
                                    <a href="https://console.authkey.io/signup">  <button className="button-link btn-block">
                                            Talk to an expert
                                        </button> </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href='/pricing/voice'>   <button className="button-link btn-block">
                                            See Pricing
                                        </button> </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href='/startup-india'>   <button className="button-link btn-block">
                                            Startup Plan
                                        </button> </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="slice slice-lg pt-lg-6 pb-lg-6 pb-0 ">
                <div className="container ">

                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-6 text-center">
                            <h2 className="">  Why Choose Authkey ? </h2>
                            <div className="border_bar"></div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-lg-12">
                            <div className="buletpoint">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong> We Scale with you </strong>
                                        <p> Regardless of one or million messages you send, our SMS infrastructure will ensure you that they deliver on time.</p>
                                    </div>
                                    <div className="col-md-3">
                                        <strong> Pay on Delivery </strong>
                                        <p> Utilization based pricing enables you to get discounted pricing from the beginning while only paying for what you use.</p>
                                    </div>
                                    <div className="col-md-3">
                                        <strong> Enterprise-grade </strong>
                                        <p> We connect your messaging flow directly over 220+ carriers in 200+ countries for international delivery that is best in class.</p>
                                    </div>
                                    <div className="col-md-3">
                                        <strong> Compliance & developers</strong>
                                        <p> We align you with the support and developer team. We ensure that your Authkey.io experience is smooth and successful.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FaqComponents data={data} />

       
        </div>
    );
}

export default OtpServiceProviderVoice;