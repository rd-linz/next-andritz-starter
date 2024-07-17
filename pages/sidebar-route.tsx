import { startCase } from "lodash";

import { CodeSnippet } from "@andritz/hwf2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Page = () => {
  return (
    <BaseRouteComponent
      location="sidebar"
      definition={`{
  text: "Sidebar Item", 
  icon: VscLayoutSidebarLeftOff,
  iconProps: {
    sx: {
      fontSize: "1.5rem",
    },
  },
  onClick: () => Router.push("/sidebar-route"),
  context: ["sidebar"],
}`}
    />
  );
};

export const BaseRouteComponent = ({
  location,
  definition,
}: {
  location: string;
  definition: string;
}) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", flex: 1 }}
    >
      <Typography variant="h1">{startCase(location)} Route</Typography>
      <Typography variant="body1">
        This is a route that is only accessible from the {location}.
      </Typography>

      <Typography>
        It can be changed by updating the layout settings in the{" "}
        <CodeSnippet copy text="settings/layout.ts" notifyCopy /> file.
      </Typography>
      <Typography variant="body2">
        The {location} item for this route is defined as follows:
      </Typography>
      <CodeSnippet multiline copy text={definition} notifyCopy />
    </Box>
  );
};

export default Page;
