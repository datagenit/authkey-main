
import dynamic from "next/dynamic";
import SignupComponent from "../../../components/SignupComponent";
import BrandsItem from "../../../components/BrandsItem";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import {
    CheckCircle,
  } from "react-bootstrap-icons";

const FaqComponents = dynamic(
    () => import("../../../components/FaqComponents"),
    {
      loading: () => <p>Loading...</p>,
    }
  );

const data = {
    rows: [
      {
        title: "What is ILDO SMS?",
        content: `
          <p>The term ILDO refers to a SMS service operator who has been granted a license to provide international long-distance communication. The international SMS to India are transmitted through the ILDO route. A long-distance SMS service provider as Authkey is one that aligns itself with operators in order to provide the magnificent messaging service over long distances.</p>
          <p>Example: If a foreign business is not registered on DLT to send SMS to India. The non registered businesses can use the messaging service through ILDO routes. Authkey is a trusted ILDO SMS service provider. </p>
          
                `,
      },
      {
        title: "Do I need to register on DLT for ILDO SMS?",
        content: `
          No, you don't need DLT registration for sending SMS messages to India via ILDO routes. International businesses that have branches in India need to register on the DLT platform for conventional SMS services. But if the business has no physical possession in India can use the long distance operator routes to send SMS without any registration. DLT restriction doesn't apply to ILDO channels. ILDO routes will use a short code ID for senders who do not have registered headers.
          `,
      },
      {
        title: "Can I send promotional SMS using the ILDO route?",
        content: `
          Yes, you can send promotional SMS via Authkey’s long distance operator routes.
          
                `,
      },
      {
        title: "Can I send transactional SMS using the ILDO route?",
        content: `
          Yes, you can send the transaction SMS via long distance operator routes. You can automate the transactional messaging by integrating Authkey’s robust SMS API.
          
                    `,
      },
      {
        title: "What is the pricing for an ILDO route SMS in India?",
        content: `
          Authkey offers you the guaranteed best in market pricing plans. ILDO SMS pricing is flexible and transparent, with volume based discounts automatically applied as you scale. Message prices are determined by message type, destination, and carrier used. We don't apply any hidden charge  - pay only for what you use. Talk to our experts for best suitable ILDO pricing plans accordingly.
          `,
      },
    ],
  };
  
  export const metadata = {
    title: "ILDO Bulk SMS | Send ILDO SMS - Authkey.io",
    description: "Authkey supports international long distance operator ILDO Bulk SMS gateway service to India. Send international bulk SMS to India on ILDO routes. Signup to start.",
    alternates: {
        canonical: "https://authkey.io/ildo-bulk-sms-india",
    },
};

const DltRegistration = () => {
    return (
        <div>
            <section className="hero homebg">
                <div className="container py-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 order-last">
                        <img src="/img/ildo-hero.png" alt="ilod sms" className="img-fluid mt-5" />
                        </div>
                        <div className="col-md-6">
                        <h1>International Long Distance Operator (ILDO SMS): Send Bulk SMS to India</h1>
                        <h5>
                            Send International SMS messaging to India through ILDO routes. A
                            smooth ILDO messaging platform to engage customers across the
                            globe.
                        </h5>
                        <a href="https://console.authkey.io/signup">
                            <button className=" button-link mt-2">Sign up</button>
                        </a>
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


            <section className="slice slice-lg pt-lg-6 pb-0 ">
                <div className="container">
                <div className="row mb-5">
                    
                    <div className="col-lg-6">
                    <h2 className="mt-4">
                        ILDO SMS  Service
                    </h2>
                    <p className="my-4">
                        International long-distance operator ILDO SMS are telecom
                        messaging licensees that connect Indian and foreign networks.
                        These are the first gateways through which international SMS are
                        routed. These are service providers or operators who have been
                        aligned to enable long-distance communication connection for SMS
                        service.
                    </p>
                    <p>
                        Authkey is an ILDO bulk SMS company that connects
                        foreign-organizations and audiences(india) with direct
                        communication without any stumbling block or delay in messaging.{" "}
                    </p>
                    </div>
                    <div className="col-lg-6">
                        <img alt="ilod" src="/img/ILDO.png" className="img-fluid " />
                    </div>
                </div>
                </div>
            </section>

            <section className="yellowback">
                <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <div className="smscornerbox smscornerheight">
                        <div className="pb-3">
                        <h2>
                            Send ILDO SMS to India
                        </h2>
                        <p className="mb-4">
                            Foreign businesses cannot register as Indian businesses, but
                            can send bulk SMS messages through the ILDO service.
                            Utilizing the Authkey’s ILDO service , which does not
                            require registration, significantly shortens the time to
                            start transmitting messages. This service eliminates DND
                            scrubbing.
                        </p>

                        <p className="">
                            As we move into the digital age, ILDO bulk SMS messaging
                            feature is becoming increasingly important for the
                            international global market. International business
                            relationships are forged through international bulk SMS. It
                            is more economical and faster to send bulk SMS than to send
                            emails or to make phone calls in international business.
                            Communication must be uninterrupted for every company.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section>
                <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <div className="">
                        <div className="pb-3">
                        <h2 className="">
                            ILDO Bulk SMS messaging & DLT Registration
                        </h2>
                        <p className="mb-4">
                            According to Govt regulations by TRAI (Telecom Regulatory
                            Authority of India) mandated senders to register on
                            Distributed Ledger Technology (DLT) to adopt the SMS
                            marketing or send messaging to many recipients. But this DLT
                            restriction is not in action when using the ILDO route
                            channels. As a contrast, a company must register by
                            following a simple step-by-step process, and after
                            registering, an alphabetic sender ID will be provided to the
                            customer. This can then be used to send bulk SMS via
                            international long distance operators throughout the world.
                            Even ifa business(sender) is not fit for DLT registration,
                            it still can reach a huge market audience in India. Via
                            international Long-Distance Operator routes. The senders who
                            don't have a specific sender ID or are unregistered headers
                            will send messages using an anonymous numeric ID through
                            ILDO routes. You can send messages to indian phone numbers
                            over ILDO using dedicated short codes identity. The SMS
                            messages sent via IDLO are charged at specific pricing.{" "}
                        </p>

                        <p>
                            To send messages to Indian recipients, you must register for
                            a sender ID or use ILDO routes. It is possible that the
                            Indian mobile carriers will reject your messages if you do
                            not choose one of these options. Furthermore, we will
                            automatically switch your sending to the ILDO route.New
                            customers who have not registered on DLT can send messages
                            to recipients in India automatically using ILDO routes. SMS
                            senders who don’t register or are not eligible for DLT
                            registration are now able to send SMS messages using the
                            ILDO routes to recipients in India.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="fixbgColor mb-5">
                <div className="container py-5">
                <h2 className="text-center mb-4">ILDO Bulk SMS Service</h2>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-8">
                    <h5 className="mt-4">
                        Sending SMS messages to India can now be delivered at very low
                        costs using Authkey’s international long distance operator ILDO
                        routes. Registration is quick and easy.
                    </h5>

                        <div className="buletpoint mt-3 ml-3">
                            <div className="row">
                            <ul className="freeplan yellowtick">
                                <li>
                                <span>
                                <CheckCircle />
                                </span> Dedicated User account & Panel.
                                </li>
                                <li>
                                <span>
                                <CheckCircle />
                                </span> Promotional and Transactional routes.</li>
                                <li>
                                <span>
                                <CheckCircle />
                                </span>ILDO SMS API integration Support. </li>
                                <li>
                                <span>
                                <CheckCircle />
                                </span> Direct Delivery over 220+ operators.</li>
                                <li>
                                <span>
                                <CheckCircle />
                                </span>Best in market pricing plans.</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    
                    <SignupComponent />
                    </div>
                </div>
                </div>
            </section>

            <FaqComponents data={data} />
            <WhyChooseAuthkey />
        </div>
    );
}

export default DltRegistration;