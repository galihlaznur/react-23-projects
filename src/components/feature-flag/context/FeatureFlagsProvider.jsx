import { useEffect, useState } from "react";
import FeatureFlagData from "../data";
import FeatureFlagsContext from "./FeatureFlagsContext";

export default function FeatureFlagProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flags, setFlags] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);

      const response = await FeatureFlagData();
      setFlags(response);
      console.log("Feature Flags:", response);
    } catch (error) {
      console.error("Error fetching feature flags:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ flags, loading, error }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
