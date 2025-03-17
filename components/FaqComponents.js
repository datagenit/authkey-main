"use client";
import React from "react";
import Faq from "react-faq-component";
const styles = {
  titleTextColor: "#152c5b",
  titleTextStyle: "bold",
  rowTitleColor: "#152c5b",
  rowContentPaddingBottom: "10px",
};

const config = {
  animate: true,
};

const FaqComponents = (props) => {
  return (
    <section className="pb-0 pb-lg-6">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-lg-6">
            <h2 className="">Frequently Asked Questions</h2>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-md-10">
            <Faq data={props.data} styles={styles} config={config} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqComponents;
