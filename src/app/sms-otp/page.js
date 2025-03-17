import VoiceSampleCode from "../../../components/VoiceSampleCode";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiFallingStar } from "react-icons/gi";
import { FaCommentSms } from "react-icons/fa6";
import { TbTransactionDollar } from "react-icons/tb";
import { MdOutlinePassword } from "react-icons/md";
import BrandsItem from "../../../components/BrandsItem";
import { TbApi } from "react-icons/tb";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { GrShieldSecurity } from "react-icons/gr";
import { BiReset } from "react-icons/bi";
import { MdOutlineLockReset } from "react-icons/md";
import { MdSms } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";
export const metadata = {
  title: "SMS OTP Service - Authkey.io",
  description: "Use SMS OTP authentication to secure your application login. Authkey offers one time password API enabled with a fallback feature. Signup to get free SMS OTP API.",
  alternates: {
    canonical: "https://authkey.io/sms-otp",
  },
};


const SmsOtp = () => {

  return (
    <div>
     <div
        className="hero"
      >
        <div className="container mt-3">
              <div className="row d-flex align-items-center">
                <div className="col-md-6 text-center order-last ">
                  <img
                    className="img-fluid"
                    alt="SMS OTP"
                    src="/img/smsapi/sms-otp-service.png"
                  />

                </div>
              <div className="col-md-6">
              <h1>SMS OTP  Service</h1>
              <p>
                Integrate One Time Password API to secure online presence. Add a
                OTP SMS layer to protect login, data and overall security.
              </p>
              <a href="https://console.authkey.io/signup">
                <button className="btn mt-2">Sign up</button>
              </a>
            </div>
           
          </div>
        </div>
      </div>

      <section className="bg-sectionthird">
        <div className="container-fluid pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="brandtxt text-center">Trusted By Brands</div>
              <BrandsItem />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-lg-6">
        <div className="container">
          <div className="row pb-lg-6 justify-content-center">
            <div className="col-lg-12 text-center">
              <h2>
                Enable SMS OTP to secure your accounts and business
              </h2>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-5">
              <div className="sms-api">
                <h2> Use One time password API </h2>
                <p>
                  Send SMS OTP using Multi-channel SMS API designed for high
                  volume and timely delivery of OTPs.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="buletpoint">
                <div className="row">
                  <div className="col-md-6">
                    <strong> Send OTP </strong>
                  </div>

                  <div className="col-md-6">
                    <strong> Passwordless Login </strong>
                  </div>
                  <div className="col-md-6">
                    <strong> Two-factor authentication </strong>
                  </div>

                  <div className="col-md-6">
                    <strong> Phone number verification </strong>
                  </div>

                  <div className="col-md-6">
                    <strong> Payment confirmation </strong>
                  </div>
                  <div className="col-md-6">
                    <strong> Virtual Number Selection </strong>
                  </div>
                  <div className="col-md-6">
                    <strong>Account recovery </strong>
                  </div>

                  <div className="col-md-6">
                    <strong> Voice Broadcast </strong>
                  </div>
                  <div className="col-md-6">
                    <strong>Password Reset</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
    

        <div className="container">
          <div className="row pt-lg-6 justify-content-center">
            <div className="col-lg-12 text-center">
              <h2 className="">Integrate SMS OTP API for multi Services</h2>
            </div>
          </div>
          <div className="row mt-3 mb-5">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body smscornerbox pb-3">
                  <div className="mt-1 mb-3 rcsicon rcsiconBlue mrl0">
                    <MdOutlinePassword size={27} />
                  </div>
                  <h5 className="mb-2"> One Time Password</h5>
                  <p className="mt-1">
                    In order to generate an OTP, our platform handles all the
                    back-end logic each time. A variable Unique OTP code is
                    associated with a particular user.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body smscornerbox pb-3">
                  <div className="mt-1 mb-3 rcsicon rcsiconGreen mrl0">
                  <GrShieldSecurity size={27} />
                  </div>
                  <h5 className="mb-2">
                    Two Factor Authentication 2FA{" "}
                  </h5>
                  <p className="mt-2">
                    A two-factor authentication method adds another layer of
                    security to user accounts. It provides an extra security
                    precaution after the username and password.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body smscornerbox pb-3">
                  <div className="mt-1 mb-3 rcsicon rcsiconOrange mrl0">
                  <TbTransactionDollar size={27} />
                  </div>
                  <h5 className="mb-2">Transaction Verification</h5>
                  <p className="mt-2">
                    Business transactions are part of day-to-day operations.
                    Ensure that your customers are protected from financial
                    fraud by validating all transactions using OTP.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body smscornerbox pb-3">
                  <div className="mt-1 mb-3 rcsicon rcsiconViolet mrl0">
                  <RiLockPasswordLine size={27} />
                  </div>
                  <h5 className="mb-2">Password-less Login</h5>
                  <p className="mt-2">
                    Logging into a user account requires a username and
                    password. Logging in with a user name and OTP makes the
                    process safe, secure, and swift.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <h2 className="">Start sending OTPs in seconds</h2>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 mb-4 text-center">
              <div className="channelbox whitebox channelbox1 py-3 px-3">
                  <div className="rcsicon rcsiconBlue mt-4">
                  <MdOutlineLockReset size={27} />
                  </div>
                  <h5 className="mt-3">Password Reset</h5>
                  <p>
                    Permit your customers' access to portals they have been
                    unable to access due to lost or forgotten passwords or
                    changed emails or phone numbers in a safe and secure manner.
                  </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
                <div className="channelbox whitebox channelbox1 py-3 px-3">
                  <div className="rcsicon rcsiconOrange mt-4">
                  <BiReset size={27} />
                  </div>
                  <h5 className="mt-3">Account reactivation</h5>
                  <p>
                    Restarting a customer's service if they deactivate or have a
                    gap in service should be smooth. Through an OTP verification
                    step, you can get the right customers back to doing business
                    with you.
                  </p>
                </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="channelbox whitebox channelbox1 py-3 px-3">
                  <div className="rcsicon rcsiconGreen mt-4">
                  <TbPasswordMobilePhone size={27} />
                  </div>
                  <h5 className="mt-3">Short Authorization</h5>
                  <p>
                    Allow your prospects to enter their mobile number into your
                    website for direct login. OTP SMS plays secure access to
                    websites, such as net banking or communities.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="transition-shadow whatsappSpace pt-5 pb-5">
              <p className="lead m-0">DEVELOPER GUIDE </p>
              <h2>
                Get Started With OTP SMS API
              </h2>
                <p className="mt-2">
                  Access Authkey building blocks and start using OTP to add
                  value to your communication.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="text-center mt-5 mb-3">
              <h2 className="text-center"> Sample Code </h2>
   
            </div>
          </div>
            <div className="row">
              <div className="col-lg-12">
                <VoiceSampleCode />
              </div>
            </div>
        
        </div>
      </section>

      <section className="yellowback">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h2>
                Facilitate SMS OTP with Voice & Email Channel
              </h2>
            </div>
          </div>
          <div className="row mt-3">
                <div className="mb-2 col-md-4">
                  <div className="card-body smscornerbox smscornerheight pb-3">
                      <div className="mt-1 mb-3 rcsicon rcsiconViolet mrl0">
                      <TbApi size={27} />
                      </div>
                      <h5>Robust API</h5>
                      <p>
                        Authkey OTP platform providing you a single robust API
                        that works on a multichannel delivery model.
                      </p>
                    </div>
                  </div>
                <div className="mb-2 col-md-4">
                  <div className="card-body smscornerbox smscornerheight pb-3">
                    <div className="mt-1 mb-3 rcsicon rcsiconYellow mrl0">
                          <FaCommentSms size={27} />
                        </div>
                        <h5>SMS OTP Along with Voice & Email</h5>
                        <p>
                          Make minor parameter change in SMS OTP API for parallel
                          sending using all channel i.e. SMS, Voice & Email.
                        </p>
                    </div>
                </div>
                <div className="mb-2 col-md-4">
                  <div className="card-body smscornerbox smscornerheight pb-3">
                    <div className="mt-1 mb-3 rcsicon rcsiconBlue mrl0">
                      <GiFallingStar size={24} />
                      </div>
                      <h5>Fallback </h5>
                      <p>
                        Channel Can Fail, Communication Shouldn't. You can
                        enable fallback feature in case of SMS OTP. If OTP
                        doesn't get deliver, an automated voice/email will be
                        triggered with the same API.
                      </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-lg-12">
              <h2>
                Discover The Benefits Of Our Powerful OTP Platform
              </h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
                <div className="mb-3">
                    <h5><span className="orangetxt"><FaRegCircleDot /></span> Scalable Solutions</h5>
                    <p>
                      Easily send your SMS OTP without a limit per second.
                      Authkey.io is not bound with a sending limit. Your inbound
                      and outbound capacity is handled without a stop.
                    </p>
                  </div>
                  <div className="mb-3">
                    <h5><span className="orangetxt"><FaRegCircleDot /></span> Live Analytics</h5>
                    <p>
                      Get insights into detailed analytics about each OTP for
                      its delivery, failed & latency report. Every detail of
                      every OTP.
                    </p>
                  </div>
                  <div className="mb-3">
                        <h5><span className="orangetxt"><FaRegCircleDot /></span> Premium Quality </h5>
                        <p>
                          Deliver an exceptional quality experience to your
                          customers. Our highly secure platform has high uptime and
                          redundant setup with 24x7 support.{" "}
                        </p>
                  </div>
            </div>

            <div className="col-md-6">
              <img
                className="img-fluid"
                alt="SMS OTP"
                src="https://socialnetworking.solutions/wp-content/themes/handel-child/images/otp/step2.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container justify-content-center">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-12 text-center">
              <h2> Boundless coverage around the globe</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container ">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-12">
              <div className="">
                <div className="row">
                  <div className="col-md-4">
                    <div className="channelbox smscornerheight ">
                      <div className="mt-1 mb-3 rcsicon rcsiconYellow mrl0">
                        <MdSms size={27} />
                      </div>
                      <p>
                        The SMS API allows developers to easily create and manage
                        outbound OTP around the globe.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="channelbox smscornerheight ">
                    <div className="mt-1 mb-3 rcsicon rcsiconBlue mrl0">
                      <TbApi size={27} />
                    </div>
                    <p>
                      You can easily set up an API into software that provides a
                      great deal of flexibility and control.
                    </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="channelbox smscornerheight ">
                    <div className="mt-1 mb-3 rcsicon rcsiconViolet mrl0">
                        <FaCode size={27} />
                    </div>
                    <p>
                      Choose API code language that your application is composed
                      of can be any of PHP, Python, Java, Javascript,
                      Powershell, C#, NodeJS, Ruby, Swift, GO, etc.{" "}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container buletpoint pt-5 pb-5">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="">Count on OTP delivery worldwide </h2>
              <div className="border_bar"></div>
              <div className="mt-2"></div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-3">
              <div className="">
                <div className="pb-3">
                  <strong>Scale with you</strong>
                  <p className="mb-0">
                    Regardless of one or million SMS you send, our
                    infrastructure will ensure you that they deliver on time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="">
                <div className="pb-3">
                  <strong>Pay on Delivery</strong>
                  <p className="mb-0">
                    Utilization based pricing enables you to get discounted
                    pricing from the beginning while only paying for what you
                    use.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="">
                <div className="pb-3">
                  <strong>Enterprise-grade</strong>
                  <p className="mb-0">
                    We connect your messaging flow directly over 220+ carriers
                    in 200+ countries for international delivery that is best in
                    class.
                  </p>
                </div>
              </div>
            </div>
           <div className="col-md-6 col-lg-3">
              <div className="">
                <div className="pb-3">
                  <strong>Compliance & developers</strong>
                  <p className="mb-0">
                    We align you with the support and developer team. We ensure
                    that your Authkey.io experience is smooth and successful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SmsOtp;