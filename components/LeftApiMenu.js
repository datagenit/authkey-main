"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { ArrowDownCircleFill, ArrowRightCircle } from "react-bootstrap-icons";

const LeftApiMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null); // State to track active menu item
  const pathname = usePathname(); // Get the current path

  const handleToggle = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // Toggle active menu state
  };

  const isActive = (href) => pathname === href;

  return (
    <ul className="sample-code-api new_samplecode">
      <div className="accordion" id="accordionExample">
        {/* SMS API Section */}
        <div className="smaplecode">
          <li className="samplecode_list">
            <a onClick={() => handleToggle("/sms-api-docs")}>
              SMS API
              {activeMenu === "/sms-api-docs" ? <ArrowDownCircleFill /> : <ArrowRightCircle />}
              <div
                id="SMSAPIS"
                className={`accordin accordion-button ${activeMenu === "/sms-api-docs" ? "activate" : ""}`}
              >
                &nbsp;
              </div>
            </a>
          </li>

          {/* Nested menu items */}
          {activeMenu === "/sms-api-docs" && (
            <div className="subNavLink">
              <ul>
                <li>
                  <Link href="/sms-api-docs#sms_api_baseurl" legacyBehavior>
                    <a className={isActive("/sms-api-docs#sms_api_baseurl") ? "activate" : ""}>
                      Base SMS API URL
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/sms-api-docs#get_sms_api" legacyBehavior>
                    <a className={isActive("/sms-api-docs#get_sms_api") ? "activate" : ""}>
                      GET SMS API
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/sms-api-docs#post_sms_api" legacyBehavior>
                    <a className={isActive("/sms-api-docs#post_sms_api") ? "activate" : ""}>
                      Post SMS API
                    </a>
                  </Link>
                </li>
                <ul className="listonebg">
                  <li>
                    <Link href="/sms-api-docs#post_sendsms_sid" legacyBehavior>
                      <a className={isActive("/sms-api-docs#post_sendsms_sid") ? "activate" : ""}>
                        POST sendSMS-SID
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sms-api-docs#post_sendsms_sms" legacyBehavior>
                      <a className={isActive("/sms-api-docs#post_sendsms_sms") ? "activate" : ""}>
                        POST sendSMS-SMS
                      </a>
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          )}
        </div>

        {/* 2FA API Section */}
        <div className="smaplecode">
          <li className="samplecode_list">
            <a onClick={() => handleToggle("/2fa-api-docs")}>
              2FA API
              {activeMenu === "/2fa-api-docs" ? <ArrowDownCircleFill /> : <ArrowRightCircle />}
              <div
                id="twofactAuth"
                className={`accordin accordion-button ${activeMenu === "/2fa-api-docs" ? "activate" : ""}`}
              >
                &nbsp;
              </div>
            </a>
          </li>

          {/* Nested menu items */}
          {activeMenu === "/2fa-api-docs" && (
            <div className="subNavLink">
              <li>
                <Link href="/2fa-api-docs#messaging_api_sending_otp" legacyBehavior>
                  <a className={isActive("/2fa-api-docs#messaging_api_sending_otp") ? "activate" : ""}>
                    Messaging API: Sending OTP
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/2fa-api-docs#otp_response_logid_verification" legacyBehavior>
                  <a className={isActive("/2fa-api-docs#otp_response_logid_verification") ? "activate" : ""}>
                    OTP & response LogID API
                  </a>
                </Link>
              </li>
            </div>
          )}
        </div>

        {/* Additional menu items */}
        <div className="smaplecode">
          <li>
            <Link href="/email-api-docs" legacyBehavior>
              <a className={isActive("/email-api-docs") ? "activate" : ""}>Email API</a>
            </Link>
          </li>
        </div>
        <div className="smaplecode">
          <li>
            <Link href="/voice-api-docs" legacyBehavior>
              <a className={isActive("/voice-api-docs") ? "activate" : ""}>Voice API</a>
            </Link>
          </li>
        </div>
        <div className="smaplecode">
          <li>
            <Link href="/whatsapp-api-docs" legacyBehavior>
              <a className={isActive("/whatsapp-api-docs") ? "activate" : ""}>WhatsApp API</a>
            </Link>
          </li>
        </div>
      </div>
    </ul>
  );
};

export default LeftApiMenu;