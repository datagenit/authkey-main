import SignupComponent from "../../../components/SignupComponent";
import {
  CheckCircle
} from "react-bootstrap-icons";
import { IoTimerOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa6";
import { PiStrategyDuotone } from "react-icons/pi";
import { MdPriceCheck } from "react-icons/md";
import { GoFileCode } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import BrandsItem from "../../../components/BrandsItem";
export const metadata = {
  title: "Cash on delivery order confirmation call | COD order confirmation - Authkey.io",
  description: "Use Cash on delivery order confirmation API. High Volume APIs Built for Sending huge volume of OTPs & verification calls with Parallel channels and Fallback option.",
  alternates: {
    canonical: "https://authkey.io/cash-on-delivery-order-verification",
  },
};
const CashOnDeliveryOrder = () => {
  return (
    <div>

      <section className="hero homebg">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h1>
                <img src="/img/home/sms-icon.webp" alt='SMS' className="iconic" /> COD Order Confirmation
              </h1>
              <p>
                Simplified COD SMS verification, most cost effective COD
                Confirmation solution on the market{" "}
              </p>
              <a href="https://console.authkey.io/signup">
                <button className="btn mt-4">Sign up</button>
              </a>
            </div>
            <div className="col-md-6">
              <img src="/img/Group-54.png" className="img-fluid" alt="Flash Call Verification" />
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
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="text-center">
                <div className="pb-3">
                  <h2>
                    What is COD Order Confirmation and its necessity?
                  </h2>
                  <p className="mb-0">
                    COD order confirmation or COD verification facilitates the
                    validation of the online order placed with the payment
                    status of Cash on Delivery. You must verify your customers'
                    orders before sending the delivery resources out.
                  </p>

                  <p className="mt-3">
                    {" "}
                    E-commerce is greatly facilitated by cash on delivery (COD).
                    It accounts for more than half of all e-commerce
                    transactions. But cancellations and bogus orders cause
                    significant operational losses as well. Due to this,
                    e-commerce players should place a high priority on reducing
                    COD failures. Before you dispatch & ship COD orders, Authkey
                    allows you to order confirmation calls/SMS that they are
                    legitimate.
                  </p>
                </div>
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
                <h2>Protect Your Customers - & Your Business</h2>
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
                <h4><MdPriceCheck size={40} /> Reduce Cost </h4>
                <p>
                  Reduce Cost on attempted Deliveries to verify whether the
                  person has legitimately placed an order or not.
                </p>
              </div>


              <div className="crdbox px-4 mt-5 pb-4">
                <h4><GrLanguage /> Webhook API </h4>
                <p>
                  With the help of Webhook API, Let your CRM know whether the order is verified or not.
                </p>
              </div>

              <div className="crdbox px-4 mt-5 pb-4 mb-5">
                <h4><GoFileCode size={30} /> Easy Integration </h4>
                <p>
                  Easy Integration with our tested and ready to use APIs and
                  SDKs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="fixbgColor">
        <div className="container py-5">
          <div className="row">
            <div className="container justify-content-center">
              <div className="row justify-content-center">
                <div className="col-md-12 text-center mb-2">
                  <h2>Benefits of Using Order Confirmation </h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div className="smscornerbox">
                <div className="pb-3">
                  <BsCashCoin size={35} />
                  <h4 className="mt-2">An auto-confirmation of your order</h4>
                  <p className="mb-0">
                    Auto order confirmation via COD API. Use the desired
                    channel. SMS, voice call & Email verification for Cash on
                    Delivery (COD) orders.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div className="smscornerbox ">
                <div className="pb-3">
                  <IoTimerOutline size={35} />
                  <h4 className="mt-2">Cost reduction & lower return ratio</h4>

                  <p className="mb-0">
                    {" "}
                    Save time and money by reducing product returns and avoiding
                    unnecessary shipments because of fake/dummy orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-12 text-center">
              <h2> Start COD SMS Verification Solutions </h2>
              <p>
                Use sms verification api for Cash on Delivery Order Confirmation.
                The robust multichannel high volume API build to trigger OTPs &
                verifications.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mt-5">
              <h3>
                Authkey.io’s COD SMS Verification Solution integrates Seamlessly
                Into your app Through REST HTTP SMS API. We Make It Easy:
              </h3>
              <div>
                <ul className="freeplan">
                  <li>
                    <span>
                      <CheckCircle />
                    </span> Sign up for a free account </li>
                  <li> <span>
                    <CheckCircle />
                  </span> Create your application access credentials </li>
                  <li><span>
                    <CheckCircle />
                  </span> Add your API access key </li>
                  <li><span>
                    <CheckCircle />
                  </span> Send verification request to phone number to verify </li>
                  <li><span>
                    <CheckCircle />
                  </span>
                    Send a report verification request with the code you
                    received
                  </li>
                  <li><span>
                    <CheckCircle />
                  </span> Voila - verification complete!</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <code>
                <button className="copy-clip">Copy</button>
                <pre style={{ color: "#fff" }}>
                  {`
    $sender =XXXX;
    $mob =XXXXX;
    $auth=Your auth key;
    $msg = urlencode("test"); 
    $url = 'https://global.datagenit.com/API/sms-api.php?auth=
    '.$auth.'&msisdn='.$mob.'&senderid='.$sender.'&message='.$msg.'';  // API URL
    SendSMS($url);  // call function that return response with code
    function SendSMS($hostUrl){
    $ch = curl_init();
    function SendSMS($hostUrl){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $hostUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_POST, 0);
    $result = curl_exec($ch);
    return $result;
    } `}
                </pre>
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="yellowback my-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2 className="mt-2">
                How SMS Verification
                Verification
                Can Boost Your Business
              </h2>
              <p className="mt-2">
                Verify solves complex development challenges so you can focus on
                the code that counts. Verify checks the user’s input matches the
                code. If they match, Verify registers the phone number as
                approved.
              </p>
            </div>

            <div className="row">
              <div className="col-md-6 my-3">
                <div className="smscornerbox smscornerheight mx-3">
                  <div className="py-3">
                    <FaUserShield size={40} />
                  </div>
                  <h5>
                    Build trust and fight fraud
                  </h5>
                  <p>
                    SMS verification helps your business to limit spam
                    accounts, fight fraud, build a better customer
                    experience, and reduce churn.
                  </p>
                </div>
              </div>
              <div className="col-md-6 my-3">
                <div className="smscornerbox smscornerheight mx-3">
                  <div className="py-3">
                    <PiStrategyDuotone size={40} />
                  </div>
                  <h5>
                    Optimize conversion rates
                  </h5>
                  <p>
                    One of our clients boosted conversions by 11% using our
                    SMS verification solution for single-factor
                    authentication (SFA).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 mb-2">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>
                Confirm Order in Quick Way Try It For Free
              </h2>
            </div>
          </div>

          <div className="row d-flex align-items-center mt-2">
            <div className="col-lg-7">
              <h2 className="mt-4">Sign up & Get Started Today! </h2>
              <div className="mt-2">
                <ul className="freeplan">
                  <li>
                    <span>
                      <CheckCircle />
                    </span>  Quick sign up, get started in 5 minutes </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span> Use free test credit </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span> Easy to implement APIs & SDKs </li>
                </ul>
              </div>

              <a href="https://console.authkey.io/signup">
                <button className=" button-link mt-2 mb-5">Sign up</button>
              </a>
            </div>
            <div className="col-lg-5">
              <SignupComponent />
            </div>
          </div>
        </div>
      </section>

      <section>
        <WhyChooseAuthkey />
      </section>
    </div>
  );
}

export default CashOnDeliveryOrder;