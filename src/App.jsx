import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Main from "./component/Main";
import Pagination from "./component/Pagination";
import Top from "./component/Top";
import axios from "axios";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    `https://api.thedogapi.com/v1/breeds?limit=50&page=1&order=Asc`
  );
  //api key: d422fbb5-253f-4f0b-ae97-f123af904743
  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "x-api-key": "d422fbb5-253f-4f0b-ae97-f123af904743",
    },
  };
  useEffect(() => {
    const fetchItems = async () => {
      console.log(url);
      const response = await axios(url, config);
      console.log(response.data);
      setItems(response.data);
    };
    fetchItems();
    setLoading(false);
  },[setUrl,url]);
  return (
    <>
      <Header />
      <Search />
      <Main items={items} loading={loading} />
      <Pagination getUrl={(u) => setUrl(u)} />
      <Top />
    </>
  );
};

export default App;
