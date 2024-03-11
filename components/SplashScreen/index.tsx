import Image from "next/image";
import Box from "@mui/material/Box";
import { splashScreenId } from "./settings";

export const SplashScreen = () => {
  return (
    <div id={splashScreenId}>
      <Box sx={{ width: [150, 250] }}>
        <Image
          src={"/logo_white.svg"}
          alt="logo"
          width={1}
          height={1}
          style={{ position: "relative", height: "100%", width: "100%" }}
        />
      </Box>

      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export { useHideSplashScreen } from "./useHideSplashScreen";
