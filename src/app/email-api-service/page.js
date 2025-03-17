import SignupComponent from "../../../components/SignupComponent";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import { FaCheck } from "react-icons/fa6";
import BrandsItem from "../../../components/BrandsItem";
import { EnvelopeAt, PersonCheck, PersonHearts } from "react-bootstrap-icons";

export const metadata = {
  title: "Email API | send Transactional Emails | Authkey.io",
  description:"Email API to send OTP and transactional emails. Easy to integrate with complete clear documentation for developers. Send & Deliver in seconds. Authkey.io",
  alternates: {
    canonical: "https://authkey.io/email-api-service",
  },
};
const EmailApi= () => {
  return (
    <div>
      <div className="hero homebg">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>
                <img
                  src="/img/home/email-icon.webp"
                  alt="Email"
                  className="iconic"
                /> Email Marketing via Amazon SES
              </h1>
              <p> Bulk, Auto/Drip, and Transactional Email for Agencies and Makers</p>
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
              <h2>Authkey</h2>
              <p className="mt-2">Enterprise Level Features. Start-Up Speed</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-3">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="py-6 pynone px-4 sticky-top">
                <h3>Grow your audience</h3>
                <p>
                  {" "}
                  Create beautiful landing pages and embedded sign-up forms in
                  Email authkey. Or integrate with your favourite apps via
                  Zapier for even more options.
                </p>

                <a
                  href="https://console.authkey.io/signup"
                  className="btn btn-primary mt-2"
                >
                  {" "}
                  Talk to Expert
                </a>
              </div>
            </div>

            <div class="col-lg-6">
              <div className="linebox">
                <div className="circle-fill-main circle-fill-orange">
                  <div className="circle-fill"></div>
                </div>
              </div>

              <div className="crdbox px-4 mt-6 pb-4">
                <h4>
                  <img
                    src="/img/email/brand.png"
                    alt="Built-in Brand Management"
                    className="iconic"
                  />{" "}
                  Built-in Brand Management
                </h4>
                <p>
                  Manage UNLIMITED brands and users with access controls at no
                  extra cost, optimized workflows for marketing agencies or
                  consultants
                </p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4>
                  <img
                    src="/img/email/email-campaign.png"
                    alt="Send SMS OTP"
                    className="iconic"
                  />{" "}
                  All Email Campaign Types
                </h4>
                <p>
                  Support for marketing, auto/drip, or transactional emails via
                  user-defined triggers, API calls, or RSS feed updates.
                </p>
              </div>

              <div className="crdbox px-4 py-4 mb-6">
                <h4>
                  <img
                    src="/img/email/white-label.png"
                    alt="White Label Options"
                    className="iconic"
                  />{" "}
                  White Label Options
                </h4>
                <p>
                  Use custom domain for tracking links, customize unsubscribe
                  page with logo and email preferences, or white label entire
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-md-4 my-3">
              <div className="smscornerbox">
                <div class="mt-2 mb-2 rcsicon rcsiconYellow">
                  <EnvelopeAt size={25} />
                </div>
                <h2>
                  <span className="voilet_txtcolor">62,000</span>
                </h2>
                <h5 className="mb-0">Emails have been sent</h5>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className="smscornerbox">
                <div class="mt-2 mb-2 rcsicon rcsiconOrange">
                  <PersonCheck size={25} />
                </div>
                <h2>
                  <span className="voilet_txtcolor">83,023,284</span>
                </h2>
                <h5 className=" mb-0">Managed Subscribers</h5>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className="smscornerbox">
                <div class="mt-2 mb-2 rcsicon rcsiconViolet">
                  <PersonHearts size={25} />
                </div>
                <h2>
                  <span className="voilet_txtcolor">10,092</span>
                </h2>
                <h5 className=" mb-0">Customers Trust & love us</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 mb-4">
              <h2 className="mt-4">Integrations via Zapier</h2>

              <p className="my-4">
                Using a Zapier integration you can connect Authkey to hundreds
                of other platforms and applications.
              </p>

              <p>
                Sync up your customer records with a CRM, in-house application,
                another ESP, or add records to Authkey when you acquire
                subscribers or customers in other platforms like Shopify,
                PayPal, Google Forms, and many others
              </p>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <SignupComponent />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container planMob">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center mb-4">
              <h2 className="">Pay only for what you use</h2>
              <p className="mt-3">
                Connecting with your subscribers is now more straightforward
                with Authkey new flexible pricing
              </p>
            </div>
          </div>
          <div className="row justify-content-center gap-4 flex-column flex-lg-row">
            <div className="col-lg-4 planlaptop greenPlan d-flex align-items-start flex-column p-4 pt-5 position-relative mt-5 mb-5">
            <div class="position-absolute top_up end-0 badge badgeWhite greenPlan">Free</div>
              <div className="mb-auto btn-block">
                <h5 className="whatsappIntTitle whatsappIntTitle3">
                  Forever Free
                </h5>
                <ul className="list-unstyled bgreenPlan mt-3">
                <li className="d-flex mb-2">
                <FaCheck /> 
                    Unlimited subscribers
                  </li>
                  <li className="d-flex mb-2">
                <FaCheck /> 
                    Up to 62K emails per month
                  </li>
                  <li className="d-flex mb-2">
                <FaCheck /> 
                    authkey branding on emails and unsubscribe page
                  </li>
                </ul>
              </div>
              <a href="https://console.authkey.io/signup" className="mt-3 btn btn-primary btn-block">
                  Sign up
                </a>
            </div>

            <div className="col-lg-4 planlaptop orangePlan p-4 pt-5 position-relative mt-4 mb-5">
            <div class="position-absolute top_up leftcalPlan badge badgeWhite orangePlan">Startup</div>
            <div className="mb-auto">
                <div className="whatsappIntTitle whatsappIntTitle3">
                  Startup Plan
                </div>
                <h3 class="mt-2 mb-4 d-flex align-items-end">
                  <span class="display-4 fw-bold">10 paisa</span>
                  <span class="text-muteds ms-2">Per Email</span>
                </h3>
                  
                <ul className="freeplan mt-4 mb-5">
                <li className="d-flex mb-2">
                <FaCheck /> 
                    Unlimited subscribers
                  </li>
                  <li className="d-flex mb-2">
                <FaCheck /> 
                    Unlimited emails per month
                  </li>
                  <li className="d-flex mb-2">
                <FaCheck /> 
                    No authkey branding on emails and unsubscribe page
                  </li>
                </ul>
                
              </div>
              <a href="https://console.authkey.io/signup" className="mt-3 btn btn-primary btn-block">
                  Sign up
                </a>
            </div>

            <div className="col-lg-4 planlaptop yellowPlan d-flex align-items-start flex-column p-4 pt-5 position-relative mt-5 mb-5">
            <div class="position-absolute top_up rightCalPlan badge badgeWhite yellowPlan">Enterprise</div>
            <div className="mb-auto">
                <h5 className="whatsappIntTitle whatsappIntTitle3 ">
                  Enterprise Plan
                </h5>

                <h3 class="mt-2 mb-4 d-flex align-items-end">
                  <span class="display-4 fw-bold">12000</span>
                  <span class="text-muteds ms-2">Per Year</span>
                </h3>
                <ul className="freeplan mt-3">
                <li className="d-flex mb-2">
                <FaCheck /> 
                    Unlimited subscribers
                  </li>
                  <li className="d-flex mb-2">
                <FaCheck /> 
                    Unlimited emails per month
                  </li>
                  <li className="d-flex mb-2">
                  <FaCheck /> 
                    Authkey branding on emails and unsubscribe page
                  </li>
                </ul>
              </div>
              <a href="https://console.authkey.io/signup" className="mt-3 btn btn-primary btn-block">
                  Sign up
                </a>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseAuthkey />
    </div>
  );
};

export default EmailApi;
