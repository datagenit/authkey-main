export const metadata = {
  title: "API Docs for Sending SMS | Voice | Email - Authkey.io",
  description:
    "API Docs For Integrating Mutli channel Communication APIs. API documentation for developers. Single API for Sending SMS, voice and email",
  alternates: {
    canonical: "https://authkey.io/api-docs",
  },
};
const ApiDocs = () => {
  return (
    <div>
      <div className="hero homebg pb-5">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1>
                API Documentation for Sending <br />
                SMS , Voice, Email and WhatsApp
              </h1>
              <p className="mt-2">
                Welcome to Authkey! Get familiar with our product and explore
                its features.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-section-secondary">
        <div className="container pt-4 pb-4">
          <div className="row row-grid">
            <div className="col-lg-12  api-doc bg-white p-3 mb-0 text-left">
              <div className="row mb-5 justify-content-center">
                <div className="col-md-10 text-center">
                  <h2> Channels supported by Authkey</h2>
                  <p>
                    Authkey APIs are fast, AI-Driven and supports message
                    deliveries through multiple channels in the same request.
                    You can choose multiple channel deliveries in parallel or
                    fallback as per your requirement. You also have options to
                    create templates with dynamic contents and also club
                    multiple templates into events to be triggered via a single
                    API request.
                  </p>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-sm-3">
                  <div className="card rounded-lg channelsms mb-sm-0">
                    <div className="p-4 text-center">
                      <img
                        src="/img/home/sms-icon.webp"
                        alt="SMS"
                        className="iconic"
                      />
                      <h3 className="mb-3">SMS</h3>
                      <p className=" mt-2 mb-0">
                        Transactional SMS can be triggered either by directly
                        passing the sms message in the API request or you can
                        also create a template with dynamic values and use the
                        template identifier in the API request.
                      </p>
                      <a
                        href="/sms-api-docs"
                        className="btn btn-sm btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="card rounded-lg channelvoice mb-sm-0">
                    <div className="p-4 text-center">
                      <img
                        src="/img/home/voice-icon.webp"
                        alt="Voice"
                        className="iconic"
                      />
                      <h3 className="mb-3"> Voice </h3>
                      <p className=" mt-2 mb-0">
                        Voice call can be placed from Authkey by passing the
                        voice message in text in the API request. The platform
                        will auto-convert the text into audio and place the
                        call. You can also create voice template and use it in
                        the API.
                      </p>
                      <a
                        href="/voice-api-docs"
                        className="btn btn-sm btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="card rounded-lg channelemail mb-sm-0">
                    <div className="p-4 text-center">
                      <img
                        src="/img/home/email-icon.webp"
                        alt="Email"
                        className="iconic"
                      />
                      <h3 className="mb-3">Email</h3>
                      <p className=" mt-2 mb-0">
                        Create Email templates on Authkey and use the created
                        template id in the API request to send email. Authkey
                        uses AWS SES to send emails, so you need to have an
                        account in AWS to use this feature.
                      </p>
                      <a
                        href="/email-api-docs"
                        className="btn btn-sm btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="card rounded-lg channelwhatsapp mb-sm-0">
                    <div className="p-4 text-center">
                      <img
                        src="/img/home/whatsapp-icon.webp"
                        alt="Voice"
                        className="iconic"
                      />
                      <h3 className="mb-3">WhatsApp</h3>
                      <p className=" mt-2 mb-0">
                        Whatsapp API is a communication connection to enable a
                        marketing lineup to customers or prospects. Whatsapp
                        business web was launched in Aug '18 for marketers to
                        scale their engagements.
                      </p>
                      <a
                        href="/whatsapp-api-docs"
                        className="btn btn-sm btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-4 justify-content-center">
            <div className="col-md-8 text-center">
              <h2> Designed for developers </h2>
              <p>
                Streamline your WhatsApp communication with the fastest, most
                effective API platform
              </p>
            </div>
          </div>

          <div className="row d-flex align-items-center mt-4 mb-5">
            <div className="col-lg-5">
              <h4>APIs Sample Code</h4>
              <p>
                Our REST API allows you to quickly build, scale, and integrate.
                You can create rapid prototypes in our WhatsApp, utilize its
                full features, and drive engagement with a single API.
              </p>
              <div className="api-buttons">
                <a
                  className="btn dark-blur-btn"
                  href="/sample-code-for-sending-sms-in-php"
                >
                  See Sample Code{" "}
                </a>
                <a
                  className="btn outline-btn"
                  href="https://console.authkey.io/signup"
                >
                  Try for free
                </a>
              </div>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-6">
              <code>
                <button className="copy-clip">Copy</button>
                <pre style={{ color: "#fff" }}>
                  {`
<?php
$sender ='XXXX';
$mobile ='XXXXX';
$authkey='Your auth key';
$sms = urlencode("test"); 
$country_code=91;
$template_id='xxxxxxx';
$pe_id='xxxxxxx';
$url = 'https://api.authkey.io/request?authkey='.$authkey.'&mobile='.$mob.'&sender='.$sender.'&sms='.$sms.'&pe_id='.$pe_id.'&template_id='.$template_id;  // API URL

$response=SendSMS($url);  // call function that return response with code
echo $response;
function SendSMS($hostUrl){
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $hostUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_POST, 0);
$result = curl_exec($ch);
return $result;
} 
?> `}
                </pre>
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocs;
