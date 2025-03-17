"use client";
import React, { useEffect, useState } from "react";
// import Popup from "../components/Popup";
// import Popup from "../UI/Popup/Popup";

const Footer = (props) => {
  const [time, setTime] = useState(false);

  // useEffect(() => {
  //     var Tawk_API = Tawk_API || {},
  //         Tawk_LoadStart = new Date();
  //     (function () {
  //         var s1 = document.createElement("script"),
  //             s0 = document.getElementsByTagName("script")[0];
  //         s1.async = true;
  //         s1.src = "https://embed.tawk.to/5ffc4475a9a34e36b96b2a74/1erommrur";
  //         s1.charset = "UTF-8";
  //         s1.setAttribute("crossorigin", "*");
  //         s0.parentNode.insertBefore(s1, s0);
  //     })();
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 15000);
  }, []);

  return (
    <footer className="position-relative" id="footer-main">
      <div className="footer-dark">
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-4 col-lg-4 mb-lg-0 mbfooter">
                  <h6 className="heading">Resources</h6>
                  <ul className="list-unstyled footerlinks">
                    <li>
                      <a href="/sms-api-docs">SMS API</a>
                    </li>
                    <li>
                      <a href="/voice-api-docs">Voice API</a>
                    </li>
                    <li>
                      <a href="/email-api-docs">Email API</a>
                    </li>
                    <li>
                      <a href="/whatsapp-api-docs">WhatsApp API</a>
                    </li>

                    <li>
                      <a href="/sample-code-for-sending-sms-in-php">
                        Sample Codes
                      </a>
                    </li>
                    <li>
                      <a href="/api-docs">API Docs </a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                    <li>
                      <a href="https://authkey.io/blogs">Blog</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-lg-4 mb-lg-0 mbfooter">
                  <h6 className="heading">Channels</h6>
                  <ul className="list-unstyled footerlinks">
                    <li>
                      <a href="/sms-api-service">SMS</a>
                    </li>
                    <li>
                      <a href="/voice-api-service">Voice</a>
                    </li>
                    <li>
                      <a href="/email-api-service">Email</a>
                    </li>
                    <li>
                      <a href="/products/rcs-message">RCS</a>
                    </li>
                    <li>
                      <a href="/whatsapp-business-api">WhatsApp</a>
                    </li>
                    <li>
                      <a href="/wordpress-plugin-for-sending-sms">
                        Wordpress Plugin
                      </a>
                    </li>
                    <li>
                      <a href="/bulk-sms-service-provider">Bulk SMS</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-lg-4 mb-lg-0 mbfooter">
                  <h6 className="heading">Features</h6>
                  <ul className="list-unstyled footerlinks">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://console.authkey.io/dashboard"
                      >
                        Fallback
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://console.authkey.io/dashboard"
                      >
                        Parallel Sending
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://console.authkey.io/dashboard"
                      >
                        Analytics
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://console.authkey.io/dashboard"
                      >
                        Latency Report
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://console.authkey.io/dashboard"
                      >
                        Webhook
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://console.authkey.io/dashboard"
                      >
                        Email Campaign
                      </a>
                    </li>
                    <li>
                      <a href="/otp-service-provider">OTP Service Provider</a>
                    </li>
                    <li>
                      <a href="/whatsapp-widget">WhatsApp Widget</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-12">
              <svg
                width="142.5px"
                height="30px"
                viewBox="0 0 923 194"
                id="navbar-logo"
                alt="Authkey logo"
              >
                <g fill="#fff">
                  <path d="M175.11 0h3.66c9.05 1.02 15.57 10.91 12.48 19.58-16.67 54.58-33.36 109.15-50.07 163.71-1.66 5.99-7.29 10.31-13.45 10.71h-2.11c-6.09-.68-11.65-5.1-13.13-11.13-1.43-4.93.67-9.81 2.06-14.47C130 117.94 145.43 67.47 160.85 17c1.35-4.15 2.12-8.74 5.18-12.07 2.3-2.7 5.68-4.16 9.08-4.93ZM599.77 21.19c4.98-.85 9.95-1.74 14.95-2.55.07 14.06-.01 28.12.04 42.19 9.3-3.31 19.5-4.05 29.19-2.1 7.76 1.62 15.05 6.45 18.57 13.7 4.16 8.17 4.48 17.62 4.49 26.6-.03 14.58 0 29.15-.02 43.72-5-.01-9.99 0-14.98 0-.04-15.25.03-30.5-.03-45.75-.3-6.43-.58-13.28-4-18.94-2.35-3.94-6.75-6.17-11.18-6.77-7.41-.95-14.93.23-22.06 2.27.02 23.06 0 46.12.01 69.19h-14.99c0-40.52-.03-81.04.01-121.56ZM690.77 21.21c4.97-.87 9.94-1.75 14.93-2.58.12 25.08.01 50.15.05 75.23 11.25-11 22.05-22.46 32.32-34.36 5.99 0 11.99 0 17.98-.01-11.21 12.84-23.16 25-34.93 37.32 15.39 12.82 27.99 28.81 38.3 45.91-6 .05-11.99.02-17.98.02-9.48-15.14-21.12-29.29-35.68-39.8-.03 13.27-.01 26.54-.01 39.81h-14.99c-.01-40.51-.03-81.03.01-121.54ZM534.78 36.14c4.95-.8 9.9-1.64 14.83-2.57.32 8.64.05 17.28.14 25.92 10.5.03 20.99 0 31.5.02 0 4.24 0 8.49-.01 12.73-10.49.02-20.99.01-31.49.01.03 14.26-.08 28.52.05 42.78.37 5.51 1.77 12.31 7.43 14.73 7.92 3.03 16.73.91 24.25-2.32 1.02 4.18 1.99 8.37 2.96 12.57-10.15 4.35-21.67 5.79-32.44 3.04-5.72-1.46-10.85-5.32-13.46-10.66-3.95-7.8-3.88-16.83-3.79-25.36.02-23.63-.04-47.26.03-70.89ZM77.3 39.22c3.03-1.56 6.44-2.61 9.88-2.11 6.3.62 11.83 5.67 12.99 11.89 1.42 6.39-2.02 13.35-7.89 16.2-18.6 9.45-37.37 18.59-55.88 28.22 16.28 10.73 33.25 20.37 50.25 29.91 4.51 2.62 9.96 4.64 12.48 9.57 3.79 6.44 1.53 15.43-4.7 19.47-5.01 3.54-11.96 3.33-17.06.09-23.43-13.17-47.07-26.18-68.86-41.99C3.23 107.12.77 100.98 0 95.01V90.2c.59-4.45 1.79-9.01 4.69-12.54 2.31-2.85 5.77-4.34 8.89-6.08C34.65 60.45 56.01 49.9 77.3 39.22ZM210.13 45.24c3.45-7.29 13.17-10.42 20.27-6.62 23.07 11.51 46.22 22.88 68.93 35.1 6.09 2.94 9.03 9.8 9.55 16.24.68 7.58-1.69 16.21-8.42 20.52-22.03 15.94-45.88 29.13-69.57 42.37-5.76 3.5-13.74 2.6-18.46-2.24-4.84-4.67-5.87-12.71-2.17-18.36 2.33-4.11 6.87-5.97 10.78-8.2 17.48-9.71 34.85-19.65 51.56-30.63-18.51-9.63-37.26-18.78-55.87-28.2-7.19-3.4-10.39-12.96-6.6-19.98ZM363.41 60.94c9.78-3.19 20.2-3.95 30.43-3.26 7.23.68 14.69 3.31 19.47 9.03 5.56 6.33 6.52 15.19 6.69 23.27.01 17.07 0 34.14 0 51.21-10.9 1.94-21.95 3.08-33.02 3.26-8.87-.23-18.68-1.57-25.29-8.08-6.23-5.97-7.53-15.3-6.39-23.48 1.07-7.62 6.65-14.09 13.64-17.05 11.42-4.95 24.43-4.71 36.37-1.94-.12-6.31-.14-13.48-4.69-18.42-3.7-4.01-9.4-5.26-14.66-5.02-7.06-.13-14.11.93-20.82 3.11-.54-4.21-1.2-8.42-1.73-12.63m11.56 47.18c-7.73 5.1-5.96 19.27 3.17 21.81 8.72 2.86 18.18 1.76 27.11.65.01-8.2-.02-16.4.02-24.6-5.59-1.9-11.56-1.9-17.39-1.68-4.51.22-9.2 1.09-12.91 3.82ZM777.57 67.62c7.38-7.36 18.11-10.82 28.42-10.12 9.85.14 19.89 4.71 25.27 13.18 6.59 10.19 7.01 22.82 6.73 34.57-18.97 0-37.94-.01-56.9 0 .56 9.65 4.81 20.61 14.67 24.04 11.16 3.77 23.61 2.35 34.45-1.88.73 4.21 1.41 8.42 2.16 12.63-10.14 4.21-21.43 5.35-32.3 4.21-10.59-1.05-21.2-6.18-27.26-15.16-6.41-9.31-8.01-21.09-7.38-32.14.54-10.76 4.45-21.62 12.14-29.33m11.9 7.76c-5.07 4.41-7.24 11.14-8.19 17.59 13.68.06 27.36.02 41.04.02.19-6.91-2.04-14.23-7.4-18.85-7.23-5.88-18.76-5.13-25.45 1.24ZM443.24 59.51c5-.02 10-.01 15.01-.01.02 15.83-.02 31.65.01 47.48.25 5.98 1.12 12.27 4.49 17.37 3.37 4.96 9.67 6.7 15.38 6.81 5.8.02 11.61-.58 17.34-1.47.07-23.4 0-46.79.04-70.19h14.99c0 26.92 0 53.83-.01 80.75-9.37 2.16-18.89 3.95-28.54 4.08-9.7.55-20.39-.53-28.04-7.15-7.69-6.7-10.31-17.32-10.64-27.13-.05-16.85.01-33.69-.03-50.54ZM848.64 59.52c5.43-.04 10.85-.01 16.28-.02 5.81 22.85 13.88 45.1 23.47 66.63 7.91-21.72 13.72-44.14 18.96-66.63h15.59c-5.69 23.45-12.89 46.52-21.38 69.1-3.53 8.92-6.67 18.07-11.63 26.33-3.7 6.49-9 12.38-16.06 15.21-8.74 3.47-18.72 3.24-27.51.04.93-4.08 1.85-8.16 2.76-12.25 6.85 2.74 14.91 3.22 21.6-.24 5.45-2.97 8.55-8.69 11.1-14.11-13.58-26.92-25.63-54.8-33.18-84.06Z" />
                </g>
              </svg>
              <img
                className="inline-block meta_logo"
                src="/img/meta-partner.png"
                alt="Voice API service | Authkey.io"
              />
              <p className="my-3">
                Authkey has deployed SMS, Email & Voice on Single Platform where
                we can send or convey the desired information via all three
                channels parallelly or use other channels as Fallback.
              </p>
              <div className="last-footer my-3">
                <a className="mr-5" href="/privacy-policy">
                  Privacy Policy
                </a>
                <a href="/term-and-condition">Term and Condition</a>
              </div>
              <ul className="socialIcons">
                <li className="facebook">
                  <a
                    href="https://www.facebook.com/AuthkeyCpaaS"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    Facebook
                  </a>
                </li>

                <li className="instagram" target="_blank">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/authkey.io"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                    Instagram
                  </a>
                </li>

                <li className="linkdin" target="_blank">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/authkey"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="align-items-center justify-content-md-between pb-3 pt-3 bgfoot">
          <div className="col-md-12">
            <div className="copyright text-sm text-center">
              &copy; 2020-2024{" "}
              <a
                href="/"
                className="font-weight-bold"
                rel="noopener noreferrer"
                target="_blank"
              >
                AuthKey.io
              </a>{" "}
              Datagen Internet Services Pvt. Ltd. | All rights reserved
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-img">
        <a href="tel:9899504087" aria-label="Telephone No">
          <div className="click-to-call click-to-call-green">
            <div className="circle"></div>
            <div className="circle-fill"></div>
            <div className="img-circle"></div>
          </div>
        </a>
      </div>
      {/* {time && <Popup sendClosed={getsendData} />} */}
      {/* <Popup /> */}
      <script
        src="https://console.authkey.io/js/main.js"
        id="authkey-chat-widget"
        widget-id="0c470fdf-f59e-47e0-8c82-0d36e19e3a83"
      ></script>
    </footer>
  );
};

export default Footer;
