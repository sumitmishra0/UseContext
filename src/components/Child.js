import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";

const Child = () => {
  const [data, setData] = useState([]);

  useEffect(() => {});

  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  };
  return <div></div>;
};
