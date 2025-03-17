"use client"; // For Next.js App Directory

import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const WhatsAppConversation = () => {
  const [country, setCountry] = useState("India");
  const [currency, setCurrency] = useState("INR");
  const [excelData, setExcelData] = useState([]);
  const countryOptions = [...new Set(excelData.map(item => item.Country))].sort();
  const [costs, setCosts] = useState({
    marketingCost: "",
    utilityCost: "",
    authenticationCost: "",
    serviceCost: "",
  });

  useEffect(() => {
    // Function to parse Excel file
    const fetchExcelData = async () => {
      // Assuming you have an excel file saved locally, or it can be fetched from a server
      const response = await fetch("/whatsapp-pricing.xlsx");
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetData = XLSX.utils.sheet_to_json(sheet);

      setExcelData(sheetData); // Store the parsed Excel data
    };

    fetchExcelData();
  }, []);

  useEffect(() => {
    const countryData = excelData.find((item) => item.Country === country);
    if (countryData) {
      const formatCost = (cost, symbol) =>
        cost === "n/a" || cost === undefined ? "n/a" : `${symbol}${cost}`;


      setCosts({
        marketingCost: formatCost(
          currency === "INR"
            ? countryData.MARKETING_COST_INR
            : currency === "EUR"
              ? countryData.MARKETING_COST_EUR
              : countryData.MARKETING_COST_USD,
          currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"
        ),
        utilityCost: formatCost(
          currency === "INR"
            ? countryData.UTILITY_COST_INR
            : currency === "EUR"
              ? countryData.UTILITY_COST_EUR
              : countryData.UTILITY_COST_USD,
          currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"
        ),
        authenticationCost: formatCost(
          currency === "INR"
            ? countryData.AUTHENTICATION_COST_INR
            : currency === "EUR"
              ? countryData.AUTHENTICATION_COST_EUR
              : countryData.AUTHENTICATION_COST_USD,
          currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"
        ),
        authenticationintCost: formatCost(
          currency === "INR"
            ? countryData.AUTHENTICATION_INT_COST_INR
            : currency === "EUR"
              ? countryData.AUTHENTICATION_INT_COST_EUR
              : countryData.AUTHENTICATION_INT_COST_USD,
          currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"
        ),
        serviceCost: formatCost(
          currency === "INR"
            ? countryData.SERVICE_COST_INR
            : currency === "EUR"
              ? countryData.SERVICE_COST_EUR
              : countryData.SERVICE_COST_USD,
          currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$"
        ),
      });
    }
  }, [country, currency, excelData]);

  return (
    <div className="container pt-5">
      <h2 className="mb-5 text-center mbg-56">WhatsApp Messaging Pricing for <span className="mt-1 countrySize">{country}</span></h2>
      <div className="row justify-content-md-center">
        {/* Country Dropdown */}
        <div className="col-xs-81 col-md-5 mb-4">
          <div className="inputplan">
            <label className="textBgs mb-2"><span className="selectMbnone">Select</span> Country</label>
            <div className="rootplan">
              <select
                className="form-control formInBg"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
                {countryOptions.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"></path></svg>
            </div>
          </div>
        </div>

        {/* Currency Dropdown */}
        <div className="col-xs-41 col-md-4 mb-4">
          <div className="inputplan">
            <label className="textBgs mb-2"><span className="selectMbnone">Select</span> Currency</label>
            <select
              className="form-control formInBg"
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"></path></svg>
          </div>
        </div>

        {/* Country Buttons */}
        <div className="col-md-12 mt-3">
          <ul className="countryBlock">
            <li>
              <div
                className={`p-2 px-4 countrysmall ${country === "India" ? "active" : ""}`}
                onClick={() => setCountry("India")}
              >
                India</div>
            </li>
            <li>
              <div
                className={`p-2 px-4 countrysmall ${country === "Indonesia" ? "active" : ""}`}
                onClick={() => setCountry("Indonesia")}
              >
                Indonesia
              </div>
            </li>
            <li>
              <div
                className={`p-2 px-4 countrysmall ${country === "United Arab Emirates" ? "active" : ""}`}
                onClick={() => setCountry("United Arab Emirates")}
              >
                UAE
              </div>
            </li>
            <li>
              <div
                className={`p-2 px-4 countrysmall ${country === "Philippines" ? "active" : ""}`}
                onClick={() => setCountry("Philippines")}
              >
                Philippines
              </div>
            </li>
            <li>
              <div
                className={`p-2 px-4 countrysmall ${country === "United States (USA)" ? "active" : ""}`}
                onClick={() => setCountry("United States (USA)")}
              >
                USA
              </div>
            </li>
            <li>
              <div
                className={`p-2 px-4 countrysmall ${country === "Australia" ? "active" : ""}`}
                onClick={() => setCountry("Australia")}
              >
                Australia
              </div>
            </li>
            <li><div
              className={`p-2 px-4 countrysmall ${country === "Canada" ? "active" : ""}`}
              onClick={() => setCountry("Canada")}
            >
              Canada
            </div>
            </li>
          </ul>
        </div>

      </div>



      <div className="row">

        {/* Cost Inputs */}
        <div className="col-md-12 my-5 marggap">
          <div className="violetPlan borderRadius p-mobs p-5">
            <h4 className="mb-4 ftnSmll">Whatsapp Conversation Fee:</h4>
            <div className="d-flex">
              <div className="px-2 w-100 form-group">
                <div className="textBgs">Marketing Cost:</div>
              </div>
              <div className="flex-shrink-1 textBgss">
                {costs.marketingCost}
              </div>
            </div>

            <div className="d-flex">
              <div className="px-2 w-100 form-group">
                <div className="textBgs">Utility Cost:</div>
              </div>
              <div className="flex-shrink-1 textBgss">
                {costs.utilityCost}
              </div>
            </div>

            <div className="d-flex">
              <div className="px-2 w-100 form-group">
                <div className="textBgs">Authentication Cost:</div>
              </div>
              <div className="flex-shrink-1 textBgss">
                {costs.authenticationCost}
              </div>
            </div>
            <div className="d-flex">
              <div className="px-2 w-100 form-group">
                <div className="textBgs">Authentication International Cost:</div>
              </div>
              <div className="flex-shrink-1 textBgss">
                {costs.authenticationintCost}
              </div>
            </div>


            <div className="d-flex">
              <div className="px-2 w-100 form-group">
                <div className="textBgs">Service Cost:</div>
              </div>
              <div className="flex-shrink-1 textBgss">
                {costs.serviceCost}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhatsAppConversation;