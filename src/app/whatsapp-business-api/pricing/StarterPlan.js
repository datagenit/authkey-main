"use client";
import { HiExclamationCircle } from "react-icons/hi";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Tooltip from "../../../../components/Tooltip";

const StarterPlan = () => {

  return (
    <div className="container mt-3 mb-5 justify-content-md-center">
      <div className="row justify-content-md-center">
        <div className="col-md-12">
          <div className="bluePlan smPlangap px-5 py-5">
            <div className="d-flex align-items-center">
              <div className="w-100">
                <div className="txt-lg">WhatsApp API Pricing - Starter Plan</div>
                <div className="mt-3 textBgs">Who Is It For?</div>
              </div>
              <div className="flex-shrink-1 text-center">
                <div className="txt-lgs fw-bold w200">₹ 0  <Tooltip
                  tooltipText="Additional charges apply for conversations."
                  linkText="View Rate Card"
                  linkHref="/rate-whatsapp.xlsx"
                >
                  <HiExclamationCircle size={18} className="ml-3" />
                </Tooltip></div>

              </div>
            </div>
            <div className="mt-1">
              <ul className="list-group bgreenPlan">
                <li className="mx-3 mb-2">
                  <FaCheck /> Test the WhatsApp API in a sandbox environment.
                </li>
                <li className="mx-3 mb-2">
                  <FaCheck /> Launch bulk WhatsApp campaigns with ease.
                </li>
                <li className="mx-3 mb-2">
                  <FaCheck /> Transactional messaging API
                </li>
              </ul>
            </div>
            <div className="mt-3 textBgs">What’s Included?</div>
            <p className="mt-2">Get everything you need to kickstart your WhatsApp journey:</p>
            <ul className="list-group bgreenPlan">
              <li className="mx-3 mb-2">
                <FaCheck /> <b>Free WhatsApp Business Account (WABA)</b> setup—no hidden charges!

              </li>
              <li className="mx-3 mb-2">
                <FaCheck /> Full access to the WhatsApp API.
              </li>
              <li className="mx-3 mb-2">
                <FaCheck /> Seamless integrations for SMS, Voice, and Email.
              </li>
              <li className="mx-3 mb-2">
                <FaCheck /> Third Party Integrations (Shopify, Pabbly, etc)
              </li>
            </ul>
            <p>Start building meaningful connections with your customers today!</p>
            <a href="https://console.authkey.io/signup?utm_source=wt+pricing+page&utm_medium=Startup+Plan2" className="btn btn-primary mt-2"> Try Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterPlan;