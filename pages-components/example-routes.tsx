import { startCase } from "lodash";

import { CodeSnippet, Editor, Icons } from "@andritz/hwf2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const BaseEditor = ({ definition }: { definition: string }) => {
  return (
    <Box pt={1}>
      <Editor
        defaultValue={definition}
        defaultLanguage="typescript"
        fitContent
        barIcons={[
          {
            icon: Icons.Copy,
            title: "Copy",
            onClick: async (editorController) => {
              const value = editorController.getValue();
              navigator.clipboard.writeText(value as string);
            },
          },
        ]}
        options={{
          readOnly: true,
          lineNumbers: "off",
          minimap: { enabled: false },
        }}
      />
    </Box>
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
      <BaseEditor definition={definition} />
    </Box>
  );
};
