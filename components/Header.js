"use client";
import React, { useState} from "react";
import { List, Whatsapp } from "react-bootstrap-icons";
import { FaCirclePlus, FaCircleMinus} from "react-icons/fa6";
import Tooltip from "../components/Tooltip";

const Header = () => {
  const [apiOpen, setapi] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [integrationOpen, setIntegrationOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [ResourceOpen, setResource] = useState(false);
  
  // Separate state for each dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);

// Toggle functions for dropdowns
const toggleDropdown = (dropdown) => {
  setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
};

// Check if a dropdown is active
const isDropdownOpen = (dropdown) => activeDropdown === dropdown;

  const toggleApi = () => {
    setapi(!apiOpen);
    setPricingOpen(false);
    setIntegrationOpen(false);
    setMegaMenuOpen(false);
    setResource(false);
  };

  const togglePricing = () => {
    setPricingOpen(!pricingOpen);
    setapi(false);
    setIntegrationOpen(false);
    setMegaMenuOpen(false);
    setResource(false);
  };

  const toggleIntegrations = () => {
    setIntegrationOpen(!integrationOpen);
    setapi(false);
    setPricingOpen(false);
    setMegaMenuOpen(false);
    setResource(false);
  };
  const toggleResource = () => {
    setResource(!ResourceOpen);
    setapi(false);
    setPricingOpen(false);
    setMegaMenuOpen(false);
    setResource(false);
  };

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!megaMenuOpen);
  };




  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      <div className="deals-and-offers headerfixed">
        <p>
          <span className="whatscircle"><Whatsapp size={16} /></span> Get a Free WhatsApp Business Account – Includes Onboarding, API Access & Sandbox. <a
            className="btnlink blinker2"
            href="https://console.authkey.io/signup"
          >
            Apply Now!
          </a>
        </p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light nav_sticky bg-white">
        <div className="container container_mobile">
          <a href="/" className="navbar-brand" aria-label="Authkey">
            <svg width="142.5px" height="30px" viewBox="0 0 923 194" id="navbar-logo" alt="Authkey logo" aria-label="Authkey">
              <g fill="#4d4771">
                <path d="M175.11 0h3.66c9.05 1.02 15.57 10.91 12.48 19.58-16.67 54.58-33.36 109.15-50.07 163.71-1.66 5.99-7.29 10.31-13.45 10.71h-2.11c-6.09-.68-11.65-5.1-13.13-11.13-1.43-4.93.67-9.81 2.06-14.47C130 117.94 145.43 67.47 160.85 17c1.35-4.15 2.12-8.74 5.18-12.07 2.3-2.7 5.68-4.16 9.08-4.93ZM599.77 21.19c4.98-.85 9.95-1.74 14.95-2.55.07 14.06-.01 28.12.04 42.19 9.3-3.31 19.5-4.05 29.19-2.1 7.76 1.62 15.05 6.45 18.57 13.7 4.16 8.17 4.48 17.62 4.49 26.6-.03 14.58 0 29.15-.02 43.72-5-.01-9.99 0-14.98 0-.04-15.25.03-30.5-.03-45.75-.3-6.43-.58-13.28-4-18.94-2.35-3.94-6.75-6.17-11.18-6.77-7.41-.95-14.93.23-22.06 2.27.02 23.06 0 46.12.01 69.19h-14.99c0-40.52-.03-81.04.01-121.56ZM690.77 21.21c4.97-.87 9.94-1.75 14.93-2.58.12 25.08.01 50.15.05 75.23 11.25-11 22.05-22.46 32.32-34.36 5.99 0 11.99 0 17.98-.01-11.21 12.84-23.16 25-34.93 37.32 15.39 12.82 27.99 28.81 38.3 45.91-6 .05-11.99.02-17.98.02-9.48-15.14-21.12-29.29-35.68-39.8-.03 13.27-.01 26.54-.01 39.81h-14.99c-.01-40.51-.03-81.03.01-121.54ZM534.78 36.14c4.95-.8 9.9-1.64 14.83-2.57.32 8.64.05 17.28.14 25.92 10.5.03 20.99 0 31.5.02 0 4.24 0 8.49-.01 12.73-10.49.02-20.99.01-31.49.01.03 14.26-.08 28.52.05 42.78.37 5.51 1.77 12.31 7.43 14.73 7.92 3.03 16.73.91 24.25-2.32 1.02 4.18 1.99 8.37 2.96 12.57-10.15 4.35-21.67 5.79-32.44 3.04-5.72-1.46-10.85-5.32-13.46-10.66-3.95-7.8-3.88-16.83-3.79-25.36.02-23.63-.04-47.26.03-70.89ZM77.3 39.22c3.03-1.56 6.44-2.61 9.88-2.11 6.3.62 11.83 5.67 12.99 11.89 1.42 6.39-2.02 13.35-7.89 16.2-18.6 9.45-37.37 18.59-55.88 28.22 16.28 10.73 33.25 20.37 50.25 29.91 4.51 2.62 9.96 4.64 12.48 9.57 3.79 6.44 1.53 15.43-4.7 19.47-5.01 3.54-11.96 3.33-17.06.09-23.43-13.17-47.07-26.18-68.86-41.99C3.23 107.12.77 100.98 0 95.01V90.2c.59-4.45 1.79-9.01 4.69-12.54 2.31-2.85 5.77-4.34 8.89-6.08C34.65 60.45 56.01 49.9 77.3 39.22ZM210.13 45.24c3.45-7.29 13.17-10.42 20.27-6.62 23.07 11.51 46.22 22.88 68.93 35.1 6.09 2.94 9.03 9.8 9.55 16.24.68 7.58-1.69 16.21-8.42 20.52-22.03 15.94-45.88 29.13-69.57 42.37-5.76 3.5-13.74 2.6-18.46-2.24-4.84-4.67-5.87-12.71-2.17-18.36 2.33-4.11 6.87-5.97 10.78-8.2 17.48-9.71 34.85-19.65 51.56-30.63-18.51-9.63-37.26-18.78-55.87-28.2-7.19-3.4-10.39-12.96-6.6-19.98ZM363.41 60.94c9.78-3.19 20.2-3.95 30.43-3.26 7.23.68 14.69 3.31 19.47 9.03 5.56 6.33 6.52 15.19 6.69 23.27.01 17.07 0 34.14 0 51.21-10.9 1.94-21.95 3.08-33.02 3.26-8.87-.23-18.68-1.57-25.29-8.08-6.23-5.97-7.53-15.3-6.39-23.48 1.07-7.62 6.65-14.09 13.64-17.05 11.42-4.95 24.43-4.71 36.37-1.94-.12-6.31-.14-13.48-4.69-18.42-3.7-4.01-9.4-5.26-14.66-5.02-7.06-.13-14.11.93-20.82 3.11-.54-4.21-1.2-8.42-1.73-12.63m11.56 47.18c-7.73 5.1-5.96 19.27 3.17 21.81 8.72 2.86 18.18 1.76 27.11.65.01-8.2-.02-16.4.02-24.6-5.59-1.9-11.56-1.9-17.39-1.68-4.51.22-9.2 1.09-12.91 3.82ZM777.57 67.62c7.38-7.36 18.11-10.82 28.42-10.12 9.85.14 19.89 4.71 25.27 13.18 6.59 10.19 7.01 22.82 6.73 34.57-18.97 0-37.94-.01-56.9 0 .56 9.65 4.81 20.61 14.67 24.04 11.16 3.77 23.61 2.35 34.45-1.88.73 4.21 1.41 8.42 2.16 12.63-10.14 4.21-21.43 5.35-32.3 4.21-10.59-1.05-21.2-6.18-27.26-15.16-6.41-9.31-8.01-21.09-7.38-32.14.54-10.76 4.45-21.62 12.14-29.33m11.9 7.76c-5.07 4.41-7.24 11.14-8.19 17.59 13.68.06 27.36.02 41.04.02.19-6.91-2.04-14.23-7.4-18.85-7.23-5.88-18.76-5.13-25.45 1.24ZM443.24 59.51c5-.02 10-.01 15.01-.01.02 15.83-.02 31.65.01 47.48.25 5.98 1.12 12.27 4.49 17.37 3.37 4.96 9.67 6.7 15.38 6.81 5.8.02 11.61-.58 17.34-1.47.07-23.4 0-46.79.04-70.19h14.99c0 26.92 0 53.83-.01 80.75-9.37 2.16-18.89 3.95-28.54 4.08-9.7.55-20.39-.53-28.04-7.15-7.69-6.7-10.31-17.32-10.64-27.13-.05-16.85.01-33.69-.03-50.54ZM848.64 59.52c5.43-.04 10.85-.01 16.28-.02 5.81 22.85 13.88 45.1 23.47 66.63 7.91-21.72 13.72-44.14 18.96-66.63h15.59c-5.69 23.45-12.89 46.52-21.38 69.1-3.53 8.92-6.67 18.07-11.63 26.33-3.7 6.49-9 12.38-16.06 15.21-8.74 3.47-18.72 3.24-27.51.04.93-4.08 1.85-8.16 2.76-12.25 6.85 2.74 14.91 3.22 21.6-.24 5.45-2.97 8.55-8.69 11.1-14.11-13.58-26.92-25.63-54.8-33.18-84.06Z" />
              </g>
            </svg>
          </a>

          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav mr-auto">

            <li className="nav-item">
                <a
                  href="/startup-india"
                  className="nav-link freeplannav"
                >
                  <span className="freeone">Free</span>
                  <span className="blinker">Startup</span>
                  <span className="freetwo">Plan</span>
                </a>
              </li>
     

            {/* Mega Menu Item */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="megaMenu"
                role="button"
                onClick={toggleMegaMenu}
                aria-haspopup="true"
                aria-expanded={megaMenuOpen ? "true" : "false"}
              >
                Products 
              </a>
              <div
                className={`dropdown-menu mega-menu ${
                  megaMenuOpen ? "show" : "closeup"
                }`}
                aria-labelledby="megaMenu"
              >
                <div className="row">
                  {/* Column 1 */}
                  <div className="col-md-3 mt-2">
                    <div className="bgdrop1">
                        {/* Header with toggle functionality */}
                        <h6
                          className="dropdown-header py-1 d-flex justify-content-between align-items-center"
                          onClick={() => toggleDropdown("transactional")}
                          style={{ cursor: "pointer" }}
                        >
                          Transactional Messaging <span class="plusicon d-sm-block d-md-none dopen"> {isDropdownOpen("transactional") ? <FaCircleMinus /> : <FaCirclePlus />}</span>
                        </h6>

                        <div className={`deskShow ${isDropdownOpen("transactional") ? "shows" : "hides"}`}>
                            <a
                              className="dropdown-item"
                              href="https://authkey.io/sms-api-service"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              SMS API
                            </a>
                            <a
                              className="dropdown-item"
                              href="https://authkey.io/voice-api-service"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Voice Call API
                            </a>
                            <a
                              className="dropdown-item"
                              href="https://authkey.io/email-api-service"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Email API
                            </a>
                            <a
                              className="dropdown-item"
                              href="https://authkey.io/whatsapp-business-api"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              WhatsApp Business API
                            </a>
                            <a
                              className="dropdown-item"
                              href="https://authkey.io/products/rcs-message"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              RCS Messaging
                            </a>
                          </div>
                    </div>
                    <div className="row bgdrop2 mt-3">
                    <h6
                           className="dropdown-header py-1 d-flex justify-content-between align-items-center"
                           onClick={() => toggleDropdown("marketing")}
                           style={{ cursor: "pointer" }}
                        >
                          Marketing Campaigns <span class="plusicon d-sm-block d-md-none dopen"> {isDropdownOpen("marketing") ?  <FaCircleMinus /> : <FaCirclePlus />}</span>
                        </h6>
                        <div className={`deskShow mbsnew ${isDropdownOpen("marketing") ? "shows" : "hides"}`}>
                          <a className="dropdown-item" href="https://authkey.io/bulk-sms">
                          Bulk SMS 
                          </a>
                          <a className="dropdown-item" href="https://authkey.io/whatsapp-marketing">
                          WhatsApp
                          </a>
                        </div>
                    </div>
                  </div>
                  {/* Column 2 */}
                  <div className="col-md-3 mt-2">
                      <div className="bgdrop3 py-1">
                        <h6 className="dropdown-header mt-2 d-flex justify-content-between align-items-center"
                         onClick={() => toggleDropdown("whatsapp")}
                          style={{ cursor: "pointer" }}>WhatsApp Features <span class="plusicon d-sm-block d-md-none dopen">{isDropdownOpen("whatsapp") ?  <FaCircleMinus /> : <FaCirclePlus />}</span></h6>
                       
                        <div className={`deskShow ${isDropdownOpen("whatsapp") ? "shows" : "hides"}`}>
                          <a className="dropdown-item" href="https://authkey.io/whatsapp-widget">
                          WhatsApp Widget
                          </a>
                          
                          <a className="dropdown-item" href="/">
                          <Tooltip
                              tooltipText="Web page coming soon. Service available"
                              linkText="Sign Up"
                              linkHref="https://console.authkey.io/signup"
                            >
                          WhatsApp Chatbot
                          </Tooltip>
                          </a>
                         
                          <a className="dropdown-item" href="https://authkey.io/click-to-whatsapp">
                          Click-to-WhatsApp-Ads
                          </a>
                          
                          <a className="dropdown-item" href="/">
                          <Tooltip
                              tooltipText="Web page coming soon. Service available"
                              linkText="Sign Up"
                              linkHref="https://console.authkey.io/signup"
                            >Catalog</Tooltip>
                          </a>
     
                          <a className="dropdown-item" href="/">
                          <Tooltip
                              tooltipText="Web page coming soon. Service available"
                              linkText="Sign Up"
                              linkHref="https://console.authkey.io/signup"
                            >
                          WhatsApp Conversation <br/>(Team)
                          </Tooltip>
                          </a>

                          <a className="dropdown-item" href="/">
                          <Tooltip
                              tooltipText="Web page coming soon. Service available"
                              linkText="Sign Up"
                              linkHref="https://console.authkey.io/signup"
                            >
                          Alert and Notifications
                          </Tooltip>
                          </a>
                        
                          <a className="dropdown-item" href="/">
                          <Tooltip
                              tooltipText="Web page coming soon. Service available"
                              linkText="Sign Up"
                              linkHref="https://console.authkey.io/signup"
                            >
                          Flows Builder </Tooltip>
                          </a>
                         
                        </div>
                      </div>
                  </div>
                  {/* Column 3 */}
                  <div className="col-md-3 mt-2">
                    <div className="bgdrop4 py-1">
                      <h6 className="dropdown-header mt-2 d-flex justify-content-between align-items-center"
                           onClick={() => toggleDropdown("authentications")}
                          style={{ cursor: "pointer" }}>Authentications <span class="plusicon d-sm-block d-md-none dopen">{isDropdownOpen("authentications") ?  <FaCircleMinus /> : <FaCirclePlus />}</span></h6>
                            <div className={`deskShow ${isDropdownOpen("authentications") ? "shows" : "hides"}`}>
                              <a className="dropdown-item" href="https://authkey.io/sms-otp">
                              SMS OTP
                              </a>
                             
                              <a className="dropdown-item" href="https://authkey.io/otp-service-provider/voice">
                      
                              Voice OTP
                              </a>

                              <a className="dropdown-item" href="/">
                              <Tooltip
                              tooltipText="Web page coming soon. Service available"
                              linkText="Sign Up"
                              linkHref="https://console.authkey.io/signup"
                            >
                              Email OTP</Tooltip>
                              </a>
                              
                              <a className="dropdown-item" href="/">
                              <Tooltip
                              tooltipText="Web page coming soon. Service available"
                              linkText="Sign Up"
                              linkHref="https://console.authkey.io/signup"
                            >
                              WhatsApp OTP
                              </Tooltip>
                              </a>
                             
                            <a className="dropdown-item" href="https://authkey.io/two-factor-authentication-2fa">
                              Two Factor Authentications
                              </a>
                              <a className="dropdown-item" href="https://authkey.io/flash-call-verification">
                              Flash Call Verification
                              </a>
                              <a className="dropdown-item" href="https://authkey.io/cash-on-delivery-order-verification">
                              Cash on Delivery Verifications
                              </a>
                        </div>
                    </div>
                    <div className="row bgdrop2 mt-3">
                        <h6 className="dropdown-header mt-2 d-flex justify-content-between align-items-center"
                         onClick={() => toggleDropdown("parallel")}
                          style={{ cursor: "pointer" }}>Parallel Channels  <span class="plusicon d-sm-block d-md-none dopen">{isDropdownOpen("parallel") ?<FaCircleMinus /> : <FaCirclePlus />}</span></h6>
                          <div className={`deskShow ${isDropdownOpen("parallel") ? "shows" : "hides"}`}>
                         
                            <a className="dropdown-item" href="/">
                            <Tooltip
                              tooltipText="Web page coming soon. Service available"
                              linkText="Sign Up"
                              linkHref="https://console.authkey.io/signup"
                            >
                            Fallback
                            </Tooltip>
                            </a>
                        </div>
                      </div>
                  </div>
                  {/* Column 3 */}
                  <div className="col-md-3 mt-2">
                  <div className="bgdrop5 py-1">
                    <h6 className="dropdown-header mt-2 d-flex justify-content-between align-items-center"
                          onClick={() => toggleDropdown("industries")}
                          style={{ cursor: "pointer" }}>Industries <span class="plusicon d-sm-block d-md-none dopen">{isDropdownOpen("industries") ? <FaCircleMinus /> : <FaCirclePlus />}</span></h6>
                          <div className={`deskShow ${isDropdownOpen("industries") ? "shows" : "hides"}`}>
                                    <a className="dropdown-item" href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-banking-finance">
                                    Banking & Finance
                                    </a>
                                    <a className="dropdown-item" href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-e-commerce">
                                    E-commerce
                                    </a>
                                    <a className="dropdown-item" href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-education">
                                    Education
                                    </a>
                                    <a className="dropdown-item" href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-healthcare">
                                    Healthcare
                                    </a>
                                    <a className="dropdown-item" href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-logistic">
                                    Logistic
                                    </a>
                                    <a className="dropdown-item" href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-real-estate">
                                    Real-Estate
                                    </a>
                                    <a className="dropdown-item" href="https://authkey.io/whatsapp-business-api/use-case/whatsapp-for-retail-business">
                                    Retail
                                    </a>
                                  
                                    <a className="dropdown-item" href="/">
                                    <Tooltip
                                        tooltipText="Web page coming soon. Service available"
                                        linkText="Sign Up"
                                        linkHref="https://console.authkey.io/signup"
                                      >
                                    Customer Support </Tooltip>
                                    </a>
                            </div>
                      </div>
                  </div>

                </div>
              </div>
            </li>
       
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  onClick={togglePricing} role="button" aria-haspopup="true"
                  aria-expanded={pricingOpen ? "true" : "false"}
                >
                  Pricing
                </a>
                <div
                  className={`dropdown-menu small-menu  ${pricingOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <div className="bgdrop1 mtmbs">
                      <a className="dropdown-item" href="/pricing/sms">
                      SMS  
                      </a>
                      <a className="dropdown-item" href="/pricing/voice">
                      Voice
                      </a>
                    <a className="dropdown-item" href="/whatsapp-business-api/pricing">
                    WhatsApp
                    </a>
                    <a className="dropdown-item" href="/pricing/email">
                    Email
                    </a>
                  </div>
                </div>
            </li>

            
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  onClick={toggleApi} role="button" aria-haspopup="true"
                  aria-expanded={apiOpen ? "true" : "false"}
                >
                 API Docs
                </a>
                <div
                  className={`dropdown-menu small-menu ${apiOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                   <div className="bgdrop2">
                  
                      <a className="dropdown-item" href="https://authkey.io/sample-code-for-sending-sms-in-php">
                      Sample API Codes
                      </a>
                      <a className="dropdown-item" href="https://authkey.io/sms-api-docs">
                      SMS
                      </a>
                      <a className="dropdown-item" href="https://authkey.io/voice-api-docs">
                      Voice
                      </a>
                      <a className="dropdown-item" href="https://authkey.io/email-api-docs">
                      Email
                      </a>
                      <a className="dropdown-item" href="https://authkey.io/whatsapp-api-docs">
                      WhatsApp
                      </a>
                      <a className="dropdown-item" href="https://authkey.io/2fa-api-docs">
                      2FA API
                      </a>
                    </div>
                </div>
              </li>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  onClick={toggleIntegrations} role="button" aria-haspopup="true"
                  aria-expanded={integrationOpen ? "true" : "false"}
                >
                 Integrations
                </a>
                <div
                  className={`dropdown-menu small-menu ${integrationOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <div className="bgdrop3 bgmrnone">
                      <a className="dropdown-item" href="https://authkey.io/integrations/pabbly-connect">
                        Pabbly Connect
                      </a>
                      <a className="dropdown-item" href="/integrations/integrately">
                        Integrately
                      </a>
                      <a className="dropdown-item" href="/integrations/zapier">
                        Zapier
                      </a>
                      <a className="dropdown-item" href="/integrations/kylas">
                        Kylas
                      </a>
                      <a className="dropdown-item" href="/integrations/magento-by-meetanshi">
                        Magento By Meetanshi
                      </a>
                      <a className="dropdown-item" href="/integrations/shopify">
                        Shopify
                      </a>
                  </div>
                </div>
              </li>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  onClick={toggleResource} role="button" aria-haspopup="true"
                  aria-expanded={ResourceOpen ? "true" : "false"}
                >
                Resources
                </a>
                <div
                  className={`dropdown-menu small-menu ${ResourceOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                   <div className="bgdrop4 bgmrnone">
                      <a className="dropdown-item">
                      <Tooltip
                              tooltipText="Web page coming soon. Service available"
                              linkText="Sign Up"
                              linkHref="https://console.authkey.io/signup"
                            >
                      Help Center
                      </Tooltip>
                      </a>
                      <a className="dropdown-item" href="https://authkey.io/blogs">
                      Blogs
                      </a>
                      <a className="dropdown-item" href="https://authkey.io/faq">
                      FAQs
                      </a>
                      <a className="dropdown-item" href="/videos">
                      Videos
                      </a>
                      <a className="dropdown-item" href="/">
                      <Tooltip
                        tooltipText="Web page coming soon. Service available"
                        linkText="Sign Up"
                        linkHref="https://console.authkey.io/signup"
                      >
                      Case Studies
                      </Tooltip>
                      </a>
                      <a className="dropdown-item" href="https://authkey.io/become-an-affiliate-reseller">
                      Become an Affiliate
                      </a>
                      <a className="dropdown-item" href="/">
                      <Tooltip
                        tooltipText="Web page coming soon. Service available"
                        linkText="Sign Up"
                        linkHref="https://console.authkey.io/signup"
                      >
                      Schedule demo
                      </Tooltip>
                      </a>
                    </div>
                </div>
              </li>
            </ul>
          </div>
          <span className="ml-auto mobile-signup">
            <a
              target="_blank"
              href="https://console.authkey.io/login"
              rel="noopener noreferrer"
              className="home-button btn-login d-lg-inline-block"
            >
              Log in
            </a>
            <a
              target="_blank"
              href="https://console.authkey.io/signup"
              rel="noopener noreferrer"
              className="home-button btn-signup btn_hidden d-lg-inline-block"
            >
              <span>Sign up</span>
            </a>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavCollapse}
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <List size={24} />
            </span>
          </button>
        </div>
      </nav>
      <div className="whatsppBusiness">
        <a href="/whatsapp-business-api">
          <img
            alt="logo"
            src="/img/meta-tech-partner.jpg"
            className="whatsapplogo"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;