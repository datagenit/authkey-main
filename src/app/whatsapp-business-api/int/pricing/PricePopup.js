"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons";

const PricePopup = () => {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("India");
  const [currency, setCurrency] = useState("INR");
  const [marketingmsg, setMarketingMsg] = useState("");
  const [utilitymsg, setUtilityMsg] = useState("");
  const [authenticationmsg, setAuthenticationMsg] = useState("");
  const [servicemsg, setServiceMsg] = useState("");
  const [plan, setPlan] = useState("0");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event, setter) => {
    let newValue = event.target.value;
    const maxValue = 3000000; // Maximum value allowed
    // Ensure that the value is updated only if it's a valid number or not empty
    if (
      (!isNaN(parseFloat(newValue)) && parseFloat(newValue) <= maxValue) ||
      newValue === ""
    ) {
      setter(newValue === "" ? "" : parseFloat(newValue));
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
  };

  // Function to calculate total plan cost
  const calculateTotalPlan = () => {
    let totalPlanCost = 0;

    if (plan === "0") {
      totalPlanCost = currency === "INR" ? 0 : 0;
    } else if (plan === "10") {
      totalPlanCost = currency === "INR" ? 983 : 10;
    } else if (plan === "99") {
      totalPlanCost = currency === "INR" ? 9732 : 99;
    } else if (plan === "299") {
      totalPlanCost = currency === "INR" ? 29392 : 299;
    } else if (plan === "499") {
      totalPlanCost = currency === "INR" ? 49052 : 499;
    } else if (plan === "999") {
      totalPlanCost = currency === "INR" ? 98204 : 999;
    }
    return totalPlanCost;
  };

  // Function to calculate total API cost
  const calculateTotalCost = () => {
    // Initialize variables to hold the cost for each message type
    let marketingCost = "";
    let utilityCost = "";
    let authenticationCost = "";
    let serviceCost = "";
    // Pricing logic based on country and currency
    if (country === "Argentina") {
      marketingCost = roundToTwoDecimal(
        currency === "INR"
          ? 4.5293 * parseInt(marketingmsg)
          : 0.0618 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "INR"
          ? 2.4918 * parseInt(utilitymsg)
          : 0.034 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "INR"
          ? 2.6888 * parseInt(authenticationmsg)
          : 0.0367 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "INR"
          ? 2.313 * parseInt(servicemsg)
          : 0.0316 * parseInt(servicemsg)
      );
    } else if (country === "Brazil") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0625 * parseInt(marketingmsg)
          : 4.5808 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.008 * parseInt(utilitymsg)
          : 0.5863 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0315 * parseInt(authenticationmsg)
          : 2.3087 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.03 * parseInt(servicemsg)
          : 2.1987 * parseInt(servicemsg)
      );
    } else if (country === "Chile") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0889 * parseInt(marketingmsg)
          : 6.5135 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.02 * parseInt(utilitymsg)
          : 1.4654 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0527 * parseInt(authenticationmsg)
          : 3.8642 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0454 * parseInt(servicemsg)
          : 3.3279 * parseInt(servicemsg)
      );
    } else if (country === "Colombia") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0125 * parseInt(marketingmsg)
          : 0.9161 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0002 * parseInt(utilitymsg)
          : 0.0147 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0077 * parseInt(authenticationmsg)
          : 0.5607 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.006 * parseInt(servicemsg)
          : 0.4397 * parseInt(servicemsg)
      );
    } else if (country === "Egypt") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.1073 * parseInt(marketingmsg)
          : 7.8651 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0052 * parseInt(utilitymsg)
          : 0.3812 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0618 * parseInt(authenticationmsg)
          : 4.5321 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0644 * parseInt(servicemsg)
          : 4.7191 * parseInt(servicemsg)
      );
    } else if (country === "France") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.1432 * parseInt(marketingmsg)
          : 10.4984 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.03 * parseInt(utilitymsg)
          : 2.1994 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0691 * parseInt(authenticationmsg)
          : 5.0674 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0859 * parseInt(servicemsg)
          : 6.299 * parseInt(servicemsg)
      );
    } else if (country === "Germany") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.1365 * parseInt(marketingmsg)
          : 10.0073 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.055 * parseInt(utilitymsg)
          : 4.0322 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0768 * parseInt(authenticationmsg)
          : 5.6308 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0819 * parseInt(servicemsg)
          : 6.0044 * parseInt(servicemsg)
      );
    } else if (country === "India") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0099 * parseInt(marketingmsg)
          : 0.7265 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0014 * parseInt(utilitymsg)
          : 0.115 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0014 * parseInt(authenticationmsg)
          : 0.115 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.004 * parseInt(servicemsg)
          : 0.2906 * parseInt(servicemsg)
      );
    } else if (country === "Indonesia") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0411 * parseInt(marketingmsg)
          : 3.0111 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.02 * parseInt(utilitymsg)
          : 1.4653 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.03 * parseInt(authenticationmsg)
          : 2.1979 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.019 * parseInt(servicemsg)
          : 1.389 * parseInt(servicemsg)
      );
    } else if (country === "Israel") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0353 * parseInt(marketingmsg)
          : 2.5871 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0053 * parseInt(utilitymsg)
          : 0.3885 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0169 * parseInt(authenticationmsg)
          : 1.2368 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.018 * parseInt(servicemsg)
          : 1.3192 * parseInt(servicemsg)
      );
    } else if (country === "Italy") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0691 * parseInt(marketingmsg)
          : 5.0614 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.03 * parseInt(utilitymsg)
          : 2.1974 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0378 * parseInt(authenticationmsg)
          : 2.7687 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0386 * parseInt(servicemsg)
          : 2.8259 * parseInt(servicemsg)
      );
    } else if (country === "Malaysia") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.086 * parseInt(marketingmsg)
          : 6.3037 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.014 * parseInt(utilitymsg)
          : 1.0262 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.018 * parseInt(authenticationmsg)
          : 1.3194 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.022 * parseInt(servicemsg)
          : 1.6096 * parseInt(servicemsg)
      );
    } else if (country === "Mexico") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0436 * parseInt(marketingmsg)
          : 3.1938 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.01 * parseInt(utilitymsg)
          : 0.7325 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0239 * parseInt(authenticationmsg)
          : 1.7537 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0105 * parseInt(servicemsg)
          : 0.7669 * parseInt(servicemsg)
      );
    } else if (country === "Netherlands") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.1597 * parseInt(marketingmsg)
          : 11.7078 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.05 * parseInt(utilitymsg)
          : 3.6656 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.072 * parseInt(authenticationmsg)
          : 5.2784 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0891 * parseInt(servicemsg)
          : 6.532 * parseInt(servicemsg)
      );
    } else if (country === "Nigeria") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0516 * parseInt(marketingmsg)
          : 3.7851 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0067 * parseInt(utilitymsg)
          : 0.4915 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0287 * parseInt(authenticationmsg)
          : 2.106 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.031 * parseInt(servicemsg)
          : 2.271 * parseInt(servicemsg)
      );
    } else if (country === "Pakistan") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0473 * parseInt(marketingmsg)
          : 3.4683 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0054 * parseInt(utilitymsg)
          : 0.396 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0228 * parseInt(authenticationmsg)
          : 1.6696 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0142 * parseInt(servicemsg)
          : 1.0405 * parseInt(servicemsg)
      );
    } else if (country === "Peru") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0703 * parseInt(marketingmsg)
          : 5.1536 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.02 * parseInt(utilitymsg)
          : 1.4662 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0377 * parseInt(authenticationmsg)
          : 2.7626 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0179 * parseInt(servicemsg)
          : 1.3152 * parseInt(servicemsg)
      );
    } else if (country === "Russia") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0802 * parseInt(marketingmsg)
          : 5.8767 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.04 * parseInt(utilitymsg)
          : 2.9311 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0429 * parseInt(authenticationmsg)
          : 3.1457 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0398 * parseInt(servicemsg)
          : 2.9149 * parseInt(servicemsg)
      );
    } else if (country === "Saudi Arabia") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0406 * parseInt(marketingmsg)
          : 2.9725 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0115 * parseInt(utilitymsg)
          : 0.842 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0226 * parseInt(authenticationmsg)
          : 1.658 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0195 * parseInt(servicemsg)
          : 1.4277 * parseInt(servicemsg)
      );
    } else if (country === "South Africa") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0379 * parseInt(marketingmsg)
          : 2.7821 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0076 * parseInt(utilitymsg)
          : 0.5579 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.018 * parseInt(authenticationmsg)
          : 1.3213 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0168 * parseInt(servicemsg)
          : 1.2332 * parseInt(servicemsg)
      );
    } else if (country === "Spain") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0615 * parseInt(marketingmsg)
          : 4.5044 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.02 * parseInt(utilitymsg)
          : 1.4648 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0342 * parseInt(authenticationmsg)
          : 2.5049 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0369 * parseInt(servicemsg)
          : 2.7026 * parseInt(servicemsg)
      );
    } else if (country === "Turkey") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0109 * parseInt(marketingmsg)
          : 0.7989 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0053 * parseInt(utilitymsg)
          : 0.3884 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0083 * parseInt(authenticationmsg)
          : 0.6101 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.003 * parseInt(servicemsg)
          : 0.2199 * parseInt(servicemsg)
      );
    } else if (country === "United Arab Emirates") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.034 * parseInt(marketingmsg)
          : 2.4924 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0157 * parseInt(utilitymsg)
          : 1.1509 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0178 * parseInt(authenticationmsg)
          : 1.3033 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.019 * parseInt(servicemsg)
          : 1.3899 * parseInt(servicemsg)
      );
    } else if (country === "United Kingdom") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0705 * parseInt(marketingmsg)
          : 5.1663 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.022 * parseInt(utilitymsg)
          : 1.6122 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0358 * parseInt(authenticationmsg)
          : 2.6249 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0388 * parseInt(servicemsg)
          : 2.8448 * parseInt(servicemsg)
      );
    } else if (country === "North America") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.025 * parseInt(marketingmsg)
          : 1.8313 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.004 * parseInt(utilitymsg)
          : 0.293 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0135 * parseInt(authenticationmsg)
          : 0.9889 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0088 * parseInt(servicemsg)
          : 0.6461 * parseInt(servicemsg)
      );
    } else if (country === "Rest of Africa") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0225 * parseInt(marketingmsg)
          : 1.6497 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0061 * parseInt(utilitymsg)
          : 0.4472 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0144 * parseInt(authenticationmsg)
          : 1.0558 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0363 * parseInt(servicemsg)
          : 2.6572 * parseInt(servicemsg)
      );
    } else if (country === "Rest of Asia Pacific") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0732 * parseInt(marketingmsg)
          : 5.3664 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0157 * parseInt(utilitymsg)
          : 1.151 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0425 * parseInt(authenticationmsg)
          : 3.1124 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0224 * parseInt(servicemsg)
          : 1.6385 * parseInt(servicemsg)
      );
    } else if (country === "Rest of Central & Eastern Europe") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.086 * parseInt(marketingmsg)
          : 6.2997 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0353 * parseInt(utilitymsg)
          : 2.5858 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0557 * parseInt(authenticationmsg)
          : 4.0809 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.025 * parseInt(servicemsg)
          : 1.835 * parseInt(servicemsg)
      );
    } else if (country === "Rest of Latin America") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.074 * parseInt(marketingmsg)
          : 5.4207 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0113 * parseInt(utilitymsg)
          : 0.8278 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0445 * parseInt(authenticationmsg)
          : 3.2581 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0423 * parseInt(servicemsg)
          : 3.103 * parseInt(servicemsg)
      );
    } else if (country === "Rest of Middle East") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0341 * parseInt(marketingmsg)
          : 2.4993 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0157 * parseInt(utilitymsg)
          : 1.1507 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0178 * parseInt(authenticationmsg)
          : 1.303 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0218 * parseInt(servicemsg)
          : 1.5985 * parseInt(servicemsg)
      );
    } else if (country === "Rest of Western Europe") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0592 * parseInt(marketingmsg)
          : 4.3378 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.03 * parseInt(utilitymsg)
          : 2.1982 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0378 * parseInt(authenticationmsg)
          : 2.7697 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0397 * parseInt(servicemsg)
          : 2.9104 * parseInt(servicemsg)
      );
    } else if (country === "Other") {
      marketingCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0604 * parseInt(marketingmsg)
          : 4.4248 * parseInt(marketingmsg)
      );
      utilityCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0077 * parseInt(utilitymsg)
          : 0.5641 * parseInt(utilitymsg)
      );
      authenticationCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0304 * parseInt(authenticationmsg)
          : 2.2292 * parseInt(authenticationmsg)
      );
      serviceCost = roundToTwoDecimal(
        currency === "USD"
          ? 0.0145 * parseInt(servicemsg)
          : 1.0615 * parseInt(servicemsg)
      );
    }
    // Convert empty strings to 0
    marketingCost = isNaN(marketingCost) ? 0 : marketingCost;
    utilityCost = isNaN(utilityCost) ? 0 : utilityCost;
    authenticationCost = isNaN(authenticationCost) ? 0 : authenticationCost;
    serviceCost = isNaN(serviceCost) ? 0 : serviceCost;

    // Calculate the total cost
    const totalCost =
      marketingCost + utilityCost + authenticationCost + serviceCost;

    return isNaN(totalCost) ? 0 : totalCost; // Ensure totalCost is not NaN
  };

  // Function to calculate total number of messages
  const calculateTotalMessages = () => {
    const totalMessages =
      (marketingmsg || 0) +
      (utilitymsg || 0) +
      (authenticationmsg || 0) +
      (servicemsg || 0);
    return totalMessages;
  };

  // Function to round a number to two decimal places
  const roundToTwoDecimal = (number) => {
    return Math.round(number * 100) / 100;
  };

  return (
    <>
      <div className="api-buttons mt-4">
        <div className="btn btn-lg greenfullbtn" onClick={handleShow}>
          <Whatsapp /> Calculate WhatsApp API Charges
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>WhatsApp Marketing Cost Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cardmeta">
            <div className="row">
              <div className="col-md-12">
                <h6>Meta Charges (A)</h6>
              </div>
            </div>

            <div className="cardmetainbox">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Country</label>
                    <select
                      className="form-control"
                      value={country}
                      onChange={(event) => setCountry(event.target.value)}
                    >
                      <option value="Argentina">Argentina</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Chile">Chile</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Egypt">Egypt</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Peru">Peru</option>
                      <option value="Russia">Russia</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Spain">Spain</option>
                      <option value="Turkey">Turkey</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="North America">North America</option>
                      <option value="Rest of Africa">Rest of Africa</option>
                      <option value="Rest of Asia Pacific">
                        Rest of Asia Pacific
                      </option>
                      <option value="Rest of Central & Eastern Europe">
                        Rest of Central & Eastern Europe
                      </option>
                      <option value="Rest of Latin America">
                        Rest of Latin America
                      </option>
                      <option value="Rest of Middle East">
                        Rest of Middle East
                      </option>
                      <option value="Rest of Western Europe">
                        Rest of Western Europe
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Currency</label>
                    <select
                      className="form-control"
                      value={currency}
                      onChange={(event) => setCurrency(event.target.value)}
                    >
                      <option value="INR">INR</option>
                      <option value="USD">USD</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">
                      Marketing messages
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      max={3000000}
                      value={marketingmsg}
                      onChange={(event) =>
                        handleInputChange(event, setMarketingMsg)
                      }
                      onWheel={handleWheel}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">
                      Utility messages
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      max={3000000}
                      value={utilitymsg}
                      onChange={(event) =>
                        handleInputChange(event, setUtilityMsg)
                      }
                      onWheel={handleWheel}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">
                      Authentication messages
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      max={3000000}
                      value={authenticationmsg}
                      onChange={(event) =>
                        handleInputChange(event, setAuthenticationMsg)
                      }
                      onWheel={handleWheel}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">
                      Service messages
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      max="3000000"
                      value={servicemsg}
                      onChange={(event) =>
                        handleInputChange(event, setServiceMsg)
                      }
                      onWheel={handleWheel}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row pt-2 px-2 pb-0 graybg">
                    <div className="col-md-6 gapless">
                      <p>
                        Total no of message:{" "}
                        <b>
                          {(!isNaN(parseInt(marketingmsg)) ||
                            marketingmsg === "") &&
                          (!isNaN(parseInt(utilitymsg)) || utilitymsg === "") &&
                          (!isNaN(parseInt(authenticationmsg)) ||
                            authenticationmsg === "") &&
                          (!isNaN(parseInt(servicemsg)) || servicemsg === "")
                            ? roundToTwoDecimal(
                                (parseInt(marketingmsg) || 0) +
                                  (parseInt(utilitymsg) || 0) +
                                  (parseInt(authenticationmsg) || 0) +
                                  (parseInt(servicemsg) || 0)
                              )
                            : 0}
                        </b>
                      </p>
                    </div>
                    <div className="col-md-6 gapless">
                      <p>
                        Total Meta API cost:{" "}
                        <b>
                          {currency === "INR" ? "₹" : "$"}
                          {roundToTwoDecimal(calculateTotalCost())}
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cardmeta">
            <div className="row">
              <div className="col-md-12">
                <h6>Authkey Charges (B)</h6>
              </div>
            </div>
            <div className="cardmetainbox">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput" className="block">
                      Select Plan
                    </label>
                    <select
                      className="form-control"
                      value={plan}
                      onChange={(event) => setPlan(event.target.value)}
                    >
                      <option value="0" data-plan="Starter">
                        Starter (Upto 1,000 conversations)
                      </option>
                      <option value="10" data-plan="Basic">
                        Basic (Upto 10,000 conversations)
                      </option>
                      <option value="99" data-plan="Standard">
                        Standard (Upto 1 Lac conversations)
                      </option>
                      <option value="299" data-plan="Pro">
                        Pro (Upto 5 Lac conversations)
                      </option>
                      <option value="499" data-plan="Premium">
                        Premium (Upto 1 Million conversations)
                      </option>
                      <option value="999" data-plan="Enterprise">
                        Enterprise (Upto 3 Million conversations)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row pt-2 px-2 pb-0 graybg">
                    <p className="pl-2">
                      Total plan cost:{" "}
                      <b>
                        {currency === "INR" ? "₹" : "$"}
                        {calculateTotalPlan()}
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-3">
              <div className="text-center totalhighlight">
                <p>
                  Total Cost (<b>A</b> + <b>B</b>): &nbsp;
                  {plan != "0" ? (
                    <span>
                      {currency === "INR" ? "₹" : "$"}
                      {roundToTwoDecimal(
                        parseFloat(calculateTotalCost()) +
                          parseFloat(calculateTotalPlan(plan, currency))
                      )}
                    </span>
                  ) : (
                    <span>0</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PricePopup;
