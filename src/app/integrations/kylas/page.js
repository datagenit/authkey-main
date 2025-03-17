import WhyChooseAuthkey from "../../../../components/WhyChooseAuthkey";
import BrandsItem from "../../../../components/BrandsItem";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FcFaq } from "react-icons/fc";
import { FcMultipleDevices } from "react-icons/fc";


export const metadata = {
  title: "Connect Kylas CRM with Authkey | Automate WhatsApp Business API & SMS",
  description:
    "Automate Kylas CRM notifications, alerts, and campaigns to enhance customer engagement, streamline workflows, and nurture leads with ease.",
  alternates: {
    canonical: "https://authkey.io/integration/kylas",
  },
};
const Zapier = () => {
  return (
    <div>
      <section className="hero homebg">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 txtcenter">
              <h1>SMS and WhatsApp Business API Integration for Kylas CRM: Automate Notifications & Campaigns</h1>
              <a
                href="https://console.authkey.io/login"
                className="btn mt-2"
              >Sign In</a>
                        <a href='https://console.authkey.io/signup' className="btn outline-btn mt-2" target="_blank">Explore</a>
            </div>
            <div className="col-md-5 my-4">
              <img
                className="img-fluid imgfull"
                src="/img/integrately/kylas.png"
                alt="Pabbly Connect"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>Benefits of Automation via Authkey and Kylas CRM</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-4 mb-4 text-center">
            <div className="channelbox whitebox channelbox1 py-3 px-3">
                <div className="rcsicon rcsiconBlue mt-4">
                  <MdOutlineNotificationsActive  size={27} />
                </div>
                <h5 className="mt-3">Instant Notifications and Alerts</h5>
                <p>Send real-time SMS and WhatsApp notifications to your leads and customers for important updates, reminders, and alerts—keeping them informed and connected. actions or custom rules, saving time and effort.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
            <div className="channelbox whitebox channelbox1 py-3 px-3">
               <div className="rcsicon rcsiconGreen mt-4">
                  <FcFaq size={27} />
               </div>
                <h5 className="mt-3">Enhanced Lead Nurturing</h5>
                <p>Build trust and nurture leads by setting up tailored message sequences for different stages in the customer journey, helping move prospects through the funnel smoothly.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="channelbox whitebox channelbox1 py-3 px-4">
               <div className="rcsicon rcsiconOrange mt-4">
                  <FcMultipleDevices size={27}  />
                </div>
                <h5 className="mt-3">Easy to Connect</h5>
                <p>Enjoy a user-friendly dashboard where you can simply pick the app you want to automate and connect with Authkey in just a few steps. Effortlessly streamline your workflows.
                </p>
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
                <h3>Steps To Connect Authkey with Kylas</h3>
                <a href="https://console.authkey.io/signup" className="btn btn-primary mt-2"> Talk to Expert</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="linebox">
                <div className="circle-fill-main circle-fill-green">
                  <div className="circle-fill circle-fill-green"></div>
                </div>
              </div>
              <div className="crdbox px-4 py-4 pt-5">
                <h5><img src='/img/integrately/signup-authkey.webp' alt='Sign Up / Sign In on Authkey' className="iconic" width="42" height="35" /> <b>&nbsp;Sign Up / Sign In on Authkey</b>:</h5>
                <p>Start by logging into your Authkey account or creating a new one.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/select-kylas.png' alt='Choose Kylas CRM in the Authkey Marketplace' className="iconic" width="40" height="40" />  <b>Choose Kylas CRM in the Authkey Marketplace</b>:</h5>
                <p>Navigate to the Authkey Marketplace and select the Kylas CRM integration option.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/login-kylas.png' alt='Sign Up or Log In to Kylas CRM' className="iconic" width="40" height="35" /> <b>&nbsp;Sign Up or Log In to Kylas CRM</b>:</h5>
                <p>If you don’t already have a Kylas CRM account, sign up and log in. Once logged in, go to the Kylas Marketplace.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/search-authkey.webp' alt='Search for Authkey in Kylas CRM' className="iconic" width="40" height="40" /> <b>Search for Authkey in Kylas CRM</b>:</h5>
                <p>Use the search bar in the Kylas Marketplace to locate Authkey. Select it and initiate the connection.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/second-app.webp' alt='Connect the Second App' className="iconic" width="40" height="40" /> <b>Connect Kylas to Authkey</b>:</h5>
                <p>Return to your Authkey account and locate the <b>Kylas ID</b> section in your profile. Enter your Kylas CRM ID to establish the connection.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/choose-action.webp' alt='Choose Your Action' className="iconic" width="40" height="38" /> <b>Grant Permissions</b>:</h5>
                <p>Approve all necessary permissions to enable Authkey to fetch data and send notifications via SMS and WhatsApp.</p>
              </div>
              <div className="crdbox px-4 py-4 pb-6">
              <h5><img src='/img/integrately/go-live.webp' alt='Test and Go Live' className="iconic" width="40" height="38" />  <b>Test and Go Live</b>: </h5>
                <p>After connecting Authkey to Kylas, go to your lead or contact details in Kylas CRM. Click on the message icon on the right-hand side, select Authkey as your messaging provider, and choose an approved template to send SMS or WhatsApp messages effortlessly.</p>
              </div>
             

            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="transition-shadow whatsappSpace pt-5 pb-3">
                <h2 className="text-center">Still, Confused about connecting with the Kylas App?
                </h2>
                <p className="my-2">
                Click below to connect and schedule a demo session with our technical team.
                </p>
                <div className="mt-2">
                  <a href="https://calendly.com/princejha8219/authkey-io-demo-or-discussion?month=2024-11">
                    <button className="home-button btn-signup mt-2 mb-5">
                      Schedule Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseAuthkey />
            <section className="bg-sectionthird">
        <div className="container-fluid pt-5 pb-5">

          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="brandtxt text-center">Trusted By many Brands and Enterprise</div>
              <BrandsItem />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Zapier;
