
import BrandsItem from "../../../components/BrandsItem";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import { BiSupport } from "react-icons/bi";
import { PiSignInDuotone } from "react-icons/pi";
import { PiNumberCircleZeroFill } from "react-icons/pi";
import { BsWindowSidebar } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import { BsCartCheckFill } from "react-icons/bs";
import { PiDownloadDuotone } from "react-icons/pi";
import { MdOutlineChangeCircle } from "react-icons/md";
import { PiTrophyDuotone } from "react-icons/pi";
import { MdOutlineUpcoming } from "react-icons/md";
import {CheckCircle} from "react-bootstrap-icons";
import { PiAppWindowDuotone } from "react-icons/pi";

export const metadata = {
  title: "Affiliate & Reseller Program | Start Earning with Authkey",
  description: "Join Authkey's Affiliate Program for SMS, WhatsApp, Voice, and Email APIs. Earn 5% recurring commissions and scale with white-label solutions.",
  alternates: {
    canonical: "https://authkey.io/become-an affiliate-reseller",
  },
};

const AffilatePartner = () => {

  return (
    <div>
      <div className="hero homebg">
        <div className="container mt-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 text-center order-last mt-4">
              <img
                src="/img/whatsapp/partner-with-authkey.png"
                className="img-fluid"
                alt="Partner with Authkey"
              />
            </div>
            <div className="col-lg-6">
              <h1>Partner with Authkey</h1>
              <h4>Unlock Success Together: Partner Up for All Your Communication Channel Needs</h4>
              <p>Enhance your offerings with the most intelligent communication channel APIs.</p>
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
              <h2>Join the Authkey Affiliate program</h2>
              <div className="violetPlan borderRadius py-4 px-4 mt-4">
              <h3>Build-Sell-Manage-Earn with ease</h3>
              <p className="mt-2">
              With our program, you can seamlessly build your affiliate network, effortlessly sell our cutting-edge communication solutions, efficiently manage your earnings on the Authkey affiliate platform, and ultimately earn good commissions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h3 className="headingthird">
                <div className="rcsicon rcsiconViolet textleft mb-2">
                    <TbApi size={26} />
                </div> Build
              </h3>
              <p>Our platform provides readymade APIs, SDKs, webhooks, and developer documentation, ensuring effortless integration into your systems</p>
              <p>Experience smooth integration and streamline your operations.</p>
            </div>

            <div className="col-lg-6 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/build-services.png"
                alt="Build Services | Authkey.io"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-last">
              <img
                className="img-fluid imgfull"
                src="/img/sell-services.png"
                alt="sales services | Authkey.io"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="headingthird">
                <div className="rcsicon rcsiconGreen mb-2 textleft">
                  <BsCartCheckFill size={26} />
                </div> Sell
              </h3>
              <p>
              We offer Ready-to-use sales services for our exclusive partner.
              </p>
              <p>Access to the best communication channel product via one single partnership.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h3 className="headingthird">
              <div className="rcsicon rcsiconBlue mb-2 textleft">
                <PiDownloadDuotone size={26} />
                </div> Manage
              </h3>
              <p>Authkey offers a comprehensive easy-to-use interface for partners that provides insights and report tools.</p>
              <p>Ready-to-download referral client usage report and payment history.</p>
            </div>

            <div className="col-lg-6 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/manage-services.png"
                alt="Manage Services | Authkey.io"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-last">
              <img
                className="img-fluid imgfull"
                src="/img/earn-services.png"
                alt="Earn Services | Authkey.io"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="headingthird">
              <div className="rcsicon rcsiconYellow mb-2 textleft">
                  <PiTrophyDuotone size={26} />
              </div>
              Earn
              </h3>
              <p>Get a fixed commission on every transaction done by your client.</p>
              <p>Get every month's commission at the end of the month.</p>
            </div>
          </div>
        </div>
      </section>

          <section className="fixbgColor">
              <div className="container py-5">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center">
                      <h2 className="gradient_headline">
                      Why Authkey
                      </h2>
                      <p>
                      Authkey offers communication APIs including SMS API, WhatsApp Business API, Email API, and Voice API, these communication channels are mandatory for businesses of all sizes. In fact, stats show that businesses can generate over 40% of their revenue through strategic marketing and effective use of these channels.
                      </p>
                    </div>
                    <div className="row mt-5 text-center">
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body shadow pb-3 px-3 text-center mpheight">
                          <div className="mt-5 mb-3 rcsicon rcsiconViolet">
                            <PiSignInDuotone size={27} />
                          </div>
                          <h5 className="mb-2">It’s Easy to Start!</h5>
                          <p>Just sign on to Authkey or connect with our support to promote authkey as a leading SMS, Whatsapp, Voice & Email Api provider using blogs, videos, tutorials, or any promotional or social channel and invite contacts using our affiliate URL link</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body shadow pb-4 px-5 text-center mpheight">
                            <div className="mt-5 mb-3 rcsicon rcsiconYellow">
                              <PiNumberCircleZeroFill size={27} />
                            </div>
                            <h5 className="mb-2">Zero Setup Cost </h5>
                            <p>We have a cost setup plan for an affiliate program. Just embed a link into your channel or share it as a referral message. Just connect and start an affiliate account.</p>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body shadow pb-5 px-5 text-center mpheight">
                            <div className="mt-5 mb-3 rcsicon rcsiconGreen">
                              <BsWindowSidebar size={27} />
                          </div>
                          <h5 className="mb-2">Tracking Dashboard</h5>
                          <p>Get a special customized affiliate dashboard to monitor all your referrals and rewards.</p>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body shadow pb-4 px-4 text-center mpheight">
                            <div className="mt-5 mb-3 rcsicon rcsiconBlue">
                            <PiTrophyDuotone size={27} />
                          </div>
                          <h5 className="mb-2">Beneficial Rewards</h5>
                          <p>Earn a competitive 5% recurring commission for every successful referral. With our generous commission structure, your partnership with AuthKey is not just rewarding but also sustainable.
                          </p>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body shadow pb-3 px-2 text-center mpheight">
                            <div className="mt-5 mb-3 rcsicon rcsiconOrange">
                              <MdOutlineChangeCircle size={27} />
                          </div>
                          <h5 className="mb-2">Trusted Partner Ecosystem</h5>
                          <p>Partner with a trusted industry leader with a proven track record of delivering reliable communication solutions. AuthKey robust infrastructure ensures seamless integration and unparalleled performance, giving you and your clients peace of mind.
                          </p>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body shadow pb-3 px-4 text-center mpheight">
                            <div className="mt-5 mb-3 rcsicon rcsiconViolet">
                            <BiSupport size={24} />
                          </div>
                          <h5 className="mb-2">Dedicated Support</h5>
                          <p>Receive personalised support from our team of experts throughout your partnership journey. Whether you need technical assistance, marketing resources, or strategic guidance, we're here to help you succeed.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="container pt-5 pb-5">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6">
                    <h3 className="headingthird">
                    Affiliate Program for?
                    </h3>
                    <p>Affiliate programs come with lots of opportunities for every business looking to expand their reach, increase sales, and maximize their revenue potential.</p>
                    <ul className="freeplan">
                      <li><span><CheckCircle /></span> Digital marketing agencies</li>
                      <li><span><CheckCircle /></span> Social media or YouTube influencers</li>
                      <li><span><CheckCircle /></span> Technology consultants</li>
                      <li><span><CheckCircle /></span> Ecommerce web developers</li>
                      <li><span><CheckCircle /></span> Reseller </li>
                      <li><span><CheckCircle /></span> Startup’s</li>
                    </ul>

                  </div>

                  <div className="col-lg-6 text-center">
                      <img
                            className="img-fluid imgfull"
                            src="/img/affilate-program.png"
                            alt="Affiliate Program | Authkey.io"
                          />
                  </div>
                </div>
              </div>
            </section>


            
          <section>
              <div className="container py-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center">
                      <h2 className="gradient_headline">
                      Authkey Partner Option
                      </h2>
                      <p>
                      Whether you're an agency seeking innovative communication solutions, a developer looking to integrate powerful APIs, a marketplace aiming to enhance user experience, an enterprise in need of reliable communication tools, or a promoter seeking to maximize outreach, AuthKey has the perfect partnership option for you.
                      </p>
                    </div>
                    <div className="row mt-5 text-center">
                      <div className="col-md-4 mb-4">
                          <div className="gray_box text-center heightFull">
                          <div className="mt-2 mb-2 rcsicon rcsiconViolet">
                          <MdOutlineUpcoming size={27} />
                          </div>
                          <h5 className="mb-2">Affiliate Program</h5>
                          <p className="mb-0">Earn a 5% recurring commission for every referral. For the next 12 months of successfully active and purchase of first subscription.</p>
                        </div>
                      </div>
                      <div className="col-md-4 mb-4">
                          <div className="gray_box text-center heightFull">
                            <div className="mt-2 mb-2 rcsicon rcsiconOrange">
                              <PiAppWindowDuotone size={27} />
                            </div>
                            <h5 className="mb-2">Reseller Program</h5>
                            <p className="mb-0">Resell Authkey platform under White Label with custom subdomain and logo.
                            </p>
                        </div>
                      </div>
                      <div className="col-md-4 mb-4">
                          <div className="gray_box text-center heightFull">
                            <div className="mt-2 mb-2 rcsicon rcsiconGreen">
                            <BiSupport size={27} />
                          </div>
                          <h5 className="mb-2">Looking for something else</h5>
                          <p className="mb-0">Connect with our support team for any other queries.</p>
                        </div>
                      </div>
                 
                    </div>
                  </div>
                </div>
              </div>
            </section>

      


      <WhyChooseAuthkey />
    </div>
  );
}
export default AffilatePartner;