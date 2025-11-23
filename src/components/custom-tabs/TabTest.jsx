import React from "react";
import Tabs from "./Tabs";

function RandomComponent() {
  return <div>This is a random component</div>;
}

const TabTest = () => {
  const tabsContent = [
    {
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (index) => {
    console.log("Selected Tab Index:", index);
  };

  return <Tabs tabsContent={tabsContent} onChange={handleChange} />;
};

export default TabTest;
