"use client";
import { useEffect, useState } from "react";
import { getFaqData } from "../../../../components/Api";

const HelpCenterDetails = ({ params }) => {
  const [faqDetails, setFaqDetails] = useState([]);

  useEffect(() => {
    getFaqData(params.id[0]).then((res) => {
      console.log("res", res);
      if (res) {
        setFaqDetails(res);
      }
    });
  }, [params]); // Depend on id, not params

  return (
    <>
      {faqDetails && (

        <div className="col-lg-9 m-0 mb-5 mb-0">

          <div className="api-doc bg-white p-4 shadow text-left faqMobileHide">
            <h1 className="mb-3">{faqDetails.title}</h1>
            <p
              className="mt-1"
              dangerouslySetInnerHTML={{
                __html: faqDetails.post_details,
              }}
            />
            <small>
              Category <strong>{faqDetails.cat_name}</strong> Posted On{" "}
              <strong>{faqDetails.created}</strong>
            </small>
          </div>
        </div>

      )}
    </>
  );
};
export default HelpCenterDetails;
