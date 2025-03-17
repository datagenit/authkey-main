import axios from "axios";
import Axios from "axios";

let oroginURL = true;

export const HOST_URL = `${oroginURL == true ? "https://console.authkey.io/api" : "/api"
  }`;
export const REQUEST_URL = `${oroginURL == true
  ? "https://console.authkey.io/request"
  : "/restapi/request.php"
  }`;

export const getBlogPost = () => {
  return Axios.get(
    `${HOST_URL}/blog.php?user_id=10&method=retrieve&token=68f3dcf1bf51e3e85150867e8df35586`
  );
};

export const getFaq = ({ method = "retrieve", query = null }) => {
  return Axios.get(
    `${HOST_URL}/faq.php?user_id=10&method=${method}&token=68f3dcf1bf51e3e85150867e8df35586&name=${query}`
  );
};

export const getAllCountryList = async () => {
  return Axios.get(`${HOST_URL}/country_master.php`);
};

export async function getFaqData(id) {
  try {
    const res = await fetch(
      `${HOST_URL}/faq.php?user_id=1&method=retrieveid&user_type=client&token=68f3dcf1bf51e3e85150867e8df35586&id=${id}`
    );
    const result = await res.json();
    if (result.success) {
      return result.data[0];
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error fetching blog details:", error);
    throw error;
  }
}

export async function fetchBlogDetails(url) {
  try {
    const res = await fetch(
      `${HOST_URL}/blog.php?user_id=1&method=retrieveid&user_type=client&token=68f3dcf1bf51e3e85150867e8df35586&id=${url}`
    );
    const result = await res.json();
    if (result.success) {
      return result.data[0];
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error fetching blog details:", error);
    throw error;
  }
}

export async function fetchFAQDetails(id) {
  try {
    const res = await fetch(
      `${HOST_URL}/faq.php?user_id=1&method=retrieveid&user_type=client&token=68f3dcf1bf51e3e85150867e8df35586&id=${id}`
    );
    const result = await res.json();
    if (result.success) {
      return result.data[0];
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error fetching blog details:", error);
    throw error;
  }
}

export const getCuntryWisePriceList = (name) => {
  return axios.get(`${HOST_URL}/pricelist_wesite.php?keyword=${name}&method=search`)
}
