import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, config) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (config === undefined) {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(url, config)
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, []);
  return data;
};
export default useFetch;
