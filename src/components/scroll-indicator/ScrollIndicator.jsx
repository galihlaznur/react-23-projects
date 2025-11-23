import React, { useEffect, useState } from "react";
import style from "./scrollindicator.module.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      if (result?.products?.length) {
        setData(result.products);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleSrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const totalScrollableHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercentage = (howMuchScrolled / totalScrollableHeight) * 100;
    setScrollPosition(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleSrollPercentage);
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className={style["top-container"]}>
        <div className={style["scroll-progress-tracking-container"]}>
          <div
            className={style["current-progress-bar"]}
            style={{ width: `${scrollPosition}%` }}
          ></div>
        </div>
        {/* <h2>Custom Scroll Indicator</h2> */}
      </div>

      <div className={style["data-container"]}>
        {data?.length ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default ScrollIndicator;
