import axios from "axios";
import { useEffect, useState } from "react";

import ChildContext from "./childContext";

const Child = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = (props) => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  };
  return (
    <ChildContext.Provider value={data}>{props.children}</ChildContext.Provider>
  );
};

export default Child;
