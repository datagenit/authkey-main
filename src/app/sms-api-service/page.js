
import dynamic from "next/dynamic";
import BrandsItem from "../../../components/BrandsItem";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import SmsSampleCode from "../../../components/SmsSampleCode";

const FaqComponents = dynamic(
  () => import("../../../components/FaqComponents"),
  {
    loading: () => <p>Loading...</p>,
  }
);


const data = {
  rows: [
    {
      title: "What is an SMS API or messaging API or SMS gateway API?",
      content: `<p>An SMS API is a programmable code that enables your website, application, mobile app, CRM etc to easily send and receive text messages. It establishes the sending and receiving link between the SMS gateway and integrated application, whereas SMS gateway has a direct connectivity flow with the operator's end.  SMS messaging APIs allow you to automate the process of sending SMS messages from your own platform. </p>
            <p> You can compose with our API in PHP, C#, Javascript, Java, Python or  just in any other language. By integrating API, a business can send alerts and notifications to customers even after business hours. </p>
            `,
    },
    {
      title: "How does an SMS API work?",
      content: `<p>An SMS messaging API entrench the text messaging capabilities of an integrated source i.e website, app, software etc. by forming a bond with an SMS gateway. An HTTP SMS API triggers its functionality on occurrence of an internal code action hit. Through SMS APIs, telecommunications carriers can connect to the app resource without the need to rely on an interceder platform or software. Sending SMS messages manually becomes old fashioned after integrating an SMS API. SMS messages can be sent automatically using API protocols, saving you time and money.</p>`,
    },
    {
      title: "What is SMS API integration?",
      content: `An SMS API integration is connecting the <a href="https://authkey.io/sms-api-docs">SMS gateway interface code </a> into the application infrastructure code to flow the automated sending and receiving of messages on occurrence of an event. The SMS API integration is done using a HTTP rest API or the SMPP connectivity. The <a href="https://authkey.io/sample-code-for-sending-sms-in-php">API code should match the functional programming language </a> like PHP, .net, Java, Python, ruby, Javascript, etc. Managing the SMS API integration requires the expertise of a software developer or programmer.
            `,
    },
    {
      title: " What are the benefits of SMS API integration?",
      content: (
        <>
          <p>
            Your current application or software can be enhanced with text
            messaging capabilities using an SMS API. Few more highlights to
            cover the benefits are:{" "}
          </p>
          <strong>Direct request connection to operator. </strong>
          <ul>
            <li> Direct request connection to operator.</li>
            <li>Complete SMS Chanel Automation setup.</li>
            <li> SMS API is secure.</li>
            <li>
              Software or applications can send SMS irrespective of human
              resource.{" "}
            </li>
            <li> Real time reporting as Delivery, failure and latency.</li>
          </ul>
        </>
      ),
    },

    {
      title: "How can I start sending messages using SMS API?",
      content: (
        <>
          <p>
            Authkey will help you organize and manage your SMS API setup if you
            want to send messages worldwide. SMS gateways can be used in a
            variety of ways, including transactional alerts and OTP messages
            across the globe. We offer you a multichannel messaging API that
            supports SMS, Voice and Email on a single platform and fully
            assisted with detailed{" "}
            <a href="https://authkey.io/sms-api-docs">
              documentation and developer friendly code instructions.
            </a>{" "}
            Choose precisely which channels you want to use as well you can use
            all channels on a single API integration.{" "}
          </p>
          <p>
            {" "}
            Just <a href="https://authkey.io/sms-api-docs">Sign up</a> to us!
            Rest our team will handle, to fulfill the best messaging service.{" "}
          </p>
        </>
      ),
    },
    {
      title: "What is the cost of sending SMS through API?",
      content: (
        <>
          <p>
            There is no difference in sending a text message through SMS API and
            conventional messaging. The pricing depends upon the package and
            service you purchase. To know more about detailed{" "}
            <a href="https://authkey.io/pricing/sms">SMS pricing</a>, Contact
            our sales team for volume-based discounts.
          </p>
        </>
      ),
    },
    {
      title: "Do you offer a free SMS API? ",
      content: (
        <>
          <p>
            Yes, you can avail the free multichannel API for sending the SMS,
            Voice and Email in an automated manner. But you need to buy the SMS
            credit. We offer the 1K SMS with no cost in a{" "}
            <a href="https://console.authkey.io/signup">free trial plan</a>.
            Avail it now!!{" "}
          </p>
        </>
      ),
    },
    {
      title:
        " What is fallback enabled SMS API? Or what is the solution if SMS fails?",
      content: `
                As fallback is a sending feature that uses the multi channels simultaneously i.e SMS, Voice & Email. Authkey’s API is fallback-enabled that drives the messaging information on the associated channels. <a href="https://authkey.io/blog/what-is-fallback-for-sms-otp">Know more on fallback</a>.
                
              <p>  Fallback-enabled sending is highly recommended in case of SMS OTPs or urgent time based messaging. For instance, if the SMS OTP fails/delays, an automated voice call passes the same one time password digits utilizing builtin text to speech tool. </p>
                
                `,
    },
  ],
};

export const metadata = {
  title: "SMS API provider | SMS API - Authkey.io",
  description: "Integrate SMS API for delivering text messaging through your application using the best SMS API provider. Fallback-enabled multichannel API Service. Get started Now",
  alternates: {
    canonical: "https://authkey.io/sms-api-service",
  },
};

const SmsApi = () => {

  return (
    <div>
      <div className="hero homebg">
        <div className="container mt-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 text-center order-last mt-4">
              <img
                className="img-fluid imgfull"
                src="/img/smsapi/sms-api-service-banner.webp"
                alt="SMS API Service"
              />
            </div>
            <div className="col-lg-6">
              <h1><img src="/img/home/sms-icon.webp" alt='SMS' className="iconic" /> SMS API Service</h1>
              <p>Programmable SMS API to automate your application to send critical messaging, OTPs and notifications.</p>
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
              <h4 className="text-center">Trusted By Brands</h4>
              <BrandsItem />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2> Send message with programmable SMS API</h2>
              <p className="mt-2">
                Enable SMS API service in your application. With the omnichannel
                experience that SMS gateway API provides, we ensure that your
                messages are delivered to your customers smoothly and reliably.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="py-6 pynone px-4 sticky-top">
                <h3>Use Authkey’s SMS API to Automate Your Texts</h3>
                <p>Messaging API is designed in a way that just goes beyond the
                  simple campaign processing, message scheduling, organizing
                  contacts, receiving inbound text, SMS OTPs etc. Below are a
                  couple of reasons behind the businesses choosing to use
                  one-way SMS</p>
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
                <h4><img src="/img/smsapi/two-factor-authentication.webp" alt='Two Factor Authentication' className="iconic" />  Two-Factor Authentication(2FA)</h4>
                <p>Secure your App or Web Application with our simple & ready
                  to configure 2FA APIs. Easily integrate 2FA into your
                  application with an SMS API that utilizes voice and SMS
                  messaging to ensure the security of your customers.</p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img src="/img/smsapi/sms-otp.webp" alt='Send SMS OTP' className="iconic" /> Send SMS OTP</h4>
                <p>Experience simplified SMS API platform, designed to deliver
                  OTP instantly in no time, with enhanced security and speed.
                  Send SMS OTP to verify and restrict Fraud Logins. An
                  enhanced API for OTP failure solution with Fallback.</p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img src="/img/smsapi/alert-&-notification.webp" alt='Alerts & Notifications' className="iconic" /> Alerts & Notifications</h4>
                <p>Integrate sms API messaging to Reduce no-shows by sending
                  automated alert SMSs. Update customers in real-time and
                  provide them with reminders and alerts in a timely, secure,
                  and reliable way that they can trust.</p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img src="/img/smsapi/transactional-sms.webp" alt='Transactional SMS' className="iconic" /> Transactional SMS</h4>
                <p> Give messaging capabilities to your crm to Send SMS
                  messaging. Use
                  <a target="_blank" href="/bulk-sms-service-provider/transactional-sms"> SMS API to trigger every transaction</a> detail on billing to your customers timely and helpful
                  payment reminders.</p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><img src="img/smsapi/sms-to-email-voice.webp" alt='SMS to Email/Voice' className="iconic" /> SMS to Email/Voice</h4>
                <p>Integrate SMS messaging API into email/voice service so
                  users and agents can communicate seamlessly in the channel
                  they prefer. You can use all channel parallely or
                  simultaneously.</p>
              </div>

              <div className="crdbox px-4 py-4 mb-6">
                <h4><img src="img/smsapi/custom-made.webp" alt='Custom-made' className="iconic" /> Custom-made</h4>
                <p>Businesses follow different branches and requirement
                  scenarios. We are all ears to listen to your requirements.
                  We will offer you a simplified and flexible SMS API that
                  fulfills your messaging needs. Like hotels.</p>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="fixbgColor">
        <div className="container pt-5 pb-5 pmb0">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <h2>Platform Built To Scale, Speed And Deliver</h2>
            </div>
          </div>

          <div className="row d-flex align-items-center mt-4">
            <div className="col-md-5 mb-4">
              <div className="smscornerbox mb-5">
                <h3 className="main_subtitle">Scale Without Worry</h3>
                <p className="mt-2">
                  Serverless SMS API that is never out of Resource. Just begin
                  with the SMS API. Make expand to multi channel messaging ie.
                  SMS, voice & email. Make few changes in API to avail
                  additional services.
                </p>
              </div>
              <div className="smscornerbox">
                <h3 className="main_subtitle">Fallback Ready</h3>
                <p className="mt-2">
                  Nothing to worry about the SMS OTP failure. Trigger the same OTP information to your client through other channels voice/ emails in critical situations. <a href="/blog/what-is-fallback-for-sms-otp">know more</a>
                </p>
              </div>
            </div>

            <div className="col-md-2">
              <span className="firstCircleline1"></span>
              <span className="firstCircleline2"></span>
              <div className="midCircle">
                <img src="/img/home/sms-icon.webp" alt='SMS' className="iconic" />
              </div>
              <div className="midCircleAnimate"></div>
              <span className="firstCircleline3"></span>
              <span className="firstCircleline4"></span>
            </div>

            <div className="col-md-5 mb-4">
              <div className="smscornerbox mb-5">
                <h3 className="main_subtitle">On-Time Delivery</h3>
                <p className="mt-2">
                  No Queue System maintains the required TPS rate with
                  multiple connections with direct operators and makes sure
                  that there is no queue.
                </p>
              </div>

              <div className="smscornerbox">
                <h3 className="main_subtitle">One API</h3>
                <p className="mt-2">
                  Authkey allows you to configure your messaging stream with
                  the omnichannel platform. Integrate SMS, emails, voice
                  calls, and more into your system with one api integration.
                  <a href="/api-docs"> know more </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-1">
          <div className="row text-center mb-3">
            <div className="col-lg-12">
              <h2>SMS API developed to fit into your source program Developer-Friendly API code</h2>
              <div className="arrowicons">

              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <SmsSampleCode />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5 pmb0">
          <div className="row">
            <div className="col-lg-7">
              <h2>Use SMS messaging and expand to other channels</h2>
              <p>
                The messaging API code adds SMS capabilities to your backend
                system. An integrated SMS channel features expansion over
                Voice/Email is more advantageous than using a single medium of
                critical sending.
              </p>
              <p>Automate Trigger transactional SMS globally with standy voice call setup.</p>
              <p>Configurable SMS API with Multi channel Fallback Backup System i.e. dedicated solution to SMS OTP failure.</p>
              <p>Systems based on the cloud maintain data securely with global availability and keep up with built in analytics.</p>
            </div>
            <div className="col-lg-5">
              <img className="img-fluid" alt="Programmable SMS API" src="img/smsapi/serverless-api.webp" />
            </div>
          </div>
        </div>
      </section>


      <section className="yellowback">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 mb-4">
              <h2>Why Do Businesses Love Authkey’s API gateway?</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 pb-3">
              <div className="smscornerbox smscornerheight">
                <h4><img src="img/smsapi/sms-gateway.webp" alt="Trustworthy SMS Gateway" style={{ width: "38px" }} /> Trustworthy SMS Gateway</h4>
                <p>
                  Sending SMS messaging is a great way to make your customer
                  engage for every event. Our Uptime SLA Guarantee and high TPS
                  give you peace of mind while sending SMS OTP, transactional
                  message, notifications, etc., If you are not sending using API
                  integration, use our dedicated bulk SMS marketing portal.{" "}
                </p>
                <p>
                  Live Analytics offers combined and detailed insights into
                  delivered, failed and latency metrics.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 pb-3">
              <div className="smscornerbox smscornerheight">
                <h4><img src="img/smsapi/sms-api-integration.webp" alt="Seamless SMS API Integration" style={{ width: "38px" }} /> Seamless SMS API Integration</h4>
                <p>
                  Integrate easily with our SMS API. Built for developers to make
                  the integration process smooth and easy. The API code is
                  available in all programming languages.</p>
                <p>We know how to get
                  composited into source code with other platforms. API.
                </p>
                <p>
                  Sample code for PHP, Python, JAVA, C#, cURL, Powershell Node.js,
                  Go, Javascript, Ruby and Swift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container mb-5 px-5 py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2 className="">Discover the cost effective pricing</h2>
              <p>
                Contact us for full integration support. Our Support Team cannot
                wait to get you started. Get additional discounts with committed
                usage. Contact Sales to learn more.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="buletpoint">
                <div className="row mt-3">
                  <div className="col-md-4  mb-3">
                    <a href="https://console.authkey.io/signup">
                      <button className="button-link btn-block">Talk to an expert</button>
                    </a>
                  </div>
                  <div className="col-md-4 mb-3">
                    <a href="/pricing/sms">
                      <button className="button_linkborder btn-block">See Pricing</button>
                    </a>
                  </div>
                  <div className="col-md-4 mb-3">
                    <a href="/startup-india">
                      <button className="button-link btn-block">Startup Plan</button>
                    </a>
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
export default SmsApi;