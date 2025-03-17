import dynamic from "next/dynamic";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";

const FaqComponents = dynamic(
  () => import("../../../components/FaqComponents"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const data = {
  rows: [
    {
      title: "What is Bulk SMS Service?",
      content: `
      Bulk SMS service is a message sending service that allows businesses and individuals to send large volume messages to number lists. The messaging service runs through a web-based panel, mobile application or through API connectivity with a software program.
      
          `,
    },
    {
      title: " What is Bulk SMS service provider?",
      content: `   
          Bulk SMS service provider is a company that provides the SMS gateway and API connections to send large volumes of SMS at enterprise level like Authkey.io does.  
      
              `,
    },
    {
      title: "How to Send Bulk SMS online?",

      content: `
            <strong>You can send Bulk SMS through Authkey’s online portal: </Strong>
            <ol>
                <li>Sign Up for a new account</li>
                <li>Setup DLT & template details</li>
                <li>Recharge your wallet(after free amount)</li>
                <li>Select your template message</li>
                <li>Upload or Paste contact list</li>
                <li>Click Send or schedule for later. It's done. </li>
                <li>Now you can check the real time delivery reports.</li>
              </ol>
        `,
    },
    {
      title: "Do authkey offer a free trial for Bulk SMS service?",
      content: `
      Yes. We offer you a free bulk SMS plan to test the messaging service. Talk to our expert to align you with the best fitted SMS solution.

      `,
    },
    {
      title: "How would I know the message delivery?",
      content: ` Authkey’s SMS dashboard is feature loaded. You will get instant delivery, failed and latency reports on your panel with committed error code to resolve the problem.
      `,
    },
    {
      title: "What is the message sending limit a day? ",
      content: `
      Authkey is a high tech platform to serve enterprise grade messaging services. There is no limit for sending SMS messages for a day. You can send one SMS or N million of SMSes in seconds.`,
    },

    ,
    {
      title: "What is bulk SMS cost?",
      content: `
      Authkey offers you the best-in-market SMS pricing plans.  We also offer high volume based discounts. Talk to our sales expert for the best SMS plan that your business would love. `,
    },
    ,
    {
      title: " How safe is my SMS number data?",
      content: `
     
There is no loophole for the access of user accounts. Your set password is the only key to enter the dedicated account. Even our executive could not be allowed until you permit.`,
    },
    ,
    {
      title: "Can I send an international bulk SMS campaign? ",
      content: `
      
Yes. Authkey is globally partnered with best operators and trusted globally. You can send Bulk SMS campaigns worldwide with quick deliveries.`,
    },
    ,
    {
      title: "Can I get online technical support for SMS service?",
      content: `
      
Our dedicated customer care and developers team is always ready to quick query resolutions. We provide 24X7 customer and technical support.`,
    },
  ],
};

export const metadata = {
  title: "Bulk SMS service | Promotional Bulk SMS - Authkey.io",
  description:
    "Send bulk SMS online through Bulk SMS service provider at Authkey.io. We provide promotional and transactional SMS. Test Free SMS Online.",
    alternates: {
      canonical: "https://authkey.io/bulk-sms",
    },
};

const bulkSms = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h1>Use #1 SMS platform to send messages globally.</h1>
              <h5>
                Send bulk SMS to the large audience and see the successful
                engagements.
              </h5>
              <a href="https://console.authkey.io/signup">
                <button className="btn mt-4">Sign up</button>
              </a>
            </div>
            <div className="col-md-6 my-5">
              <img
                src="/img/bulk-sms/header.png"
                className="img-fluid"
                alt=" SMS platform to send messages globally."
              />
            </div>
          </div>
        </div>
      </div>
      <section className="mb-5">
        <div className="container">
          <div className="buletpoint mt-5">
            <div className="row justify-content-center">
              <div className="col-md-3 col-sm-6">
                <strong>Send SMS Instantly </strong>
                <strong>Automated Messages </strong>
                <strong>Easy SMS API Integration </strong>
                <strong>Instant Message Delivery </strong>
              </div>
              <div className="col-md-3 col-sm-6">
                <strong>Transactional SMS service </strong>
                <strong>Promotional SMS service </strong>
                <strong>Secure OTP service </strong>
                <strong>Real Time Report </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h6 className="text-center ">
                  Bulk sms service and easy-to-use authentication solutions for
                  businesses and developers. It allows you to easily integrate
                  SMS API for features such as automated bulk SMS, two-factor
                  authentication, passwordless login, and social login into your
                  applications, without having to build these features from
                  scratch. Authkey.io supports a variety of programming
                  languages and frameworks, making it a flexible SMS solution
                  for developers. It provides robust security features to ensure
                  that user data is protected.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-0 ">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="container justify-content-center">
              <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-md-8 text-center">
                  <h2 className="pt-5 pb-3">
                    {" "}
                    Promotional service, Transactional service and{" "}
                    <span style={{ color: "#fdc236" }}>OTP SMS </span>
                  </h2>
                  <p>
                    #1 bulk SMS services in India, Bulk SMS Gateway offers
                    high-quality Promotional SMS and Transactional SMS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div className="">
                <div className="pb-3">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <strong> Promotional SMS </strong>
                        </td>
                        <td>
                          {" "}
                          <strong> Transactional SMS </strong>
                        </td>
                        <td>
                          <strong> Secure SMS OTP </strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Sending promotional bulk SMS messages <br /> to your
                          target audience can be an <br /> effective way to
                          market your brand.
                        </td>
                        <td>
                          Your software can send an automated <br /> SMS on
                          occurrence of any event, <br /> such as billing,
                          payments, appointment, alert etc.
                        </td>
                        <td>
                          You can ensure the security by <br /> using one-time
                          passwords for logins, <br /> resets, and new
                          registrations.
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <img
                        src="/img/bulk-sms/secured-sms.png"
                        className="img-fluid"
                        alt="Promotional SMS"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-lg-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="">
                Easy-to-use SMS platform with comprehensive features
              </h2>
              <div className="border_bar"></div>
            </div>
          </div>

          <div className="row translational-sms mt-5">
            <div className="col-md-4">
              <div className="">
                <div className="card-body ">
                  <div className="pt-4 pb-3">
                    <img
                      src="img/bulk-sms/Global.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">Global Reach</h5>
                  <p className="text-muted ">
                    Instantly send SMS to millions anywhere globally. Easily
                    send your campaign or schedule for later in regional
                    language.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="">
                <div className="card-body ">
                  <div className="pt-4 pb-3">
                    <img
                      src="/img/bulk-sms/Track-reports.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">Track Reports</h5>
                  <p className="text-muted ">
                    Don’t guess for message delivery. Get real time track
                    reports for each number a campaign hits.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="">
                <div className="card-body ">
                  <div className="pt-4 pb-3">
                    <img
                      src="/img/bulk-sms/ways.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">Ways to Send</h5>
                  <p className="text-muted ">
                    {" "}
                    SMS Platform gives you many ways to trigger SMS as an online
                    panel, API integrations, excel plugins and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="">
                <div className="card-body ">
                  <div className="pt-4 pb-3">
                    <img
                      src="/img/bulk-sms/quick.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">Quick Integration</h5>
                  <p className="text-muted ">
                    {" "}
                    We provide an easy-to-integrate API as well as SMS, Voice,
                    and Email functionality with one API connection.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="">
                <div className="card-body ">
                  <div className="pt-4 pb-3">
                    <img
                      src="/img/bulk-sms/high.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">High Returns</h5>
                  <p className="text-muted ">
                    Customers take more actions on available CTA than any other
                    marketing channel. It has a high conversion rate.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="">
                <div className="card-body ">
                  <div className="pt-4 pb-3">
                    <img
                      src="/img/bulk-sms/return.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">At Low Pricing</h5>
                  <p className="text-muted ">
                    {" "}
                    Sending bulk SMS campaigns engage a large audience as well
                    as target market at low price
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-lg-6 pb-lg-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="">Authkey: One Stop Solutions</h2>
              <div className="border_bar"></div>
              <p> SMS, Voice, Email & Whatsapp.</p>
            </div>
          </div>
          <div className="row translational-sms mt-5">
            <div className="col-md-6">
              <div className="">
                <div className="card-body ">
                  <div className="pt-4 pb-3">
                    <img
                      src="img/bulk-sms/quick.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">Messaging Solution</h5>
                  <p className="text-muted ">
                    Start a quick SMS campaign, transactional messaging or
                    authentication one-time-password. Know More.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <div className="card-body ">
                  <div className="pt-4 pb-3">
                    <img
                      src="/img/bulk-sms/Global.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">Voice Solution</h5>
                  <p className="text-muted ">
                    Broadcast your marketing campaign through phone calls. You
                    can use the API integration to channelise through TTS. Know
                    More.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="">
                <div className="card-body ">
                  <div className="pt-4 pb-3">
                    <img
                      src="/img/bulk-sms/email.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">Email Solutions</h5>
                  <p className="text-muted ">
                    {" "}
                    Develop an outstanding email program utilizing the Email
                    API, trusted by leading brands on a large scale. Know More.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="">
                <div className="card-body ">
                  <div className="pt-4 pb-3">
                    <img
                      src="/img/bulk-sms/whatsapp.png"
                      className="img-fluid"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">WhatsApp Solution</h5>
                  <p className="text-muted ">
                    Create your amazing chatbots with auto response with trusted
                    whatsapp business API solution. Know more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="row mt-5 justify-content-center">
          <div className="col-md-6 text-center">
            <h2 className="">
              {" "}
              Our SMS pricing plans are tailored to meet the business needs of
              sending a large number of messages.{" "}
            </h2>
            <p>
              Free Bulk SMS <br />
              Sign up today to test our SMS delivery rate.
            </p>
            <div className="api-buttons m-5">
              <a
                className="btn dark-blur-btn"
                href="https://console.authkey.io/signup"
              >
                Send Free SMS
              </a>
              <a className="btn outline-btn" href="/pricing/sms">
                Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-5">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="">Read More</h2>
              <div className="border_bar"></div>
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-12"><BlogSlider /></div>
          </div>
        </div>
      </section> */}

      <section className="">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-6 text-center">
              <h2 className=""> What We Offer </h2>
              <div className="border_bar"></div>
              <p className="mt-3">Best Offer For Your Better Business</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12 d-flex align-items-center">
              <div className="whatsapp-points ">
                <ul>
                  <li>
                    You can launch a Bulk SMS campaign with just a few clicks.
                    Every Bulk SMS sent through our platform is delivered
                    promptly.
                  </li>
                  <li>
                    You can get your account activated instantly, allowing you
                    to buy and use Bulk SMS within a minute.
                  </li>
                  <li>
                    You have the freedom to choose both the timing(scheduler)
                    and the number of SMS messages you wish to send. Unlimited
                    validity empowers you to streamline your marketing
                    campaigns.{" "}
                  </li>
                  <li>
                    Our Bulk SMS services are fully automated through SMS API
                    integration, ensuring availability 24/7. If you encounter
                    any issues in message delivery, we stand ready to provide
                    support and ensure that your campaign runs flawlessly.
                  </li>
                  <li>
                    Our experienced developer team alway active to help. We
                    provide industry-leading technical support.
                  </li>
                  <li>
                    Authkey.io offers a simple online SMS portal with a
                    dedicated account for each user, making it easily accessible
                    without any difficulty.
                  </li>
                  <li>
                    Authkey.io employs high-end operators and deliverable routes
                    globally, ensuring SMS delivery is extremely fast, often
                    within 5 seconds.
                  </li>
                  <li>
                    Our platform features a Number-list functionality, allowing
                    you to save phone numbers and reuse them for future
                    marketing campaigns.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-6 text-center">
              <h2 className="">Send SMS Anywhere Around the Globe </h2>
              <div className="border_bar"></div>
              <p className="mt-3">Bulk SMS Service Provider</p>
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-md-5 col-sm-6">
              <p>Bulk SMS Service Provider in Delhi </p>
              <p>Bulk SMS Service Provider in Gurgaon </p>
              <p>Bulk SMS Service Provider in Mumbai </p>
              <p>Bulk SMS Service Provider in Bangalore </p>
            </div>
            <div className="col-md-5 col-sm-6">
              <p>Bulk SMS Service provider in Hyderabad </p>
              <p>Bulk SMS Service Provider in Pune </p>
              <p>Bulk SMS Service Provider in Noida </p>
              <p>Bulk SMS Service Provider in Chennai </p>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="buletpoint mt-5">
            <div className="row justify-content-center">
              <div className="col-md-12 col-sm-12">
                <p>
                  Delhi NCR | Mumbai | Goa | Chennai | Kolkata | Jaipur | Ranchi
                  | Odisha | Lucknow Hyderabad | Arunachal Pradesh | Assam |
                  Patna | Raipur | Bangalore | Gujarat | Chandigarh | Himachal
                  Pradesh | Jammu & Kashmir | Kerala | Bhopal | Manipur |
                  Meghalaya | Mizoram | Nagaland | Sikkim Tripura | Dehradun |
                  Andaman and Nicobar Islands | Dadra and Nagar Haveli | Daman
                  and Diu | Lakshadweep | Pondicherry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>
                {" "}
                <a
                  target="_blank"
                  href="https://authkey.io/ildo-bulk-sms-india"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Send IlDO SMS: international Long distance Operator Bulk SMS{" "}
                </a>{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>

      <FaqComponents data={data} />

      <WhyChooseAuthkey />
    </div>
  );
};

export default bulkSms;
