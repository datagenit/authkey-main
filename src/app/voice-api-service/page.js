
import WhyChooseAuthkey from "../../../components/WhyChooseAuthkey";
import VoiceSampleCode from "../../../components/VoiceSampleCode";
import {
  ArrowDown,
  Megaphone,
  Mic,
  People,
  PhoneVibrate,
  Shuffle,
  TelephoneInbound,
  TelephoneOutbound,
} from "react-bootstrap-icons";
import BrandsItem from "../../../components/BrandsItem";

export const metadata = {
  title: "  Voice API | Voice API solution For Sending OTPs & Transfer Traffic | Authkey",
  description: "Authkey’s Voice API helps you lead the conversation. Application friendly API code to trigger voice call for OTP, notifications, 2FA, etc",
  alternates: {
    canonical: "https://authkey.io/voice-api-service",
  },
};
const VoiceApi = () => {
  return (
    <div>
      <section className="hero homebg">
        <div className="container pt-3 pb-4">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h1><img src='/img/home/voice-icon.webp' alt='Voice' className="iconic" /> Voice API</h1>
              <p>Give Voice to your communication </p>
              <a href="https://console.authkey.io/signup">
                <button className="btn mt-3">Sign up</button>
              </a>
            </div>
            <div className="col-lg-5 offset-lg-1 mt-2">
              <img
                className="img-fluid imgfull"
                src="img/voice/voice-api.png"
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
              <h4 className="text-center">Trusted By Brands</h4>
              <BrandsItem />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-5">
              <div className="sms-api">
                <h2>Quality Voice API</h2>
                <p>
                  Voice API built and known for superior voice quality at high
                  volumes and timely delivery.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="buletpoint">
                <div className="row">
                  <div className="col-md-6">
                    <strong> TTS API </strong>
                  </div>

                  <div className="col-md-6">
                    <strong> Live Report Call Patching </strong>
                  </div>

                  <div className="col-md-6">
                    <strong> Keypress to get input </strong>
                  </div>

                  <div className="col-md-6">
                    <strong> Click to Call </strong>
                  </div>

                  <div className="col-md-6">
                    <strong> Call Masking </strong>
                  </div>
                  <div className="col-md-6">
                    <strong> Virtual Number Selection </strong>
                  </div>
                  <div className="col-md-6">
                    <strong> Retry for unanswered calls </strong>
                  </div>

                  <div className="col-md-6">
                    <strong> Voice Broadcast </strong>
                  </div>
                  <div className="col-md-6">
                    <strong> Webhook API </strong>
                  </div>
                  <div className="col-md-6">
                    <strong> Flashcall Verification. </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="">Authkey's Voice Call Benefits</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow shadowsins pb-2 px-2 text-center">
                  <div className="pt-2 pb-2 text-center">
                    <div className="mt-2 rcsicon rcsiconGreen">
                      <People size={24} />
                    </div>
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Reach & Engage</h5>
                  </div>
                  <p className="mt-2">
                    Reach your customers. Get their feedback with keypress and
                    build good customer relationships .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow shadowsins pb-2 px-2 text-center">
                  <div className="pt-2 pb-2 text-center">
                    <div className="mt-2 rcsicon rcsiconYellow">
                      <TelephoneOutbound size={24} />
                    </div>
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Avoid spam </h5>
                  </div>
                  <p className="mt-2">
                    Bypass Truecaller spamming with a fixed caller ID, dedicated
                    and assigned exclusively to your entity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow shadowsins pb-2 px-2 text-center">
                  <div className="pt-2 pb-2 text-center">
                    <div className="mt-2 rcsicon rcsiconBlue">
                      <PhoneVibrate size={24} />
                    </div>
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Flash call verification</h5>
                  </div>
                  <p className="mt-2">
                    Verify your App users through our Flash call verification
                    API and comparatively save a little money.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body shadow shadowsins pb-2 px-2 text-center">
                  <div className="pt-2 pb-2 text-center">
                    <div className="mt-2 rcsicon rcsiconOrange">
                      <Shuffle size={24} />
                    </div>
                  </div>
                  <div className="tableblock">
                    <h5 className="h4 lh-130 mb-3">Call Masking</h5>
                  </div>
                  <p className="mt-2">
                    Take care of your customers' privacy by not revealing their
                    number to your representative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section  className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h2>Start calling in minutes</h2>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 text-center">
              <div className="smscornerbox heightFull">
                <div className="mb-2 rcsicon rcsiconOrange">
                  <Megaphone size={24} />
                </div>
                <div className="pb-3">
                  <h3 className="titlesm">Text-to-Speech</h3>
                  <p className="mb-0 mt-2">
                    Send Personalised Calls, Payment Reminders, Notifications and
                    other messages with our seamless Text-to-Speech API.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="smscornerbox heightFull">
                <div className="mb-2 rcsicon rcsiconBlue">
                  <TelephoneInbound size={24} />
                </div>
                <div className="pb-3">
                  <h3 className="titlesm">Call patching</h3>
                  <p className="mb-0 mt-2">
                    Connect your customer after an automated Feedback or Sales
                    call to the right department with just a keypress or by
                    putting the customer on hold for a few seconds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="smscornerbox heightFull">
              <div className="mb-2 rcsicon rcsiconGreen">
                <Mic size={24} />
              </div>
              <div className="pb-3">
                <h3 className="titlesm">Voice API</h3>
                <p className="mb-0 mt-2">
                  Simple API built for sending Bulk Voice Calls, OTPs, Timely
                  Reminders or any other medium you wish to deploy to be
                  connected with your customers via voice.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div class="container py-5">
        <div class="row justify-content-center text-center">
          <div class="col-lg-10">
            <div class="transition-shadow whatsappSpace pt-5 pb-5">
            <p class="lead m-0">DEVELOPER GUIDE </p>
              <h2> Get Started With Voice API</h2>
              <div>
                <p>
                  Access Authkey building blocks and start using voice call to
                  add value to your communication.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-2 pb-5">
          <div className="row justify-content-center text-center">
            <div className="text-center mb-3">
              <h2 className="text-center"> Sample Code </h2>
              <h2 className="">
                <ArrowDown />
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <VoiceSampleCode />
            </div>
          </div>
        </div>

      </section>

      <section className="fixbgColor">
        <div className="container pt-5 pb-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h2>
                Test Drive Our SMS API Now!
              </h2>
              <p className="my-4">
                Experience The Speed and Simplicity of Embedded Communications.{" "}
              </p>
              <a href="https://console.authkey.io/signup">
                {" "}
                <button className=" button-link mt-2">Sign up</button>{" "}
              </a>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <img alt="Send messaging" src="img/about.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseAuthkey />

    </div>
  );
}

export default VoiceApi;