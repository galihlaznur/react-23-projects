import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mode/LightDarkMode";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import ColorGenerator from "../color-generator/ColorGenerator";
import Accordion from "../accordion/Accordion";
import GithubProfileFinder from "../github-profile-finder/GithubProfileFinder";
import FeatureFlagsContext from "./context/FeatureFlagsContext";

const FeatureFlag = () => {
  const { flags, loading, error } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "featureLightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "featureTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "featureColorGenerator",
      component: <ColorGenerator />,
    },
    {
      key: "featureAccordion",
      component: <Accordion />,
    },
    {
      key: "featureGithubProfileFinder",
      component: <GithubProfileFinder />,
    },
  ];

  if (loading) {
    return <div>Loading feature flags...</div>;
  }

  if (error) {
    return <div>Error loading feature flags: {error.message}</div>;
  }

  return (
    <div>
      <h1>Feature Flag</h1>
      {componentsToRender.map(({ key, component }, index) => (
        <div key={index}>{flags[key] ? component : null}</div>
      ))}
    </div>
  );
};

export default FeatureFlag;
