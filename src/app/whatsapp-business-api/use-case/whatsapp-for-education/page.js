import WhyChooseAuthkey from "../../../../../components/WhyChooseAuthkey";
import {
  HandIndex,
  PersonCheck,
  Whatsapp,
  Star,
  Calendar4,
  EnvelopeAt,
  PlayBtn,
  LayoutTextSidebar,
  Translate,
  Vr,
  FileEarmarkRuled,
  PatchQuestion,
  Calendar3,
} from "react-bootstrap-icons";

export const metadata = {
  title: "WhatsApp for Education, Schools, Colleges| Use case - Authkey.io",
  description:
    "WhatsApp for educational purposes to strengthen the student-teacher bond and facilitate the sharing of notifications, fee information, and more. Integrate WhatsApp API into the school software for the automation of all communication.",
  alternates: {
    canonical:
      "https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-education",
  },
};
const WhatsAppForEducation = () => {
  return (
    <div>
      <section className="hero herocontainer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h1>
               WhatsApp for  <span className="voilet_txtcolor">Education</span>
              </h1>
              <p className="lead">
                Start whatsapp for education to engage student and teacher bond
                to share notifications, fee info, etc. Integrate WhatsApp API in
                School software to automate all messages.{" "}
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 mt-0 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/whatsapp-education.png"
                alt="WhatsApp for Education | Authkey.io"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <h2>WhatsApp Business for Education</h2>
              <div className="border_bar mb-3"></div>
              <p>
                Integrating the WhatsApp Business API into the schools, colleges
                & institutional systems provides added advantages for connecting
                with students. Teachers can now promptly inform students about
                sessions or exams, manage attendance online, and share notes or
                important information via WhatsApp, ensuring connectivity with
                all students.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <div className="mt-2 mb-2 rcsicon">
                <PersonCheck size={24} />
              </div>
              <div className="pb-3">
                <h3 className="titlesm">24x7 facilitates rich Interactions</h3>
              </div>
            </div>
            <div className="col-md-4 text-center border-right-email">
              <div className="mt-2 mb-2 rcsicon">
                <Whatsapp size={24} />
              </div>
              <div className="pb-3">
                <h3 className="titlesm">98% Delivery Rate</h3>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="mt-2 mb-2 rcsicon">
                <HandIndex size={24} />
              </div>
              <div className="pb-3">
                <h3 className="titlesm">80-90% Engagement Rate</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5">
              <h3 className="headingthird">
                Learning <span className="voilet_txtcolor">Experience</span>
              </h3>
              <p>
                WhatsApp has transformed the e-learning experience in real-time
              </p>
              <ul className="whatsappcheck">
                <li>
                  Educational institutions and schools can establish a group for
                  students, Features to share updates and provide information
                  related to courses and syllabus.
                </li>
                <li>
                  Teachers and professors, can receive feedback and queries from
                  students or send course-related updates through WhatsApp.
                </li>
              </ul>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/learning-experience.png"
                alt="Learning Experience | Authkey.io"
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
                src="/img/whatsapp/automated-enrollment.png"
                alt="Automated Enrollment & Attendance Notifications | Authkey.io"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="headingthird">
                Automated Enrollment & Attendance Notifications
              </h3>
              <p>
                Integrating WhatsApp chatbot for education can benefit schools
                and colleges in sending notifications and updates.
              </p>
              <ul className="whatsappcheck">
                <li>
                  Automate with the institutional platform can able to send
                  notifications of enrollment details, attendance updates, and
                  Short attendance alerts.
                </li>
                <li>
                  Schools and colleges can separately send admit cards, exam
                  datasheets, and results via WhatsApp Business API. It Improves
                  student connectivity and keeps them updated.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h3 className="headingthird">Assignment & Instant Q&A Support</h3>
              <p>
                Whatsapp Teaching can give features to schedule and send
                upcoming Assignments.
              </p>
              <ul className="whatsappcheck">
                <li>
                  Teachers now have the convenience of sending assignments and
                  homework via WhatsApp, eliminating potential excuses from
                  students.
                </li>
                <li>
                  Schools and educational institutions can do weekly Q&A
                  sessions on WhatsApp to take all student queries, thereby
                  transforming the learning experience.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid imgfull"
                src="/img/whatsapp/assignment.png"
                alt="Assignment  & Instant Q&A Support | Authkey.io"
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
                src="/img/whatsapp/event-notification.png"
                alt="Event Notifications & Feedback Surveys | Authkey.io"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="headingthird">
                Event Notifications & Feedback Surveys
              </h3>
              <p>
                Institutions and schools can now automate their Event
                notification & feedback surveys and more.
              </p>
              <ul className="whatsappcheck">
                <li>
                  Schools can now automate messages to parents, keeping them
                  informed about their child's attendance at school or college.
                  Additionally, they can send notifications about various events
                  such as parent meetings, functions, and other activities.
                </li>
                <li>
                  Also organising feedback sessions between parents and students
                  enables the educational institution to make service
                  improvements based on valuable input.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center mt-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow pb-3 text-center minheight">
                  <div className="pt-2 pb-2 text-left">
                    <div className="mt-2 rcsicon">
                      <EnvelopeAt size={24} />
                    </div>
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Personalized message</h5>
                  </div>
                  <ul className="text-left mt-2 accordincheck">
                    <li>Enrollment Update</li>
                    <li>Enable feedback</li>
                    <li>Placed useful links</li>
                    <li>Attendance update</li>
                    <li>Event schedule</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow pb-3 text-center minheight">
                  <div className="pt-2 pb-2 text-center">
                    <div className="mt-2 rcsicon">
                      <LayoutTextSidebar size={24} />
                    </div>
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Custom templates</h5>
                  </div>
                  <ul className="text-left mt-2 accordincheck">
                    <li>Marketing Templates</li>
                    <li>Transactional messages</li>
                    <li>OTPs support</li>
                    <li>Promotional Templates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body shadow pb-3 text-center minheight">
                  <div className="pt-2 pb-2 text-center">
                    <div className="mt-2 rcsicon">
                      <PlayBtn size={24} />
                    </div>
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Rich Media Support</h5>
                  </div>
                  <ul className="text-left mt-2 accordincheck">
                    <li>QR Support</li>
                    <li>Image And Video Support</li>
                    <li>Document support</li>
                    <li>Educational Video</li>
                    <li>Virtual classroom</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>Why use WhatsApp for educational purposes?</h2>
              <div className="border_bar mb-4"></div>
              <p>
                WhatsApp Business API integration in education prompts the
                universities/schools to explore additional features, such as
                virtual classroom links, document sharing, and integration with
                other learning management systems.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow pb-3 text-center">
                  <div className="pt-2 pb-2 text-left">
                    <div className="mt-2 rcsicon">
                      <Translate size={24} />
                    </div>
                  </div>
                  <p>Multi-language support </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow pb-3 text-center">
                  <div className="pt-2 pb-2 text-left">
                    <div className="mt-2 rcsicon">
                      <Vr size={24} />
                    </div>
                  </div>
                  <p>Virtual classroom</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow pb-3 text-center">
                  <div className="pt-2 pb-2 text-left">
                    <div className="mt-2 rcsicon">
                      <FileEarmarkRuled size={24} />
                    </div>
                  </div>
                  <p>Attendance report</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow pb-3 text-center">
                  <div className="pt-2 pb-2 text-left">
                    <div className="mt-2 rcsicon">
                      <PatchQuestion size={24} />
                    </div>
                  </div>
                  <p>24/7 Q&A support</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow pb-3 text-center">
                  <div className="pt-2 pb-2 text-left">
                    <div className="mt-2 rcsicon">
                      <Calendar3 size={24} />
                    </div>
                  </div>
                  <p>Event Scheduler</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow pb-3 text-center">
                  <div className="pt-2 pb-2 text-left">
                    <div className="mt-2 rcsicon">
                      <HandIndex size={24} />
                    </div>
                  </div>
                  <p>Enrollment update</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow pb-3 text-center">
                  <div className="pt-2 pb-2 text-left">
                    <div className="mt-2 rcsicon">
                      <Calendar4 size={24} />
                    </div>
                  </div>
                  <p>Exam & Result date update</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow pb-3 text-center">
                  <div className="pt-2 pb-2 text-left">
                    <div className="mt-2 rcsicon">
                      <Star size={24} />
                    </div>
                  </div>
                  <p>Feedback ability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>
                Are you ready to connect to{" "}
                <span className="green-color">WhatsApp</span> for educational
                purposes?
              </h2>
              <div className="mb-4"></div>
              <p>
                Just click to schedule a demo with our technical expert for the
                onboarding and integration of WhatsApp into your platform.
              </p>
              <a href="https://console.authkey.io/signup">
                <button className="button-link mt-3">WhatsApp Pricing </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseAuthkey />
    </div>
  );
};
export default WhatsAppForEducation;
