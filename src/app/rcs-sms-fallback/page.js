import StartupSignup from "../../../components/StartupSignup";
import BrandsItem from "../../../components/BrandsItem";
import {
  CheckCircle,
  WindowSidebar,
  BracesAsterisk,
  Whatsapp,
  Facebook,
  ArrowRight,
} from "react-bootstrap-icons";

import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GrTransaction } from "react-icons/gr";
import { FcCustomerSupport } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";
import { BiMessageCheck } from "react-icons/bi";
import { RiUserStarLine } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { RxLapTimer } from "react-icons/rx";
import { FcWorkflow } from "react-icons/fc";

export const metadata = {
  title: "RCS Messaging with SMS Fallback | 100% Message Delivery Guaranteed",
  description:
    "Ensure 100% message delivery with RCS + automated SMS fallback. Send RCS with images, buttons & carousels. If RCS fails, SMS automatically takes over. Try Now @ authkey!",
  alternates: {
    canonical: "https://authkey.io/rcs-sms-fallback",
  },
};
const StartupIndia = () => {
  return (
    <div>
      <div className="hero homebg" id="applynow">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12  mt-4 text-center mb-3">
              <h1 className="mb-0"> Next-Gen RCS Messaging with SMS Fallback <br/>– Deliver Every Message, Every Time!</h1>
              <p>Amazing Features of RCS Messaging with Authkey</p>
            </div>
             
            <div className="col-lg-7">
            
             
              <div>
                <ul className="freeplan freesize">
                  <li>
                    <span>
                      <CheckCircle />
                    </span>
                    <b>Rich Media Messaging</b> – Send images, videos, GIFs, and carousels for an engaging experience.
                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span><b>Interactive Buttons & Quick Replies</b> – Enable easy customer actions like bookings, purchases, and replies.

                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span><b>Read Receipts & Typing Indicators</b> – Know when messages are read and see real-time responses.

                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span><b>Verified Sender ID</b> – Establish trust with branded messaging and prevent fraud.

                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span><b>AI-Powered Chatbots</b> – Automate responses and enhance customer support.

                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span><b>Real-Time Delivery Tracking</b> – Monitor message status and engagement instantly.
                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span><b>Seamless SMS Fallback</b> – Ensure 100% message delivery even if RCS is unavailable.
                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span><b>End-to-End Encryption</b> – Secure conversations and protect customer data.
                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span><b>Enhanced Customer Engagement</b> – Higher open rates and interaction than traditional SMS.
                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span><b>Seamless CRM & API Integration</b> – Connect with existing tools for automated campaigns
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mb-5">
              <StartupSignup />
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

      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
                <div className="text-center ">
                  <h2 className="gradient_headline">
                  Never Lose a Message with RCS + Automated SMS Fallback
                  </h2>
                  <p>
                  Rich Communication Services (RCS) Sends a message with <b>rich media, interactive buttons, and real-time engagement</b>. However, not all users have <b>RCS-enabled devices</b> or active internet connections. So, what happens if an RCS message can't be delivered?
                  </p>
                  <p>That’s where <b>Automated SMS Fallback</b> comes in! If a recipient’s device does not support RCS or lacks an internet connection, the system <b>automatically switches to SMS</b>, ensuring your message is always delivered.
                  </p>
                </div>
                <h3 class="mt-5">Why is SMS Fallback Essential?</h3>
                <ul className="freeplan freesize">
                  <li>
                    <span>
                      <CheckCircle />
                    </span>
                    <b>100% Message Delivery</b> – RCS first, SMS as backup, so your message never fails.
                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span>
                    <b>Wider Reach</b> – Deliver messages to all devices, whether RCS-enabled or not.
                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span>
                    <b>Seamless Transition</b> – No manual intervention is required; fallback happens automatically.
                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span>
                    <b>Consistent Communication</b> – Customers receive your message in the best possible format for their device.
                  </li>
                  <li>
                    <span>
                      <CheckCircle />
                    </span>
                    <b>Maximized Engagement</b> – Reach every customer, every time, increasing response rates and conversions
                  </li>
                  </ul>
            
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 pb-4">
              <h3 className="mt-0 mb-3">
              How RCS Messaging with SMS Fallback Works?
              </h3>
              <ul className="freeplan greentick mb-4">
                <li>
                  <span>
                  <CheckCircle />
                  </span>
                  Step 1: User sends an RCS message—Authkey’s system instantly triggers the message.
                </li>
                <li>
                  <span>
                  <CheckCircle />
                  </span>
                  Step 2: The system checks if the recipient’s device supports RCS messaging.
                </li>
                <li>
                  <span>
                  <CheckCircle />
                  </span>
                  Step 3: If RCS is available, the rich message is delivered with images, buttons & more.
                </li>
                <li>
                  <span>
                  <CheckCircle />
                  </span>
                  Step 4: If RCS is unavailable, an automated SMS fallback is triggered, ensuring delivery.
                </li>
                <li>
                  <span>
                  <CheckCircle />
                  </span>
                  Step 5: The user receives the best possible experience, and businesses track real-time delivery & engagement.
                </li>
              </ul>
              <p>Experience the best Rich Media messaging. <a className="text-violet" href="#applynow">
              Click Here <ArrowRight></ArrowRight>
              </a></p>
              
            </div>
            <div className="col-lg-6 pmtt text-center">
              <img
                className="img-fluid imgfull imgmbnone"
                src="img/rcs-message.png"
                alt="Signup form | Authkey.io"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <h2 className="text-center mb-5">
              Use Cases for RCS Messaging
              </h2>

              <div className="row yelloerbox text-center">
                <div className="col-md-6">
                  <div className="gray_box">
                  <div class="rcsicon rcsiconGreen mt-2 mb-3">
                    <HiOutlineSpeakerphone size = {27} />
                  </div>
                    <h5>Marketing & Promotions</h5>
                    <p>Run engaging promotional campaigns with rich media, discounts, and call-to-action buttons.</p>


                  </div>
                </div>
                <div className="col-md-6">
                    <div className="gray_box">
                      <div class="rcsicon rcsiconBlue mt-2 mb-3">
                      <GrTransaction size = {27} />
                      </div>
                      <h5>Transactional Updates</h5>
                      <p>Send real-time order updates, payment confirmations, and OTPs with delivery assurance.</p>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="gray_box">
                     <div class="rcsicon rcsiconOrange mt-2 mb-3">
                     <FcCustomerSupport size = {27} />

                     </div>
                    <h5>Customer Support</h5>
                    <p>
                    Provide instant, automated support with chatbots and interactive messaging.

                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="gray_box">
                  <div class="rcsicon rcsiconViolet mt-2 mb-3">
                  <RiUserStarLine  size = {27} />
                  </div>
                    <h5>Feedback & Surveys </h5>
                    <p>
                    Gather customer insights with interactive feedback forms directly in messages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <h2 className="text-center mb-5">
              Why Authkey?
              </h2>

              <div className="row yelloerbox text-center">
                <div className="col-md-4">
                  <div className="gray_box">
                  <div className="rcsicon rcsiconOrange mt-2 mb-3">
                  <BiMessageCheck size = {27} />
                  </div>
                    <h5>100% Delivery Guarantee </h5>
                    <p>RCS or SMS, your message will always reach the customer.</p>
                  </div>
                </div>
                <div className="col-md-4">
                    <div className="gray_box">
                      <div className="rcsicon rcsiconYellow mt-2 mb-3">
                      <VscFeedback size = {27} />
                      </div>
                      <h5>All-in-One Messaging Powerhouse </h5>
                      <p>RCS, WhatsApp, SMS, Voice & Email!</p>
                    </div>
                </div>
                <div className="col-md-4">
                  <div className="gray_box">
                    <div class="rcsicon rcsiconBlue mt-2 mb-3">
                    <FcWorkflow size = {27} />
                    </div>
                    <h5>AI-Powered Automation</h5>
                    <p>
                    Save time with automated responses and intelligent workflows.

                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="gray_box">
                  <div class="rcsicon rcsiconGreen mt-2 mb-3">
                  <RiSecurePaymentLine size={27} />
                  </div>
                    <h5>Secure & Verified Messaging </h5>
                    <p>
                    Protect your brand with verified sender IDs & end-to-end encryption.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="gray_box">
                  <div class="rcsicon rcsiconBlue mt-2 mb-3">
                  <RxLapTimer size={27} />
                  </div>
                    <h5>Real-Time Analytics</h5>
                    <p>
                    Track delivery rates, open rates, and customer interactions in real time.

                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="gray_box">
                  <div class="rcsicon rcsiconViolet mt-2 mb-3">
                  <VscServerProcess size={27} />
                  </div>
                    <h5>Easy API Integration</h5>
                    <p>
                    Connect seamlessly with your existing CRM and marketing tools.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <WhyChooseAuthkey />
      </section>

    </div>
  );
};

export default StartupIndia;
