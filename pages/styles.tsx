import Box from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor dolor a ligula porttitor placerat. Maecenas quis dignissim erat. ";

export const Page = () => {
  const buttonColors = [
    "primary",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
  ] as ButtonProps["color"][];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: 1,
        gap: 2,
      }}
    >
      <Typography variant="h1">Styles</Typography>

      <Box flex={1}>
        <Typography variant="h2">Headers</Typography>
        <Typography variant="h1">Example of header h1</Typography>
        <Typography variant="h2">Example of header h2</Typography>
        <Typography variant="h3">Example of header h3</Typography>
        <Typography variant="h4">Example of header h4</Typography>
        <Typography variant="h5">Example of header h5</Typography>
        <Typography variant="h6">Example of header h6</Typography>
      </Box>

      <Box flex={1}>
        <Typography variant="h2">Texts</Typography>
        <Typography variant="h6">subtitle1</Typography>
        <Typography variant="subtitle1">{loremIpsum}</Typography>
        <Typography variant="h6">subtitle2</Typography>
        <Typography variant="subtitle2">{loremIpsum}</Typography>
        <Typography variant="h6">body1</Typography>
        <Typography variant="body1">{loremIpsum}</Typography>
        <Typography variant="h6">body2</Typography>
        <Typography variant="body2">{loremIpsum}</Typography>
        <Typography variant="h6">caption</Typography>
        <Typography variant="caption">{loremIpsum}</Typography>
      </Box>

      <Box>
        <Typography variant="h2">Buttons</Typography>
        <Box maxWidth={200}>
          <Buttons />
        </Box>
      </Box>

      <Box>
        <Typography variant="h2">Colors</Typography>
        <Box display="flex" gap={2} justifyContent="space-around">
          {buttonColors.map((color) => (
            <Box key={color} flex={1}>
              <Typography variant="h3">{color}</Typography>
              <Buttons color={color} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const Buttons = ({ color }: { color?: ButtonProps["color"] }) => {
  return (
    <Box flex={1} display="flex" gap={2} flexDirection="column">
      <Button color={color} sx={{ flex: 1 }} variant="contained">
        Contained
      </Button>
      <Button color={color} sx={{ flex: 1 }} variant="outlined">
        Outlined
      </Button>
      <Button color={color} sx={{ flex: 1 }} variant="text">
        Text
      </Button>
    </Box>
  );
};

export default Page;
