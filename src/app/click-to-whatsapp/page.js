import BrandsItem from "../../../components/BrandsItem";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import { IoMagnet } from "react-icons/io5";
import { ImCart } from "react-icons/im";
import { RiCalendarScheduleFill } from "react-icons/ri";
import {
  CheckCircle,
} from "react-bootstrap-icons";


export const metadata = {
  title: "Convert Ad Clicks into Conversations with CTWA",
  description: "Connect potential customers to a WhatsApp chat when they click on your Facebook or Instagram advertisement with Click to WhatsApp Ads (CTWA). Try It Now.",
  alternates: {
    canonical: "https://authkey.io/click-to-whatsapp",
  },
};
const WhatsappAds = () => {
  return (
    <div>
      <section className="hero homebg">
        <div className="container pt-3 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h1><img src='/img/home/whatsapp-icon.webp' alt='WhatsApp' className="iconic" />Click to WhatsApp Ads</h1>
              <p>Simply connect the potential customer on the WhatsApp chat with whosoever clicks on Facebook and Instagram advertising.
              </p>
              <a href="https://console.authkey.io/signup">
                <button className="btn mt-3">Sign Up</button>
              </a>
            </div>
            <div className="col-lg-6 mt-4">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/whatsapp-ads.png"
                alt="Voice API service | Authkey.io"
              />
            </div>
          </div>
        </div>
      </section>


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
        <div className="container greenPlan my-5 py-5">
          <div className="row justify-content-md-center">
            <div className="col-lg-10 text-center">
              <h2 className="">Bring Customers to WhatsApp with a Single Click</h2>
              <ul className="freeplan">
                    <li>
                      <span>
                        <CheckCircle />
                      </span>Advertisements displayed on platforms like Facebook and Instagram</li>
                      <li>
                      <span>
                        <CheckCircle />
                      </span>Users click on the WhatsApp Button</li>
                      <li>
                      <span>
                        <CheckCircle />
                      </span>Whosoever clicked, lands on WhatsApp chat with Business</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-3 pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h2>The Values of CTWA</h2>
            </div>
          </div>
          <div className="row d-flex align-items-center mt-2">
            <div className="col-md-6">
              <div className="pb-3">
                <h3>Instant Engagement</h3>
                <p>With Click to WhatsApp Ads CTWA, customers can skip lengthy forms and email exchanges. They can instantly message your business, ask questions, or inquire about products, making communication fast and easy.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src="img/whatsapp/ctwa.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-last">
              <img
                src="/img/whatsapp/boost-conversion.png" alt="Boost Conversions"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-2">Boost Conversions</h3>
              <p>
              By enabling one-on-one communication, you can address customer queries immediately, helping them make informed purchasing decisions. This personal approach increases the likelihood of conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h3 className="mb-2">Build Trust with Direct Messaging</h3>
              <p>WhatsApp is a platform your customers already trust and use daily. Click to WhatsApp Ads leverage this familiarity, making customers more comfortable engaging with your brand.</p>
            </div>
            <div className="col-md-6">
              <img
                src="/img/whatsapp/build-trust.png"
                className="img-fluid" alt="WhatsApp Marketing Campaigns"
              />
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-last">
              <img
                src="/img/whatsapp/real-time-support.png" alt="Real-time Customer Support"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-2">Real-time Customer Support</h3>
              <p>
              Offer immediate assistance to customers by resolving their concerns or providing information instantly. This can drastically improve customer satisfaction and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h2 className="">WhatsApp Ads Solution built to Cater any industry use case:</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow shadowsins pb-2 px-3 text-center">
                  <div className="pt-2 pb-2 text-center">
                    <div className="mt-4 rcsicon rcsiconGreen">
                        <IoMagnet size={29} />
                    </div>
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Lead Generation</h5>
                  </div>
                  <p>
                  Capture leads by offering free consultations, product inquiries, or demo bookings via WhatsApp.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow shadowsins pb-2  px-3 text-center">
                  <div className="pt-2 pb-2 text-center">
                    <div className="mt-4 rcsicon rcsiconOrange">
                        <ImCart size={26} />
                    </div>
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">eCommerce Sales</h5>
                  </div>
                  <p>
                  Use personalized conversations to guide customers through the purchasing process and provide product recommendations.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow shadowsins pb-2 px-3 text-center">
                  <div className="pt-2 pb-2 text-center">
                    <div className="mt-4 rcsicon rcsiconViolet">
                    <RiCalendarScheduleFill size={26}  />
                    </div>
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Appointment Scheduling</h5>
                  </div>
                  <p>
                  Allow customers to schedule appointments, book services, or confirm reservations directly through WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-3">
          <div className="row justify-content-md-center">
            <div className="col-md-10">
              <div className="bluePlan smPlangap px-5 py-5 text-center">
                <h2>Get Started with CTWA</h2>
                <p className="mb-3">
                Convert Your Facebook and Instagram Ad Clicks on WhatsApp Conversation. 
                </p>
                <div class="mt-2"> <a href="https://console.authkey.io/signup" className="btn dark-blur-btn mt-2">
                Sign Up
              </a></div>
          
              </div>
            </div>

          </div>
        </div>
      </section>


      <WhyChooseAuthkey />
      

    </div>
  );
}

export default WhatsappAds;