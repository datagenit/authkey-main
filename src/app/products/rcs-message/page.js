import WhyChooseAuthkey from "../../../../components/WhyChooseAuthkey";
import { MdOutlineStorefront } from "react-icons/md";
import { BsQrCodeScan } from "react-icons/bs";
import {
  QrCode,
  Award,
  MenuButton,
  Bell,
  Images,
  CreditCard,
  Megaphone,
  PersonFillUp,
  BarChart,
} from "react-bootstrap-icons";
import RCSTabComponent from "../../../../components/RCSTabComponent";
import BrandsItem from "../../../../components/BrandsItem";

export const metadata = {
  title: "RCS Business Messaging | Authkey.io",
  description:
    "Send RCS messages on Androids that allow users to send rich, verified messages with features like photos, videos, audio messages, video calls, etc.",
  alternates: {
    canonical: "https://authkey.io/products/rcs-message",
  },
};
const RCSMessage = () => {
  return (
    <div>
      <div className="hero herocontainer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 txtcenter">
              <h1>Use RCS message over conventional SMS</h1>
              <p>
                Enhance the messaging experience by sending rich chats, which go
                beyond traditional SMS. With feature-rich messaging, you can
                send multimedia images, videos, links, and much more.
              </p>
              <a
                href="https://console.authkey.io/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn mt-1">Sign up</button>
              </a>
            </div>
            <div className="col-lg-6 my-4">
              <img
                className="img-fluid imgfull"
                alt="RCS message over conventional SMS | Authkey.io"
                src="/img/products/rcsmessage/rcs-message-vers-convential-sms.webp"
              />
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
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h2 className="mt-4">
                Engage Customers Over RCS Business Messaging
              </h2>
              <p className="my-4">
                RCS, or Rich Communication Service is a new version of messaging
                that follows a new universal standard protocol. These messages
                support the text with multimedia, chat, Read recipient,
                integration API and more. With outstanding performance over
                conventional SMS, it carries a branding impression and
                impressive chat formation. RCS business messaging helps
                customers engage in new better ways.{" "}
              </p>
            </div>
            <div className="col-md-12">
              <div className="row mt-3 mb-5">
                <div className="col-md-4 text-center">
                  <div className="mt-4 mb-4 rcsicon rcsiconBlue">
                    <BarChart size={24} />
                  </div>
                  <div className="pb-3">
                    <p className="mb-0">
                      115% campaign revenue growth
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="mt-4 mb-4 rcsicon rcsiconGreen">
                    <Megaphone size={24} />
                  </div>
                  <div className="pb-3">
                    <p className="mb-0">130% higher CTR </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="mt-4 mb-4 rcsicon rcsiconOrange">
                    <PersonFillUp size={24} />
                  </div>
                  <div className="pb-3">
                    <p className="mb-0">74% Users growth</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 mt-2 text-center">
              <img
                className="img-fluid imgfull"
                alt="RCS message | Authkey.io"
                src="/img/products/rcsmessage/rcs-message.webp"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-last">
              <img
                className="img-fluid imgfull"
                alt="Brand Visibility | Authkey.io"
                src="/img/products/rcsmessage/brand-visibility.webp"
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <h2>
                <span className="orange_txtcolor">Brand</span> Visibility
              </h2>
              <p>
                Send in the SMS inbox with a branded sender ID and logo. Create
                trust and credibility through a verified brand profile. Boost
                the engagement of your marketing campaigns using a rich message
                interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5">
              <h2>
                Send <span className="orange_txtcolor">Multimedia</span> message
              </h2>
              <p>
                Send messages not only with sober text- define your messages as
                attractive as possible with multimedia content, such as
                high-quality images, videos, and audio clips directly into
                messages.
              </p>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <img
                className="img-fluid imgfull"
                alt="multimedia message directly in Inbox | Authkey.io"
                src="/img/products/rcsmessage/multimedia-message.webp"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-last">
              <img
                className="img-fluid imgfull"
                alt="SMPP SMS Gateway work | Authkey.io"
                src="/img/products/rcsmessage/chat-experience.webp"
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <h2>
                Increase <span className="orange_txtcolor">conversions</span>{" "}
                with{" "}
                <span className="voilet_txtcolor">RCS chat experience</span>{" "}
              </h2>
              <p>
                RCS messages are impressive 2-way enabled chat that allow
                multimedia attachments such as images, links, buttons, etc.
              </p>
              <p>
                Elevate e-commerce efforts by providing personalized experiences
                for customer purchase insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-3">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h2>Features & Benefits of RCS Messaging</h2>
              <div className="border_bar mb-4"></div>
            </div>
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 mt-3">
                <table className="featureTable">
                  <tbody>
                    <tr>
                      <td>Personalized Experience and impressive templates</td>
                      <td>2-Way Communication as a chat</td>
                    </tr>
                    <tr>
                      <td>
                        Effective Promotional Campaigns that impress to click
                      </td>
                      <td>
                        Cross-Selling Possibilities for relative products in
                        segment
                      </td>
                    </tr>
                    <tr>
                      <td>
                        In-app Browser for redirect attached links
                        <span className="smtxt">(Eliminates Landing Page)</span>
                      </td>
                      <td>Higher Read Rate & customer Engagement time</td>
                    </tr>
                    <tr>
                      <td>API Based Chatbot Integration</td>
                      <td>Fallback as SMS for urgent situations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 mtt3">
                <img
                  className="img-fluid imgfull"
                  alt="Benefits of RCS Messaging | Authkey.io"
                  src="/img/products/rcsmessage/benefits-rcs-message.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-secondary">
        <div className="container pt-5 pb-5 pmt">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>Why use RCS messaging?</h2>
              <div className="border_bar mb-4"></div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 col-lg-4">
              <div className="gray_box grayheight text-center">
                <div className="mt-4 mb-4 rcsicon rcsiconOrange">
                <BsQrCodeScan size={24} />
                </div>
                <h4 className="mt-2">Rich Media Support</h4>
                <p>
                  RCS messaging to deliver rich media content such as QR codes,
                  attractive images, HD videos, and interactive elements
                  directly to your customers' mobile phones.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="gray_box grayheight text-center">
                <div className="mt-4 mb-4 rcsicon rcsiconBlue">
                  <Award size={24} />
                </div>
                <h4 className="mt-2">Branding Impression</h4>
                <p>
                  RCS messages are more representable because of the display
                  picture and tagline to the profile in the header. It provides
                  business branding, brand awareness, and chat format
                  presentation.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="gray_box grayheight text-center">
                <div className="mt-4 mb-4 rcsicon rcsiconGreen">
                  <MenuButton size={24} />
                </div>
                <h4 className="mt-2">Instant Response</h4>
                <p>
                  Add custom response buttons after your brand marketing message
                  to asist customers to respond instantly or engage more
                  actively in the conversation.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="gray_box grayheight text-center">
                <div className="mt-4 mb-4 rcsicon rcsiconYellow">
                  <Bell size={24} />
                </div>
                <h4 className="mt-2">Detailed Insights</h4>
                <p>
                  Receive instant notifications upon customer message opens and
                  gauge the success of your message marketing campaign by
                  actively tracking customer responses.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <div className="gray_box grayheight">
                <div className="mt-4 mb-4 rcsicon rcsiconViolet">
                <MdOutlineStorefront size={24} />
                </div>
                <h4 className="mt-2">Showcase E-Stores</h4>
                <p>
                  Create a gallery of images and broadcast it to the campaign
                  audience, including clickable CTA links. This allows multiple
                  images, enhancing the customer experience with detailed
                  product information.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <div className="gray_box grayheight">
                <div className="mt-4 mb-4 rcsicon rcsiconBlue">
                  <CreditCard size={24} />
                </div>
                <h4 className="mt-2">Payment Link</h4>
                <p>
                  Makes payments easy on the same message. RCS messages allow
                  the payment links to the same message as WhatsApp did. UPI and
                  e-payment gateways are allowed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pmt pmb pt-5 pb-6 text-center">
          <div className="row d-flex align-items-center">
            <div className="col-md-12 text-center">
              <h2>RCS for every industry</h2>
              <div className="border_bar mb-4"></div>
            </div>
            <div className="col-md-12">
              <RCSTabComponent />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseAuthkey />
    </div>
  );
};

export default RCSMessage;
