import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import "./index.css";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=15&_page=${page}`
      );
      const json = await res.json();
      setCard((prev=>[...prev,...json]));
    } catch (err) {
      console.log(err);
    }
  };
// console.log('page',page)
  useEffect(() => {
    fetchData();
  }, [page]);
  
  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
  return (
    <>
      <h1>Lists of Cards</h1>
      <div className="home">
        <Cards cards={card} />
      </div>
    </>
  );
};

export default Home;
