import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import {
  People,
  Table,
  TelephoneOutbound,
  ArrowRight,
  ChatText,
  CodeSlash,
  Images,
  HandIndex,
  Calendar2Check,
  Collection,
  PhoneFlip,
  StopCircle,
  PersonVcard,
  PlayBtn,
  Translate,
  FolderCheck,
} from "react-bootstrap-icons";
import { FcAddImage } from "react-icons/fc";
import { TbReport } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
import { MdCampaign } from "react-icons/md";
import dynamic from "next/dynamic";
import BrandsItem from "../../../components/BrandsItem";


const FaqComponents = dynamic(
  () => import("../../../components/FaqComponents"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const data = {
  rows: [
    {
      title: "How does bulk SMS work?",
      content: `Bulk SMS works by using a SMS interface platform or web-based service to send messages to a large number of mobile devices at the same time. Businesses or organizations can upload their contact list, compose their message, and send it to all recipients simultaneously.`,
    },
    {
      title: "What are the benefits of using bulk SMS?",
      content: `Some of the benefits of using bulk SMS include the ability to reach a large audience quickly and easily, cost-effectiveness, high open rates, and the ability to personalize messages for individual recipients.
            `,
    },
    {
      title: " What types of businesses or organizations can use bulk SMS?",
      content: `Any small or large scale business or organization that wants to communicate with a large number of people via text message can use bulk SMS. This includes retail stores, restaurants, schools, non-profit organizations, and more.
                `,
    },
    {
      title: "How can I choose the best bulk SMS provider? ",
      content: `When choosing a bulk SMS provider, consider factors such as pricing, delivery rates, customer support, and user reviews. It's also important to choose a provider that offers a platform that is easy to use and integrates with your existing systems. Authkey is a trusted SMS communication service provider that has served its users for more than a decade. You can use freebie plans as well as can use and check SMS portable with messaging APIs.  `,
    },
    {
      title: "How much does bulk SMS cost? ",
      content: `The cost of bulk SMS varies depending on the number of messages sent, and other factors. There are different plans and pricing respective to the usage. Check out SMS pricing. `,
    },
    {
      title: " How can I measure the success of my bulk SMS campaign?",
      content: `You can measure the success of your bulk SMS campaign by tracking metrics such as open rates, click-through rates, and conversion rates. You can also use tools like Google Analytics to track traffic to your website or landing page from your SMS campaign.`,
    },
    {
      title: "Is DLT registration mandatory for sending bulk SMS in India? ",
      content: `Yes, DLT (Distributed Ledger Technology) registration is mandatory for sending bulk SMS in India.
        In June 2020, the Telecom Regulatory Authority of India (TRAI) mandated that all entities sending commercial SMS messages must register on a DLT platform. The purpose of the DLT platform is to reduce spam and unsolicited commercial messages by verifying the identity of the sender and the content of the messages.
        Entities that send commercial SMS messages in India must register with one of the six authorized DLT operators, verify their identity, and get their content templates approved before sending SMS. Get DLT registration for free.`,
    },
  ],
};

export const metadata = {
  title: "Authkey: Bulk SMS service provider | Bulk SMS Gateway",
  description:
    "Authkey is a bulk sms service provider for sending bulk SMS campaign, instant OTPs, promotional, Transactional messages. A reliable SMS gateway and APIs. Test Free SMS Online.",
  alternates: {
    canonical: "https://authkey.io/bulk-sms-service-provider",
  },
};

const bulkSmsServiceProvider = () => {
  return (
    <div>
      <section className="hero herowhatsapp">
        <div className="container py-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h1>
                <img src="/img/home/sms-icon.webp" alt='SMS' className="iconic" /> Bulk SMS Service Provider
              </h1>
              <p className="lead">
                An enterprise bulk SMS solutions to engage customers to grow
                business sales though send SMS campaign, SMS campaigns, and send
                critical communications such as OTPs alerts.
              </p>

              <div className="mt-2 mb-5">
                <a href="https://console.authkey.io/signup">
                  <button className="btn mt-2">Start your Bulk SMS Campaign in 5 minutes.</button>
                </a>
              </div>
            </div>

            <div className="col-lg-6 mt-0 text-center">
              <img
                className="img-fluid imgfull"
                src="img/bulk-sms-services.png"
                alt="WhatsApp Marketing | Authkey.io"
              />
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
        <div className="container pt-6">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="py-6 pynone px-4 sticky-top">
                <h2>The Most Liked & Advanced bulk SMS Gateway</h2>
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
                <h4><MdCampaign size="30px" /> Easily send powerful bulk SMS campaigns</h4>
                <p>Effortlessly personalize your bulk SMS with names or custom fields, compose in 20+ languages, schedule/stagger your sends, add opt-out path and more. Get best-in-class SMS delivery.</p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><GrLanguage /> 5-minute SMS API integration</h4>
                <p className="mt-2">
                  Automate sending and receiving SMS from any website, CRM, or
                  application. Access SMS APIs with{" "}
                  <a href="https://authkey.io/sms-api-docs">
                    sample codes in 10+ languages including PHP, Java, .NET &
                    more.
                  </a>
                  <a
                    href="https://authkey.io/sms-api-service"
                    className="bg_linktransparent"
                  >
                    SMS API
                  </a>
                </p>
              </div>

              <div className="crdbox px-4 py-4">
                <h4><FcAddImage /> SMS attachments</h4>
                <p>
                  Easily insert images, videos, PDFs, spreadsheets & more as shortlinks in your bulk SMS campaigns and grab your customers’ attention. Convey more in 160 characters.
                </p>
              </div>

              <div className="crdbox px-4 py-4 mb-4">
                <h4><TbReport /> Real-time delivery and click reports</h4>
                <p>
                  Measure campaign outreach and effectiveness with real-time SMS delivery reports, and granular click metrics for all weblinks and attachments sent as Textlocal shortlinks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2>Bulk SMS Service Provider</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-md-4">
              <div className="smscornerbox pb-4 px-4 mb-4 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <Collection size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">Promotional Bulk SMS</h5>
                </div>
                <p className="text-muted mt-2">
                  Online bulk <strong>SMS service to promote</strong> your
                  products and services directly to consumers. Use broadcast
                  SMS to announce new product launches, special offers, and
                  share news about new openings or events.
                </p>
                <a
                  href="https://console.authkey.io/signup"
                  className="btn btn-block btn-sm btn-orange"
                >
                  Promotional SMS
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="smscornerbox pb-4 px-4 mb-4 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <PhoneFlip size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">Transactional Bulk SMS</h5>
                </div>
                <p className="text-muted mt-2">
                  Send <strong>automated transactional SMS</strong> to respond
                  to customer interactions. Send transaction messages and
                  notifications for various events, ensuring timely and
                  informative communication with customers.{" "}
                </p>
                <a
                  href="https://authkey.io/bulk-sms-service-provider/transactional-sms"
                  className="btn btn-block btn-sm btn-orange"
                >
                  Transactional SMS
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="smscornerbox pb-4 px-4 mb-4 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <StopCircle size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">Bulk Voice SMS</h5>
                </div>
                <p className="text-muted mt-2">
                  Voice SMS enables businesses to{" "}
                  <strong>broadcast pre-recorded voice messages</strong> to a
                  broad audience simultaneously. This approach is also
                  commonly referred to as voice broadcasting.
                </p>
                <a
                  href="https://authkey.io/voice-api-service"
                  className="btn btn-block btn-sm btn-orange"
                >
                  Voice Call SMS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bulk-sms-pricing">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <h2> Bulk SMS Service Platform Features</h2>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md-4">
              <div className="gray_box pb-4 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <People size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">Instant Messaging</h5>
                </div>
                <p className="mt-2">
                  Send Bulk SMS Campaign instantly to an individual user or
                  number list (to a group).{" "}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="gray_box pb-4 px-2 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <Calendar2Check size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">Schedule Campaign</h5>
                </div>
                <p className="mt-2">
                  Schedule your promotional SMS campaign to the desired date
                  and time to a particular group or individual.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="gray_box pb-4 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <FolderCheck size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">Pre-approved Templates</h5>
                </div>
                <p className="mt-2">
                  Default available template for promotional, transactional
                  and OTP sending.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="gray_box pb-4 px-5 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <Table size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">Number List Upload</h5>
                </div>
                <p className="mt-2">
                  Start your bulk SMS in one go. Upload the number list direct{" "}
                  <a href="https://authkey.io/blog/excel-to-sms">
                    using the excel sheet
                  </a>{" "}
                  or csv file, if you want to make a group entry or without
                  saving.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="gray_box pb-4 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <PersonVcard size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">Number Book</h5>
                </div>
                <p className="mt-2">
                  Organize your{" "}
                  <strong>
                    phone book and address book in the SMS panel
                  </strong>
                  . You can keep keep different number groups and number list
                  in dashboard for remarketing.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="gray_box pb-4 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <CodeSlash size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">
                    Multi programming languages
                  </h5>
                </div>
                <p className="text-muted mt-2">
                  <strong>Integrate programmable SMS</strong> to automate the
                  send bulk messages through your CRM, application or software
                  in{" "}
                  <strong>php, java, ruby, python, .NET, C# and more.</strong>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="gray_box pb-4 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <PlayBtn size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">Live Reports</h5>
                </div>
                <p className="mt-2">
                  <strong>
                    Instant delivery, latency and failed reports
                  </strong>
                  . You can access all the live reports into your panel using
                  webhooks and reporting API integration.
                </p>
                <a href="https://authkey.io/faq/88/is-it-possible-to-track-the-delivery-status-of-sms-messages-sent-with-an-sms-api">
                  Delivery status of SMS messages sent
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="gray_box pb-4 px-5 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <TelephoneOutbound size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">DLT registration support</h5>
                </div>
                <p className="mt-2">
                  DLT and template registration support via a specific team
                  having 15+ years of experience in message template design
                  and SMS marketing.
                </p>
                <a href="https://authkey.io/dlt-registration">
                  Apply DLT Registration
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="gray_box pb-4 px-5 text-center">
                <div className="pt-2 pb-2 text-center">
                  <div className="mt-2 rcsicon">
                    <Translate size={24} />
                  </div>
                </div>
                <div className="tableblock">
                  <h5 className="h4 lh-130 mb-3">
                    SMS in Regional Launguage
                  </h5>
                </div>
                <p className="mt-2">
                  Send your message into your{" "}
                  <strong>belonging local language</strong> (i.e. Unicode
                  SMS). You can use Hindi, English, Bengali, or any regional
                  language you want to use.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="yellowback mb-5">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <div className="smscornerbox smscornerheight">
                <h2>
                  Experience our free bulk SMS service
                  by signing up today!
                </h2>
                <div className="mb-4"></div>
                <p>
                  Try our SMS platform for sending Bulk SMS, promotional, OTP, &
                  Send SMS via API.
                </p>
                <p>
                  Test our bulk SMS service and receive a free credit.
                </p>
                <a href="https://console.authkey.io/signup">
                  <button className="button-link mt-3">Sign up</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <FaqComponents data={data} />


      <WhyChooseAuthkey />
    </div>
  );
};

export default bulkSmsServiceProvider;
