import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Headers,
  Texts,
  Buttons,
  ThemeColors,
} from "pages-components/example-styles";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flex: 1,
    gap: 2,
    pb: 2
  },
};

export const Page = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h1">Styles</Typography>
      <Headers />
      <Texts />
      <Buttons />
      <ThemeColors />
    </Box>
  );
};

export default Page;
