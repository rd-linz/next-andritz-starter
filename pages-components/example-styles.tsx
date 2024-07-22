import { Label } from "@andritz/hwf2";
import Box from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor dolor a ligula porttitor placerat. Maecenas quis dignissim erat. ";

export const Headers = () => {
  return (
    <Box flex={1}>
      <Typography variant="h2">Headers</Typography>
      <Typography variant="h1">Example of header h1</Typography>
      <Typography variant="h2">Example of header h2</Typography>
      <Typography variant="h3">Example of header h3</Typography>
      <Typography variant="h4">Example of header h4</Typography>
      <Typography variant="h5">Example of header h5</Typography>
      <Typography variant="h6">Example of header h6</Typography>
    </Box>
  );
};

export const Texts = () => {
  return (
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
  );
};

export const Buttons = () => {
  const buttonColors = [
    "primary",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
  ] as ButtonProps["color"][];

  return (
    <Box>
      <Typography variant="h2">Buttons</Typography>
      <Box display="flex" gap={2} justifyContent="space-around">
        {buttonColors.map((color) => (
          <Box key={color} flex={1}>
            <Typography variant="h3">{color}</Typography>
            <ButtonList color={color} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const ButtonList = ({ color }: { color?: ButtonProps["color"] }) => {
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

export const ThemeColors = () => {
  const bgcolors = [
    "paper",
    "background.secondary.light",
    "background.secondary.main",
    "background.secondary.dark",
    "background.components.topbar.main",
    "background.components.sidebar.main",
    "background.components.accountmenu.main",
  ];

  const textcolors = [
    "primary.light",
    "primary",
    "primary.dark",
    "secondary.light",
    "secondary",
    "secondary.dark",
    "error.light",
    "error.main",
    "error.dark",
    "warning.light",
    "warning.main",
    "warning.dark",
    "info.light",
    "info.main",
    "info.dark",
    "success.light",
    "success.main",
    "success.dark",
    "text.primary",
    "text.secondary",
    "text.disabled",
    "components.topbar.main",
    "components.sidebar.main",
    "components.accountmenu.main",
  ];

  return (
    <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
      <Typography variant="h2">Theme Colors</Typography>
      {bgcolors.map((bgcolor) => {
        return (
          <Box
            key={bgcolor}
            bgcolor={"background.secondary.main"}
            p={1}
            sx={{
              border: "1px solid",
              borderColor: "background.alpha.main",
              borderRadius: 2,
            }}
          >
            <Typography variant="h3">bgcolor: {bgcolor}</Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {textcolors.map((textcolor) => (
                <Label
                  key={textcolor}
                  color={textcolor}
                  backgroundColor={bgcolor}
                >
                  {textcolor}
                </Label>
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
