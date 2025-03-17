import { fetchFAQDetails } from "../../../../components/Api";
import FaqNavbar from "../../../../components/FaqNavbar";

export async function generateMetadata({ params }) {

  const blogDetails = await fetchFAQDetails(params.id[0]);
  return {
    title: blogDetails.title,
    description: blogDetails.meta,
    openGraph: {
      title: blogDetails.title,
      description: blogDetails.meta,
    },
    alternates: {
      canonical: `https://authkey.io/faq/${params.id[0]}/${blogDetails.url}`
    },
  };
}

const FaqDetailsLayout = ({ children }) => {
  return <section className="pb-lg-6">
    <div className="container">
      <div className="row justify-content-center faq-blog mt-4">
        <div className="col-lg-3">
          <FaqNavbar />
        </div>
        <div className="col-lg-9 m-0 mb-5 mb-0">
          {children}
        </div>
      </div>
    </div>
  </section>
};

export default FaqDetailsLayout;
