import dynamic from "next/dynamic";
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import { CheckCircle } from "react-bootstrap-icons";

const FaqComponents = dynamic(
    () => import("../../../components/FaqComponents"),
    {
        loading: () => <p>Loading...</p>,
    }
);

const data = {
    rows: [
        {
            title: "What is the full form of DLT?",
            content: `
          DLT stands for Distributed Ledger Technology.
          
          `,
        },
        {
            title: "What is Distributed Ledger Technology?",
            content: `
          Distributed Ledger Technology (DLT) is a type of blockchain-based database that allows multiple participants to have a copy of the same information( entities, sender ID, and message templates), which is updated in real-time and stored across a network of computers, rather than being stored in a centralized location. Some of the key benefits of DLT include increased transparency, security, and efficiency, as well as the elimination of intermediaries that are typically required in centralized systems.
          `,
        },
        {
            title: "What are DLT regulations to send SMS in india?",
            content: `
          According to <a href="https://authkey.io/blog/new-rules-dlt-trai-send-bulk-sms">TRAI new guidelines</a>, the <a href="https://authkey.io/bulk-sms-service-provider">sending SMS in India</a> required a mandatory DLT registration. Every Business needs to register their entity ID, Sender ID and the content template. This step is taken to suppress the spam content messaging.
          `,
        },
        {
            title: " Can I send Bulk SMS without DLT registration in India?",
            content: `
          No, you cannot send Bulk SMS without DLT registration in India. As per the Telecom Regulatory Authority of India (TRAI) regulations, it is mandatory for all entities sending Bulk SMS to be registered with the telecom regulator and obtain a unique registration ID (URID) for sending SMS. This registration is part of the Distributed Ledger Technology (DLT) process, which is used to verify and authenticate the sender's identity and message content.
          Therefore, it is essential for any entity looking to <a href="https://authkey.io/bulk-sms">send Bulk SMS</a> in India to comply with the <a href="https://authkey.io/faq/71/how-to-register-on-the-dlt-platform">TRAI guidelines and complete the DLT registration process</a>.
          
              `,
        },
        {
            title: "Why is DLT registration required in India for business sms?",
            content: `
          DLT registration is required in India for SMS because of the increasing number of unsolicited and fraudulent messages being sent to consumers. To protect consumers from such messages and to regulate the flow of SMS traffic, the Telecom Regulatory Authority of India (TRAI) introduced the Telecom Commercial Communications Customer Preference Regulations (TCCCPR) in 2018. The TCCCPR regulations mandate that all entities sending commercial SMS must be registered with the telecom regulator and obtain a unique registration ID (URID) for sending SMS.
          `,
        },
        {
            title: "Is DLT registration mandatory?",
            content: `
          Yes, DLT registration is mandatory for entities that wish to send commercial SMS in India. 
          `,
        },
        {
            title: " What are New SMS routes in DLT?",
            content: `
          The DLT platform has introduced several new SMS routes to facilitate the sending of commercial SMS in India. These routes include:
          <ul>
         <li> Transactional Route: This route is used for sending transactional messages such as OTPs, order confirmations, and other messages related to a customer's transaction with a business. These messages are sent 24x7 and are not subject to any time restrictions.</li>
         <li> Promotional Route: This route is used for sending promotional messages to customers, and it is subject to the time restrictions specified by TRAI.</li>
         <li>  Service Implicit Route: This route is used for sending service-related messages to customers, such as bank alerts, credit card statements, and other service-related communications.</li>
         <li> Service Explicit Route: This route is used for sending explicit service-related messages, such as reminders for bill payments and other service-related communications.</li>
          </ul>
          `,
        },
        {
            title: "What is the registration part of DLT?",
            content: `
          The DLT registration consists of different parts. First you need to register for the business principle entity ID. The next step is to register for the Header and content template.
          `,
        },
        {
            title: "What is the fee for DLT registration?",
            content: `Initially when DLT came into the role, it was completely free to register. But now it has a fee of Rs.5000+18% GST. 
          `,
        },
        {
            title: " What are needed documents for DLT registration?",
            content: `
         
          The document required for DLT registration is identity proof, address proof and related business documents.
         <lu> 
           <li>ID: PAN card, Adhar Card</li>
          <li> Address proof: Passport/Voter ID/Driving License, </li>
          <li> Business Document: GST Registration, TAN, Trade License, BusinessPAN Card.  </li>
          <li> Note: Try to submit the government document.  </li>
          </ul>
          `,
        },
        {
            title: "What is Letter of Authorization(LOA) document ?",
            content: `
          Letter of Authorization (LOA) document is a legal document that authorizes a third party to act on behalf of an individual or a company. In the context of telecom services, an LOA document is used by businesses to authorize a telecom service provider to act as their authorized representative for the purpose of obtaining telecom services or making changes to their telecom account.
          
          `,
        },
        {
            title: "Do I need to register on all operators?",
            content: `
          No, You need to register on any one operator. All the DLT operators data is synced with each other. 
          `,
        },
    ],
};

export const metadata = {
    title: "DLT Registration - How to do register DLT on operator? | Authkey.io",
    description: "Learn step by step process to DLT registration. Enroll entity on BSNL, smartping, Jio , Airtel, register header/sender & content template on DLT portal.",
    alternates: {
        canonical: "https://authkey.io/dlt-registration",
    },
};

const DltRegistration = () => {
    return (
        <div>
            <section className="hero homebg">
                <div className="container py-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <h1>DLT Registration </h1>
                            <p>Distributed Ledger Technology (DLT) is a block-chain based registration system. Register your Business Principle Entity ID to send SMS in India.</p>
                            <a href="https://console.authkey.io/signup">
                                <button className="btn mb-5">Get Started </button>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <img src="img/DLT-IMAGE.png" alt="DLT Registration" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-5">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-12 text-center">

                            <h2 className="mb-4"> What is DLT registration? </h2>
                            <p className="mt-2">
                                TRAI DLT registration stands for Telecom Regulatory Authority of India's (TRAI) <strong>Distributed Ledger Technology (DLT)</strong> platform. It is a block-chain based registration system. It is a platform created by TRAI to  <strong>curb spam messages and calls</strong> in the Indian telecom industry. The DLT platform enables businesses and telemarketers to register their phone numbers and SMS templates with the TRAI platform, and provides a mechanism for consumers to select their preferences for receiving commercial communication text messages. DLT platform has been implemented to improve the transparency and accountability of telemarketing communication, and to ensure that consumers have more control over the messages they receive.

                            </p>
                            <p>
                                <a target="_blank" rel="noopener noreferrer" href="https://trai.gov.in/sites/default/files/RegulationUcc19072018.pdf">TRAI (TCCCPR 2018) </a> has made it <strong>mandatory for businesses wishing to send SMS messages</strong> to register their business entity, SMS sender IDs (headers), content templates, and consent templates on designated DLT (Distributed Ledger Technology) platforms such as AirTel, BSNL, Vodafone, Videocon, and Jio TrueConnect. This move by TRAI is aimed at <strong>diminishing unwanted messages, promoting transparency, and ensuring that only legitimate businesses are allowed to send promotional messages.</strong> </p>


                            <p> The registration process on DLT platforms is a simple and straightforward one, which involves providing the necessary details about the business, its SMS sender IDs, content templates, and consent templates. Once registered, businesses can begin sending SMS messages to their customers and prospects. However, it is essential to ensure that the content of the messages is compliant with the regulations set by TRAI.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fixbgColor">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h2 className="mb-4"> How To Do DLT Registration? </h2>

                            <div className="mt-2">
                                <p>
                                    You have the option to register on any of the designated DLT platforms, including Jio, Vodafone, Airtel, BSNL, MTNL, Videocon, and Tata Teleservices. By registering on an operator, you can ensure that your business complies with TRAI's regulations and can avoid penalties for non-compliance.

                                </p>
                            </div>

                            <div className="smscornerbox mb-4">
                                <h3 className="mb-3"> DLT operators in India </h3>
                                <p> <strong>Airtel DLT portal: <a href="https://dltconnect.airtel.in/">https://dltconnect.airtel.in/</a> </strong> </p>
                                <p> <strong> Videocon DLT portal: <a href="https://dltconnect.airtel.in/">https://smartping.live/entity/login</a></strong> </p>
                                <p> <strong> Jio DLT portal:<a href="https://dltconnect.airtel.in/"> https://trueconnect.jio.com/#/</a></strong> </p>
                                <p> <strong>Vodafone DLT portal: <a href="https://dltconnect.airtel.in/">https://www.vilpower.in/</a></strong> </p>
                                <p> <strong> Tata Teleservices DLT portal: <a href="https://dltconnect.airtel.in/">https://telemarketer.tatateleservices.com:8082/#/</a></strong> </p>
                                <p> <strong> MTNL DLT portal: <a href="https://dltconnect.airtel.in/">https://www.ucc-mtnl.in/</a></strong> </p>
                                <p> <strong> BSNL DLT portal: <a href="https://dltconnect.airtel.in/">https://www.ucc-bsnl.co.in/</a></strong> </p>

                            </div>

                            <p>
                                Each above mentioned operator is synchronized with TRAI portal, you have to register on any one of the platforms. </p>

                            <p> These operators are only for DLT registration. You will get the principal entity ID, Sender ID and message template registration. For Bulk SMS service, you will need Authkeys Bulk SMS service portal.

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
                                <h2> DLT Registration Process Steps</h2>
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
                                <h4> #1 Principle Entity Registration </h4>
                                <p>Signup on any one of the DLT operator platforms. This DLT Registration Process includes the submission of business documents like PAN, GST, TIN, address proof, mobile number, etc. The process ensures swift and seamless completion. As a result, your organization will be assigned a Principle Entity ID. You need to keep safe the details on which you have registered for PE ID, email ID and password. </p>

                            </div>


                            <div className="crdbox px-4 mt-5 pb-4">
                                <h4> #2 Header/Sender ID registration</h4>
                                <p> After the successful Principle Entity registration, the next step is to register for the sender ID. SID refers to a unique identifier that is associated as the sender of a message, typically used in the context of communication channel such as SMS. The Sender ID type is categorized based on the Promotional, Transactional, Service Explicit, and Service Implicit. All headers must be registered and each will get a unique sender ID. </p>

                            </div>

                            <div className="crdbox px-4 mt-5 pb-4 mb-5">
                                <h4> #3 Content Template Registration </h4>
                                <p>Sender ID will deliver only the registered message template. Every template must be registered on the blockchain DLT SMS system. A template created by an entity is owned by that entity across all platforms. A unique Template ID is generated for every template and is shared seamlessly across other Blockchain DLT SMS platforms. In every Content Template, there should be a line describing the brand name(s). </p>
                            </div>

                            <div className="crdbox px-4 mt-5 pb-4 mb-5">
                                <h4> #4 DLT Setup On Authkey Portal </h4>
                                <p>Once you get Principle entity ID, Sender ID and registered content Template, you need to submit the details on Authkey’s SMS portal to start the seamless messaging service. </p>

                            </div>


                            <div className="crdbox px-4 mt-5 pb-4 mb-5">
                                <h4>DLT Setup On Authkey‘s Portal:</h4>
                                <ol>
                                    <li>Signup for the new account. </li>
                                    <li>Enter all the parameters  Such as principal entity ID, Sender ID and Template ID. </li>
                                    <li>You are all ready to send SMS.</li>
                                </ol>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mb-4">
                    <div className="violetPlan borderRadius text-center p-5">
                        <h3>Telemarketer Name and ID</h3>
                        <p><b>Telemarketer Name:</b> Datagen internet service private limited</p>
                        <p><b>Telemarketer ID:</b> 110200001253 </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-5">
                    <div className="row mb-5 justify-content-center text-center">
                        <div className="col-lg-10">
                            <h2 className="">
                                How to add DLT Registration details in your Authkey account?
                            </h2>
                            <p><a href="https://authkey.io/faq/74/how-to-setup-dlt-registration-in-authkey-dashboard-to-send-sms" className="btn btn-primary mt-2">Read More</a></p>
                        </div>
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-md-12">
                            <div className="dlt-registration">
                                <div className="pb-2">
                                    <h5>Add Entity ID(registered Principle entity ID) details into your Authkey account</h5>
                                    <p>
                                        Create a new Authkey account by simply clicking on the signup button on the home page. If you have an existing account, you can simply login with your credentials, the following screen will be displayed.
                                    </p>

                                    <div className="mt-4 mb-4">
                                        <img

                                            src="img/dlt/dlt-add-entity-registration.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                    <p>If you have already registered on the DLT platform then follow the steps: </p>
                                    <h5 className="mt-5"> Login into Authkey account.  </h5>
                                    <ul className="freeplan mt-3 mb-3">
                                        <li><span><CheckCircle /></span> Click on the SMS, the dropdown button will appear on the following screen(A).</li>
                                        <li><span><CheckCircle /></span> Click on the DLT Setup, the dropdown will open the DLT setting(B).</li>
                                        <li><span><CheckCircle /></span> Click on the Entity Management (C).</li>
                                    </ul>

                                    <div className="pt-4 pb-2">
                                        <img

                                            src="img/dlt/dlt-registration.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                    <p className="py-4">
                                        As you click on Entity management, another screen will appear where you can add registered Entity ID details. In the new window, fill your registered Entity ID number and Company name in the text fields, then click on Create New Entity.

                                    </p>

                                    <div className="pb-4">
                                        <img

                                            src="img/dlt/DLT-create-new-entity.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                    <h5 className="mt-4">  Where will you find your Entity ID?</h5>
                                    <p>A DLT operator panel will provide you with information about your registered Entity. You can view your Entity details by logging into your DLT panel once you have successfully registered your Entity on the DLT portal.</p>


                                    <h5 className="mt-5">  Find Entity ID in JIO DLT panel </h5>
                                    <p>To view registered Entity details at Jio portal, login to your Jio DLT panel. The Entity ID and company name details will be shown on the top most section in the left of the screen. </p>

                                    <div className="pb-4 mt-4 pb-2">
                                        <img
                                            src="img/dlt/Entity-ID-in-JIO-DLT-panel.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                    <h5 className="mt-4">Find Entity ID in Vodafone DLT panel</h5>
                                    <p>You can view registered entity details by logging into the vodafone DLT portal, then selecting the Account Settings tab, where your Entity Name and Entity ID will be shown. Check the reference below.</p>
                                    <div className="pb-4 pb-2">
                                        <img
                                            src="img/dlt/Entity-ID-in-Vodafone-DLT-panel.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                    <h5 className="mt-4">Find Entity ID in Videocon, Smartping DLT panel</h5>
                                    <p>To view the entity details, Login into the smartping DLT portal. In the home page select the profile tab, where your Entity Name and Entity ID with other details will be shown. Check the reference below.</p>

                                    <div className="pb-4 pb-2">
                                        <img

                                            src="img/dlt/Videocon-Entity.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                    <h5 className="mt-4"><b>Example:</b> Adding details on Authkey account</h5>
                                    <p>you can copy your registered company name and Entity ID from the DLT portal. We suggest you copy the paste rather than typing manually to avoid the mistake. </p>
                                    <p>After copy & paste the both name and entity fields, click on the Create New Entity button. Record inserted Successfully will appear.</p>

                                    <div className="pb-4 pb-2">
                                        <img

                                            src="img/dlt/Add-entity-authkey.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                    <h5 className="mt-4">Sender ID and content Template submission into Authkey account</h5>
                                    <p>

                                        {` After the successful submission of Entity ID, you need to add the Sender ID(approved) and Content Template(approved) into the Authkey account. Click on SMS -> DLT Setup -> Template Management. The new window tab will appear as shown below. `}
                                    </p>

                                    <div className="pb-4 pb-2">
                                        <img

                                            src="img/dlt/sender-ID-template.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                    <p>Here In the Template management you can submit the Sender ID as well as the content template. You will have two options for the submission: Bulk Template Uploads and Manually Add Template.</p>
                                    <p>Bulk Template Uploads option allows you to upload the multiple message template and Sender ID in a single shot. Select Entity ID through the dropdown and upload your CSV file in assigned format.</p>
                                    <p>Check the Sample CSV file: allowed format Download.</p>
                                    <p>You can add your DLT approved Template and Sender ID manually.</p>

                                    <div className="pb-4 pb-2">
                                        <img

                                            src="img/dlt/manually-add-template.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>


                                    <h5 className="mt-4"> Manually Add Template </h5>
                                    <ul className="freeplan mt-3 mb-3">
                                        <li><span><CheckCircle /></span> Select your submitted Principle Entity ID.</li>
                                        <li><span><CheckCircle /></span> Write Registered template ID and name from the DLT portal.</li>
                                        <li><span><CheckCircle /></span> Select content type as Service Implicit or Service explicit.</li>
                                        <li><span><CheckCircle /></span> Write approved Sender ID.</li>
                                        <li><span><CheckCircle /></span> Write (copy-paste) approved Template message from DLT portal. </li>
                                        <li><span><CheckCircle /></span> Check Enable Unicode if your message template is in other languages. Like Hindi, Bangoli, Punjabi  and more. </li>
                                        <li><span><CheckCircle /></span> Click on Add Template. </li>
                                    </ul>
                                    <strong className="mt-4">Note: </strong>
                                    <p>We recommend you to copy and paste the registered template from the DLT portal, instead of writing it manually to avoid the errors.</p>
                                    <p>Write DLT approved sender ID and content template details only. The pending entity and sender ID will not be accepted. If you still submit the pending details, the message will not be delivered. Once all the details got approved on the DLT panel, then only you need to add to the Authkey account.  </p>


                                    <h5 className="mt-4">Where will you find Sender ID in different DLT portals</h5>


                                    <h6 className="mt-4">Find Sender ID in DLT portal </h6>
                                    <p>
                                        Login into your Jio DLT panel and click Header SMS in the Header bar. Click on the Header SMS Details option. If it shows the pending or rejected then wait or make it correct for the approval. Once the Header is approved then you can use it to send SMS. You can click on the Registered with All TSP to check the status. </p>

                                    <div className="pb-4 pb-2">
                                        <img
                                            src="img/dlt/Sender-ID-DLT-portal.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                    <h5 className="mt-4">Find Sender ID in Vodafone, BSNL, MTNL, Airtel DLT portal </h5>
                                    <ul className="freeplan mt-3 mb-3">
                                        <li><span><CheckCircle /></span> Login into the DLT panel.</li>
                                        <li><span><CheckCircle /></span> Click on the Header tab on top.</li>
                                        <li><span><CheckCircle /></span> Select Approved and click the Search button. </li>
                                        <li><span><CheckCircle /></span> Sender ID details will be displayed  with approved status. </li>
                                        <li><span><CheckCircle /></span> Below image shows the process in detail.</li>
                                    </ul>

                                    <div className="pb-4 pb-2">
                                        <img
                                            src="img/dlt/manage-Sender-ID.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                    <h5 className="mt-4">In Smartping panel, click on the Header tab available in left side and it will show you the Header Details.  </h5>

                                    <div className="pb-4 pb-2">
                                        <img
                                            src="img/dlt/sender-ID-Smartping.png"
                                            className="img-fluid imgfullnew"
                                            alt="sms APi Services"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fixbgColor py-5 mb-5">
                <div className="container smscornerbox">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <h2 className="">
                                Explore More
                            </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-12">
                            <div className="">
                                <div className="pb-3">
                                    <div>
                                        <ul className="freeplan">

                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span> <a target="_blank" href="https://authkey.io/blog/airtel-dlt-registration" rel="noopener noreferrer">How to do DLT registration on AirTel?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span> <a target="_blank" href="https://authkey.io/blog/smartping-dlt-registration" rel="noopener noreferrer">How to do DLT registration on Videocon?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span> <a target="_blank" href="https://authkey.io/blog/sms-templates-examples" rel="noopener noreferrer">Sample SMS templates.</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span> <a target="_blank" href="https://authkey.io/faq/73/how-to-register-an-sms-content-template-on-the-dlt-platform" rel="noopener noreferrer">How to register an SMS content template on the DLT Platform?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span> <a target="_blank" href="https://authkey.io/faq/72/how-to-register-sender-id-on-the-dlt-platform" rel="noopener noreferrer">How to register Sender ID on the DLT Platform?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span> <a target="_blank" href="https://authkey.io/faq/71/how-to-register-on-the-dlt-platform" rel="noopener noreferrer">How to register on the DLT Platform?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/70/what-is-principal-entity-id-on-dlt-registration" rel="noopener noreferrer">What is Principal entity ID on DLT registration?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/69/how-can-i-write-an-sms-template-to-get-approval" rel="noopener noreferrer">How can I write an SMS template to get approval?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/68/what-is-an-sms-template" rel="noopener noreferrer">What is an SMS template?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/67/what-are-the-documents-required-for-principal-entity-registration" rel="noopener noreferrer">What are the documents required for Entity registration?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/66/what-is-dlt-registration-sending%20-SMS" rel="noopener noreferrer">What is DLT registration?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/65/what-is-a-sender-id" rel="noopener noreferrer">What is a Sender ID?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/74/how-to-setup-dlt-registration-in-authkey-dashboard-to-send-sms" rel="noopener noreferrer">How to setup DLT registration in Authkey dashboard to send SMS?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/64/what-is-the-syntax-of-a-variable-in-a-sms-content-template" rel="noopener noreferrer">What is the syntax of a variable in a SMS content template?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/63/is-content-template-registration-mandatory-on-dlt-platform" rel="noopener noreferrer">Is Content Template Registration mandatory on DLT platform?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/62/what-is-the-character-limit-of-a-variable-var-in-the-sms-content-template" rel="noopener noreferrer">What is the character limit of a Variable {`#var#`} in the SMS content template?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/61/what-is-the-limit-of-the-number-of-variables-allowed-in-a-content-template" rel="noopener noreferrer">What is the limit of the number of variables allowed in a content template?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/60/does-dlt-require-a-brand-name-inclusion-in-sms-template" rel="noopener noreferrer">Does DLT require a brand name inclusion in SMS Template?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/59/how-many-sender-ids-be-can-used-in-a-single-sms-template" rel="noopener noreferrer">How many sender IDs be can used in a single SMS template?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/56/content-template-is-rejected-with-wrong-content-type-selected" rel="noopener noreferrer">What if my template is rejected with “wrong content type selected”?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/55/content-template-is-rejected-with-brand-name-not-added" rel="noopener noreferrer">What if my Content Template is rejected with “Brand name not added”?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/54/content-template-is-rejected-with-no-header-associated-with-the-brand-name" rel="noopener noreferrer">What if my template is rejected with “No header associated with the brand name”?</a></li>
                                            <li>
                                                <span>
                                                    <CheckCircle />
                                                </span><a target="_blank" href="https://authkey.io/faq/53/content-template-service-explicit-implicit-service" rel="noopener noreferrer">Have been Confused in Content Type as Service Implicit and Service Explicit?</a></li>


                                        </ul>
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

export default DltRegistration;