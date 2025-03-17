import dynamic from "next/dynamic";
import BrandsItem from "../../../components/BrandsItem";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import { PiDotsThreeDuotone } from "react-icons/pi";

const FaqComponents = dynamic(
    () => import("../../../components/FaqComponents"),
    {
      loading: () => <p>Loading...</p>,
    }
  );


const data = {
  rows: [
      {
          title: "What is an OTP verification service?",
          content: `The OTP verification service adds the 2FA by sending a Code and validating it to pass the authentication process. The code is referred to as One time password(OTP) or TOTP time based one time password. The OTP is sent on a registered mobile number via SMS or voice call. You can also set up the Email based OTP service. 
          To send the time based one time password you need to adopt an excellent otp service provider like Authkey.io. 
          `,
      },
      {
          title: "What is SMS OTP?",
          content:
              `A SMS OTP is a one-time password that is sent to a mobile number via text message. An OTP sent through text message is always dynamic, unique, and valid for a specific period of time. The user has to validate the OTP to pass tha 2FA.  
              `,
      },
      {
          title: "How does OTP SMS work? ",
          content: `
              <strong>The SMS OTP works by adding an extra layer of authentication. 
              </strong>
          <ol>
              <li>The user reaches the authentication window.  The click on the verify/send OTP button triggers the SMS OTP API integrated in the backend system.</li>
              <li>The unique OTP is sent on the registered mobile number via text SMS using Authkey’s API.</li>
              <li>The end user enters the OTP and authenticates to access.</li>
          </ol>`,
      },
      {
          title: "How can I fix my failed OTPs?",
          content:
              `<p>The OTPs are valid in a specific time limit. If the OTP is failed or delayed, it will stick the end user on the same online window. The two factor authentication does not allow to bypass OTP.</p>

              <p> Authkey introduced the fallback enabled OTP API that automatically reroutes the failed or delayed OTP through the alternate channel. <a href="/blog/what-is-fallback-for-sms-otp"> Know more </a> </p>
                
              `,
      },
      {
          title: "Why do businesses use OTP services?",
          content:
              `The OTP service is the most simplified form of two factor authentication. The businesses can add the extra secure OTP service to safeguard the online transaction and data privacy. The OTP verification service protects the business data and suppresses the increased risk of data breaches, phishing attacks, and security threats.

              `,
      },
      {
          title: "Which businesses can use OTP services? ",
          content:
              `Any business that deals with sensitive customer information can make use of our OTP services. Some examples of the sectors that use OTP services are banking, healthcare, e-commerce, insurance, transport, etc.
              You can schedule a callback from our experts to understand how to implement an OTP-based authentication system for your business
              `,
      },
      {
          title: "How do I integrate OTP service into my website?",
          content:
              `To avail the OTP service, first you need to choose the best OTP service provider.
              The OTP service uses the SMS and Voice triggering on an event. This is done by API integration by developers. 
              
              `,
      },
      {
          title: "How to choose the best OTP service provider? ",
          content: `<ul>
             <strong> While Choosing a best OTP service provider you must keep the following factors in mind  </strong> 
<li>Before buying the paid package, try it for free. Use Trial plan and check the delivery efficiency.</li>
<li>Check for a dedicated user account fulfilled with needed features, like delivery, failed and latency reports .</li>
<li>Check for the simplified API, programming code compatibility and developer’s support.</li>
<li>Always choose the scalable and reliable OTP service provider. Don't pick the reseller because of the attractive cheap price. </li>

          </ul>`,
      },
      {
          title: "What is the cost for OTP service?",
          content:
              `
              Prices for OTP service vary based on quantity purchased. Talk to our experts to get extra volume based discounts. <a href="/pricing/sms"> Visit Pricing Plans </a>.
              
              `,
      },

  ],
};

export const metadata = {
    title: "OTP Service Provider | SMS & Voice OTP - Authkey.io",
    description: "Use SMS OTP API Service. Send OTPs to your customers using API integration. Authkey.io provides reliable OTP SMS services with high deliverability and low latency.",
    alternates: {
        canonical: "https://authkey.io/otp-service-provider",
    },
};

const OTPServiceProvider = () => {
    return (
        <div>
            <section className="hero homebg">
                <div className="container my-5">
                    <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                            <img className='img-fluid mt-5' src="/img/otp.png"  alt="OTP Service Provider" />
                        </div>
                        <div className="col-md-6 mt-5">
                            <h1>OTP Service Provider</h1>
                            <p>Use sms otp service into  your application to verify and authenticate the users via mobile number identity.</p>
                            <a href="https://console.authkey.io/signup">   <button className="btn mt-2">
                                Sign up
                            </button> </a>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="bg-sectionthird">
                <div className="container-fluid pt-5 pb-5">
                <div className="row justify-content-center">
                    <div className="col-md-11">
                    <h4 className="text-center">Trusted By Brands</h4>
                    <BrandsItem />
                    </div>
                </div>
                </div>
            </section>


            <section>
                <div className="container my-5">
                    <div className="row justify-content-center">
                       
                        <div className="col-md-8">
                            <div>
                                <h2 className="mt-3">What is OTP service?</h2>
                                <p>
                                    Otp service is  sending secure code using <a href="https://authkey.io/ ">API to verify and authenticate the logins, signups</a>, forget password, new registration, and more. SMS OTP is sent on a registered mobile number. OTP provider adds an additional layer of verification and data security. It averts the phishing attacks, web-breaches and hacking activity.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img className='img-fluid' src="/img/enter-otp.png" alt="What is OTP service?" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h2 className=""> OTP Service Provider </h2>
                            <div className="mt-2">
                                <p>
                                    Authkey is a leading OTP provider. You can choose the most suitable
                                    channel to trigger one time password. An OTP API is used in the backend
                                    to send code to the end user.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 my-3">
                            <div className="channelbox channelsms py-4 px-4">
                                <img src='/img/home/sms-icon.webp' alt='WhatsApp' className="iconic"  width="40" height="35"  /> <PiDotsThreeDuotone size={35} />
                                <h5 className="mt-3"> SMS OTP Service </h5>
                                <p>Send OTP SMS using the  robust API integration. Authkey offers the best OTP SMS service with high delivery rate and lower latency.</p>
                            </div>
                        </div>

                        <div className="col-md-4 my-3">
                            <div className="channelbox channelvoice py-4 px-4">
                                <img src='/img/home/voice-icon.webp' alt='WhatsApp' className="iconic"  width="40" height="35"  />  <PiDotsThreeDuotone size={35} />
                                <h5 className="mt-3">Voice OTP service </h5>
                                <p> Verify registered mobile numbers in real-time by delivering OTP through automated phone calls using our Voice API integration. TTS speaks the OTP digits for a seamless verification experience.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div className="channelbox channelemail py-4 px-4">
                                <img src='/img/home/email-icon.webp' alt='WhatsApp' className="iconic" width="40" height="29" /> <PiDotsThreeDuotone size={35} />
                                <h5 className="mt-3">Email OTP service</h5>
                                <p>Use Authkey's API to send verification links or one-time passwords. Our API enables you to validate accounts and automate the process of sending OTPs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fixbgColor">
                <div className="container py-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10">
                            <h2 className=""> Business applications for OTP service </h2>
                            <p className="mt-2 mb-4">
                                Choose the best otp service provider for seamless OTP sending for business consistency.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4 mb-4">
                            <div className="smscornerbox">
                                <img src="/img/smsapi/two-factor-authentication.webp" alt="Two Factor Authentication" class="iconic mb-2" /> 
                                <h5>Secure 2FA</h5>
                                <p className="mb-0">Enhance your system's security without imposing complexity. Add 2FA OTP layer after static username and password.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="smscornerbox">
                                <img src="/img/smsapi/sms-otp.webp" alt="Send SMS OTP" class="iconic mb-2" />
                                <h5> Login with OTP </h5>
                                <p className="mb-0">Bypass the static password using the dynamic OTP SMS. Verify the user with a number and unique one time password.</p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="smscornerbox">
                            <img src="/img/icons/transaction-authentication.png" alt="Transaction Authentication" class="iconic mb-2" />
                                <h5>Transaction Authentication</h5>
                                <p className="mb-0"> Safeguard all the financial transactions. Add secure OTP authentication to ensure safe transactions</p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="smscornerbox">
                            <img src="/img/icons/password-reset.png" alt="Transaction Authentication" class="iconic mb-2" />
                                <h5> Password Resets </h5>
                                <p className="mb-0"> Forgetting passwords is common in online accounts. Use OTP SMS to verify the user identity before setting a new  password. </p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="smscornerbox">
                                <h5>Account activation </h5>
                                <p className="mb-0"> User accounts can be reactivated with confirmation from the user. Verify user identity by using an OTP validation. </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="smscornerbox">
                                <h5>Spam-proof</h5>
                                <p className=" mb-0"> Make sure fake registrations and spam signups are controlled effectively. Enhance Spam-proof system with OTP SMS service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section>
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="py-6 pynone px-4 sticky-top">
              <h3>Advantages of OTP service </h3>
              <p>Authkey is a enterprise grade OTP service provider that offer secure OTP authentication platform</p>
                <a href="https://console.authkey.io/signup" className="btn btn-primary mt-2"> Talk to Expert</a>
              </div>
            </div>

            <div className="col-lg-6">

              <div className="linebox">
                <div className="circle-fill-main circle-fill-yellow">
                  <div className="circle-fill">
                  </div>
                </div>
              </div>

              <div className="crdbox px-4 mt-5 pb-4">
                <h4><img src="/img/smsapi/two-factor-authentication.webp" alt='Two Factor Authentication' className="iconic" /> No Delay time</h4>
                 <p> Lightning fast OTP SMS Service with API integration. Minimum delivery time with high efficiency within 6-8 seconds for message delivery.</p>
                           
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img src="/img/smsapi/sms-otp.webp" alt='Send SMS OTP' className="iconic" />  Failover Solution </h4>
                <p> One API with a multiple channel processing model never lets OTP message undelivered. Automated Re-Route Failed OTP Via standy channels.</p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img src="/img/email/email-campaign.png" alt='Alerts & Notifications' className="iconic" /> OTP templates </h4>
                <p> Use our ready to deliver OTP templates. Pre-built templates help you save extra effort and time. An easy-to-use flow structure. </p>
              </div>

              <div className="crdbox px-4 py-4 mb-5">
                <h4><img src="/img/smsapi/alert-&-notification.webp" alt='Alerts & Notifications' className="iconic" /> Live Analytics </h4>
                <p> Analyze live data with your own account. Check for OTP Delivery, failure, and latency reports in detail in your panel.</p>
              </div>


            </div>
          </div>
        </div>
      </section>


            <section>
                <div className="container violetPlan borderRadius p-mobs p-5 mb-5">

                    <div className="row mb-2 justify-content-center">
                        <div className="col-md-10 text-center">
                            <h2 className=""> Discover the cost effective pricing

                            </h2>

                            <p className="mt-2">
                                Contact us for full integration support. Our Support Team cannot wait to get you started. Get additional discounts with committed usage. Contact Sales to learn more.

                            </p>

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="buletpoint">
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                    <a href="https://console.authkey.io/signup" target="_blank" rel="noopener noreferrer"> <button className="button-link btn-block">
                                            Talk to an expert
                                        </button> </a>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <a href='/pricing/sms' rel="noopener noreferrer">   <button className="button-link btn-block">
                                            See Pricing
                                        </button> </a>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <a href='/startup-india' rel="noopener noreferrer">   <button className="button-link btn-block">
                                            Startup Plan
                                        </button> </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FaqComponents data={data} />

            <WhyChooseAuthkey />
        </div>
    );
}

export default OTPServiceProvider;