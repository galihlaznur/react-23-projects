import React, { useState } from "react";
import style from "./tabs.module.css";

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (index) => {
    setCurrentTabIndex(index);
    onChange(index);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.heading}>
        {tabsContent.map((tab, index) => (
          <div
            onClick={() => handleOnClick(index)}
            key={index}
            className={`${style["tab-item"]} ${
              currentTabIndex === index ? style.active : ""
            }`}
          >
            <span className={style.label}>{tab.label}</span>
          </div>
        ))}
      </div>
      <div className={style.content}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
