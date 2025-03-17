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
            title: "What is SMS OTP?",
            content: ` SMS OTPs are one-time passwords sent to a mobile number via text. An OTP sent through text message is always dynamic, unique, and valid for a specific period of time. The user has to validate the OTP to pass tha 2FA.    
            `,
        },
        {
            title: "What if my SMS OTP failed?",
            content:
                ` No worries about the SMS channel. 
                The SMS OTP API introduced by Authkey includes a fallback option that automatically reroutes the failed or delayed OTP to another channel. <a href="/blog/what-is-fallback-for-sms-otp"> Know more </a> 
                `,
        },
        {
            title: "Why do businesses use SMS OTP services?",
            content:
                `The OTP SMS service is the most simplified form of two factor authentication. The businesses can add the extra secure SMS OTP service to safeguard the online transaction and data privacy. The OTP verification service protects the business data and suppresses the increased risk of data breaches, phishing attacks, and security threats.
                `,
        },
        {
            title: "How do I integrate SMS OTP service into my website?",
            content:
                ` To avail the OTP service, first you need to choose the best OTP service provider.
                The OTP service uses the SMS and Voice triggering on an event. This is done by API integration by developers. 
                `,
        },
        {
            title: " What is the cost for OTP service?",
            content:
                ` Prices for OTP service vary based on quantity purchased. Talk to our experts to get extra volume based discounts. Visit <a href="/pricing/sms">Pricing Plans</a>.
                `,
        },
    ],
};

export const metadata = {
    title: "SMS OTP service provider - Authkey.io",
    description: "Use SMS OTP Service. Send OTPs to your customers using SMSes. Authkey.io provides reliable OTP SMS services with high deliverability and low latency.",
    alternates: {
        canonical: "https://authkey.io/otp-service-provider/sms",
    },
};


const OtpServiceProviderSMS = () => {
    return (
        <div>
             <div style={{ 'background':'#cbe5fc' }} className="hero">
                <div className="container">
                <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <h1>
                                SMS OTP
                                <span className="orange_txtcolor"> Service Provider </span>
                            </h1>
                            <p> Reliable SMS OTP Service for business.
                                Implement 2FA using SMS OTP verification to secure your application.
                            </p>
                            <a href="https://console.authkey.io/signup">  <button className="btn mt-4">
                                Sign up
                            </button> </a>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img  alt="SMS OTP" className='img-fluid mt-5' src="/img/sms-otp.gif" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="slice slice-lg pt-lg-6 pb-0 pb-lg-6">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-4 text-left">
                            <img  alt="SMS OTP" className='img-fluid' src="/img/otp-sms.jpg" />
                        </div>
                        <div className="col-md-6 text-left">
                            <div className="sms-api">
                                <h2 className="mb-4 mt-5"> What is an SMS OTP?  </h2>
                                <p className="mt-2">
                                    SMS OTP is a one time password sent via SMS text to verify and authenticate the online event. The OTP code is always a unique and dynamic number required to use within a time limit. It implements the 2AF layer into your application to login portal, transaction confirmation, or event requests.

                                </p>
                                <a href="https://console.authkey.io/signup">  <button className="button-link ">
                                    signup Now
                                </button> </a>

                            </div>
                        </div>
                    </div>


                </div>
            </section>



            <section className="">
                <div className="container">
                    <div className="row mb-5 mt-5 justify-content-center text-center">
                        <div className="col-lg-10">
                            <h2 className="">  In what ways can SMS OTP service be used by businesses? </h2>
                            <div className="border_bar"></div>
                            <p className='mt-5'>Choose the best otp SMS service provider for seamless OTP sending for business consistency.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className="">Implement 2FA</h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0">Increase the security strength. Add 2FA with SMS  OTP to authenticate the online event. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className=""> Login/signup using OTP  </h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0"> Use SMS OTP to login or sign up for the account. Use User’s number as a login entity .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className="">   Verify Transactions  </h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0">  Protect all the financial  transactions with OTP validation using the OTP SMS authentication. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className="">  Change Password  </h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0">   Reactivated the online
                                        account of the user. Verify user identity by using OTP verification. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className="">  Account activation </h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0"> Give a business back option with retrieval of suspended accounts using the number verification with Voice OTP. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="">
                                <div className="pb-3">
                                    <h4 className="">  Spam-proof  </h4>
                                    <p style={{ height: 150 + 'px' }} className="text-muted mb-0">   Ensure that spam/fake registrations are effectively stopped . No to spam and duplicate accounts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section  className="pb-0 pb-lg-6">
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-12">
                            <div className="">
                                <div className="card-body shadow text-left  pb-5">
                                <div className='row'>
                                <div className='col-md-4'>
                                    <img  alt="Fallback SMS OTP" className='img-fluid' src="/img/img-call-to-action.png" />
                                </div>
                                <div className='col-md-8'>
                                    <h2 className="h4 lh-130 mt-5 mb-3">   Fallback : What if my SMS OTP failed? </h2>
                                    <p className="">
                                        With SMS OTP platform, you can configure your message flow so that, if an SMS message cannot be delivered, an alternative voice or email channel can take over, ensuring your OTP messages are delivered as quickly and accurately as possible.
                                    </p>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ 'background': '#f9fafa' }} className="slice slice-lg pt-lg-6 pb-lg-6 pb-0 ">
                <div className="container ">

                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-10 text-center">
                            <h2 className="">
                                Why Authkey is best SMS OTP service provider  </h2>
                            <p>  Authkey is a enterprise grade OTP service provider that offer secure OTP authentication platform</p>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-lg-12">
                            <div className="buletpoint">
                                <div className="row">
                                    <div className="col-md-3">
                                        <strong>  No Delay time  </strong>
                                        <p>  Lightning fast OTP SMS Service with API integration. Minimum delivery time with high efficiency within 6-8 seconds for message delivery. </p>
                                    </div>
                                    <div className="col-md-3">
                                        <strong>  Failover Solution </strong>
                                        <p>  One API with a multiple channel processing model never lets OTP message undelivered. Automated Re-Route Failed OTP Via standy channels. </p>
                                    </div>
                                    <div className="col-md-3">
                                        <strong>   OTP templates </strong>
                                        <p> Use our ready to deliver OTP templates. Pre-built templates help you save extra effort and time. An easy-to-use flow structure.</p>
                                    </div>

                                    <div className="col-md-3">
                                        <strong>    Live Analytics  </strong>
                                        <p> Analyze live data with your own account. Check for OTP Delivery, failure, and latency reports in detail in your panel.
                                        </p>
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
                            <h2 className=""> Best Flexible pricing

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
                                    <a href="https://console.authkey.io/signup"> <button className="button-link btn-block">
                                            Talk to an expert
                                        </button> </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href='/pricing/sms'>   <button className="button-link btn-block">
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

export default OtpServiceProviderSMS;