import { UserInfoMSAL } from "@andritz/hwf2";
import { Box, Typography } from "@mui/material";

export const Page = () => {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", flex: 1 }}>
      <Typography variant="h1">Another Route</Typography>
      <Box>
        <UserInfoMSAL
          disposition="left"
          username={"me"}
        />
      </Box>
    </Box>
  );
};

export default Page;
