import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, config) => {
  const [fetchedData, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (config === undefined) {
          const res = await axios.get(url);
          setData(res.data);
        } else {
          const res = await axios.get(url, config);
          setData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return fetchedData;
};
export default useFetch;
