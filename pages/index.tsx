import {Box, Typography} from "@mui/material";

export const Page = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h1">Hello World!</Typography>
      <Typography variant="h2">First Step: Change me</Typography>
      <Typography variant="body1">
        <Box component="span" color={"primary.dark"}>
          or : {" "}
        </Box>
          Do whatever you want
        </Typography>
    </Box>
  );
};

export default Page;
