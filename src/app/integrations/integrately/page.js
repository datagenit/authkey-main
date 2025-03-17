import WhyChooseAuthkey from "../../../../components/WhyChooseAuthkey";
import BrandsItem from "../../../../components/BrandsItem";
import { TbChartDots3 } from "react-icons/tb";
import { FcMultipleDevices } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";

export const metadata = {
  title: "Integrate Authkey With Integrately | Automate Whatsapp and SMS",
  description:
    "Automate WhatsApp and SMS notifications for over 1200 apps with Authkey and Integrately. Save time and enhance customer engagement effortlessly.",
  alternates: {
    canonical: "https://authkey.io/integration/integrately",
  },
};
const Integrately = () => {
  return (
    <div>
      <section className="hero homebg">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 txtcenter">
              <h1>Automate Notification via WhatsApp and SMS for 1200+ Apps</h1>

              <a
                href="https://console.authkey.io/login"
                className="btn mt-2"
              >Sign In</a>
              <a href='https://authkey.io/blogs/authkey-integrations-with-integrately' className="btn outline-btn mt-2" target="_blank">Explore</a>
            </div>
            <div className="col-md-5 my-4">
              <img
                className="img-fluid imgfull"
                src="/img/integrately/integrately-banner.png"
                alt="integrately"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>Benefits of Automation via Authkey and Integrately</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-4 mb-4 text-center">
              <div className="channelbox whitebox channelbox1 py-3 px-5">
               <div className="rcsicon rcsiconYellow mt-4">
                  <TbChartDots3 size={27} />
               </div>
                <h5 className="mt-3">Automated Workflows</h5>
                <p>Trigger automated messages on Whatsapp and SMS, updates, and reminders based on customer actions or custom rules, saving time and effort.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="channelbox whitebox channelbox1 py-3 px-3">
                <div className="rcsicon rcsiconBlue mt-4">
                <FcMindMap size={27}  />
                </div>
                <h5 className="mt-3">Multi-Channel Support</h5>
                <p>It allows you to send notifications across multiple channels, not just SMS. Seamlessly send the same notification via WhatsApp, SMS, and email, reaching your customers wherever they are.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="channelbox whitebox channelbox1 py-3 px-4">
                <div className="rcsicon rcsiconOrange mt-4">
                  <FcMultipleDevices size={27}  />
                </div>
                <h5 className="mt-3">Easy to Connect</h5>
                <p>Enjoy a user-friendly dashboard where you can simply pick the app you want to automate and connect with Authkey in just a few steps. Effortlessly streamline your workflows.</p>
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
                <h3>Steps To Connect Authkey with Integrately</h3>
                <a href="https://console.authkey.io/signup" className="btn btn-primary mt-2"> Talk to Expert</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="linebox"><div className="circle-fill-main  circle-fill-gray"><div className="circle-fill circle-fill-gray"></div></div></div>
              <div className="crdbox px-4 py-4 pt-5">
                <h5><img src='/img/integrately/signup-authkey.webp' alt='Sign Up / Sign In' className="iconic" width="42" height="35" /> <b>&nbsp;Sign Up / Sign In on Authkey</b>:</h5>
                <p> Start by logging into your Authkey account or creating a new one.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/select-inetgrately.webp' alt='Select Integrately' className="iconic" width="40" height="40" />  <b>Select Integrately in the Marketplace</b>:</h5>
                <p> Go to the Authkey marketplace and choose the Integrately integration.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/signup-integrately.webp' alt='Sign Up on Integrately' className="iconic" width="40" height="35" /> <b>&nbsp;Sign Up on Integrately</b>:</h5>
                <p> Create an account on Integrately, then navigate to New Automation.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/first-app.webp' alt='Choose the First App' className="iconic" width="40" height="40" /> <b>Choose the First App to Automate</b>:</h5>
                <p>Select the initial app you want to connect and configure your automation.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/second-app.webp' alt='Connect the Second App' className="iconic" width="40" height="40" /> <b>Connect the Second App</b>:</h5>
                <p> Proceed to the next step and choose Authkey as your second app to complete the integration.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/choose-action.webp' alt='Choose Your Action' className="iconic" width="40" height="40" /> <b>Choose Your Action</b>: </h5>
                <p> Select the actions you want to automate, such as SMS, WhatsApp, email, or voice messages.</p>
              </div>
              <div className="crdbox px-4 py-4">
                <h5><img src='/img/integrately/map-attribute.webp' alt='Map Attributes' className="iconic" width="40" height="38" /> <b>Map Attributes</b>:</h5>
                <p> After connecting authkey, Map the attributes according to the correct format.</p>
              </div>
              <div className="crdbox px-4 py-4 pb-6">
                <h5><img src='/img/integrately/go-live.webp' alt='Test and Go Live' className="iconic" width="40" height="38" /> <b>Test and Go Live</b>: </h5>
                <p>Run a test to ensure everything works as expected, then activate the flow to start automated messaging. The automation will continue until you manually disable it.</p>
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
                <h2 className="text-center">  Still, Confused or Can’t Find Your App?</h2>
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

export default Integrately;
