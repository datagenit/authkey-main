"use client";
import React, { useState, useEffect } from 'react';
import { getFaq } from './Api';

const FaqNavbar = () => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSublinkId, setActiveSublinkId] = useState(null);
  const [searchActive] = useState();

  useEffect(() => {
    // Fetch FAQ categories on component mount
    fetchFaqCategories();
    window.scrollTo(0, 0);
  }, []);

  const fetchFaqCategories = () => {
    // Fetch FAQ categories using your API function
    getFaq({ method: "retrieve" }).then((result) => {
      if (result.data.success === true) {
        // Extract and set categories from the result data
        setCategories(result.data.data);
        
        // Determine the active category index based on the URL
        const urlParams = window.location.pathname.split('/');
        if (urlParams.length > 2) {
          const categoryId = parseInt(urlParams[2]); // Assuming category ID is in the URL
          const activeCategoryIndex = result.data.data.findIndex(category => category.id === categoryId);
          setActiveIndex(activeCategoryIndex);
          setActiveSublinkId(categoryId);
        }
      } else {
        console.error("Failed to fetch FAQ categories:", result.message);
      }
    }).catch(error => {
      console.error("Error fetching FAQ categories:", error);
    });
  };

  const handleCategoryClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSublinkClick = (id) => {
    setActiveSublinkId(activeIndex === id ? null : id);
  };
  
  return (
    <div id="accordion" className="faqCategorylist">
      {categories.map((category, index) => {
        // Check if category name has already been rendered
        if (categories.slice(0, index).some(item => item.cat_name === category.cat_name)) {
          return null; // Skip rendering if the category name has already been rendered
        }

        // Find all items with the same category name
        const itemsWithSameCategoryName = categories.filter(item => item.cat_name === category.cat_name);

        return (
          <div className="faqCat_maintitle" key={index}>
            <div className="faqCat_heading" id={`heading${index}`}>
              <div
                className={`faqCat_catname ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleCategoryClick(index)}
              >
                {category.cat_name}
              </div>
            </div>

            <div
              id={`collapse${index}`}
              className={`collapse ${!searchActive && activeIndex === index ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent="#accordion"
            >
              <div className="faqCat_sublinkMain">
                <ul className="faqCat_sublink">
                {itemsWithSameCategoryName.map((item, subIndex) => (
                    <li key={subIndex} className={`faqCat_sublink_item ${activeSublinkId === item.id ? 'active' : ''}`}>
                      <a href={`/faq/${item.id}/${item.url}`} onClick={() => handleSublinkClick(item.id)}>{item.title}</a>

                    {activeSublinkId === item.id && (
                     <div className="faqMobileShow">
                      <h1 className="mb-3">{item.title}</h1>
                          <p
                            className="mt-1"
                            dangerouslySetInnerHTML={{
                              __html: item.post_details,
                            }}
                          />
                          <small>
                            Category <strong>{item.cat_name}</strong> Posted On{" "}
                            <strong>{item.created}</strong>
                          </small>
                      </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqNavbar;