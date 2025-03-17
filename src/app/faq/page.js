import { getFaq } from "../../../components/Api";
export const metadata = {
  title: "SMS Email Voice API frequently asked questions [FAQ] | Authkey",
  description:
    "Common frequently asked questions [FAQ] for SMS Voice Email API, FAQ Authkey",
  alternates: {
    canonical: "https://authkey.io/faq",
  },
};
const Faq = async () => {
  let allFaqList = await getFaq({ method: "retrieve" }).then((res) => {
    return res.data.data;
  });

  // Preprocess category names to ensure similar categories are considered the same
  const preprocessCategoryName = (name) => {
    return name.toLowerCase().replace(/\s+/g, ""); // Convert to lowercase and remove spaces
  };

  // Extract unique category names after preprocessing
  const uniqueCategoryNames = [
    ...new Set(allFaqList.map((item) => preprocessCategoryName(item.cat_name))),
  ];

  // Keep track of rendered category names
  const renderedCategoryNames = {};

  return (
    <>
      <section className="hero herocontainer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 p-2 text-left">
              <div className="help-center">
                <h2>Frequently Asked Questions</h2>
              </div>
              {/* <div className="shadow-md rounded-lg border-0 mb-sm-0">
                <div className="input-group mr-sm-2">
                  <input
                    type="search"
                    className="form-control"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tell us what are you looking for"
                    autoComplete="off"
                  />
                  <div onClick={searchQuery} className="btn-sm btn btn-search">
                    <Search size={20} />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-lg-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h3 className="mb-4">All Categories</h3>
              <div className="row">
                {uniqueCategoryNames.map((categoryName, index) => {
                  // Check if category name has been rendered
                  if (renderedCategoryNames[categoryName]) return null;

                  // Find the first FAQ item for the category
                  const faqItem = allFaqList.find(
                    (item) =>
                      preprocessCategoryName(item.cat_name) === categoryName
                  );

                  // Mark category name as rendered
                  renderedCategoryNames[categoryName] = true;

                  if (!faqItem) return null;
                  return (
                    <div key={index} className="col-md-3">
                      <a href={`/faq/${faqItem.id}/${faqItem.url}`} passHref>
                        <div className="voiletinbox channelvoice ">
                          <div className="pt-2 pb-2 text-center">
                            <div className="faqlink">
                              <h6 className="mb-0">{faqItem.cat_name}</h6>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
