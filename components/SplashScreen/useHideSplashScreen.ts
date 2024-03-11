import { useEffect } from "react";
import { splashScreenId } from "./settings";

export const useHideSplashScreen = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById(splashScreenId);
      if (loader) loader.style.display = "none";
    }
  }, []);
};
