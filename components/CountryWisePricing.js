"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const CountryWisePricing = () => {
  const [allcountryList, setallcountryList] = useState([]);
  const [countryName, setcountryName] = useState("india");
  const [countryPrice, setcountryPrice] = useState("");

  useEffect(() => {
    countryList();
  }, []);

  const countryList = () => {
    fetch(
      `https://console.authkey.io/api/pricelist_wesite.php?keyword=${countryName}&method=list`
    ).then((resp) => {
      resp.json().then((result) => {
        let allcountryList = [];
        if (result.success === true) {
          for (var i = 0; i < result.data.length; i++) {
            allcountryList.push({
              label: result.data[i].country_name,
              value: result.data[i].s,
            });
          }
          setallcountryList(allcountryList);
        } else {
        }
      });
    });
  };

  const handleChange = (selectedCountry) => {
    let name = selectedCountry.label.replace(/\s+/g, '-').toLowerCase();
    window.location.href = '/pricing/sms/' + name;
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="input-group mb-2 mr-sm-2">
          <Select
            options={allcountryList}
            onChange={handleChange}
            placeholder={"Select Your Country"}
          />
        </div>

        <div className="table-responsive  m3-5">
          <button type="button" className="btn btn-block btn-sm btn-primary">
            Please select your country name
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryWisePricing;
