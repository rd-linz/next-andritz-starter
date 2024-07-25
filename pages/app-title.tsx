import { useState, useEffect } from "react";

import { TitleSettings, useLayoutController } from "@andritz/hwf2";
import { Box, Button, TextField, Typography } from "@mui/material";

export const Page = () => {
  const [usingString, setUsingString] = useState<boolean>(true);
  const [userInteraction, setUserInteraction] = useState<boolean>(false);
  const layoutController = useLayoutController();
  const titleController = layoutController!.titleController;
  const [titles, setTitles] = useState<TitleSettings>(
    titleController.initialValues
  );

  useEffect(() => {
    if (userInteraction) {
      if (usingString) {
        titleController.setStartTitle(titles.startTitle);
        titleController.setEndTitle(titles.endTitle);
      } else {
        const startComponent = titles.startTitle ? (
          <CustomComponent text={titles.startTitle as string} />
        ) : null;
        titleController.setStartTitle(startComponent);

        const endComponent = titles.endTitle ? (
          <CustomComponent text={titles.endTitle as string} />
        ) : null;
        titleController.setEndTitle(endComponent);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usingString, titles.endTitle, titles.startTitle]);

  const handleOnChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInteraction(true);
      setTitles((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleReset = () => {
    titleController.resetTitles();
    setTitles(titleController.initialValues);
    setUsingString(true);
  };

  const handleActivate = () => {
    setUserInteraction(true);
    setUsingString(!usingString);
  };

  return (
    <Box flex={1} display="flex" flexDirection="column" gap={2}>
      <Typography
        variant="h1"
        sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}
      >
        App Title
        <Controller handleReset={handleReset} />
      </Typography>
      <Typography variant="body1">
        This page demonstrates the use of the App Title feature. You can set the
        title using either a <b>string</b> or a <b>custom React component</b>.
      </Typography>

      <Box display="flex" flexDirection="column">
        <SectionHeader
          handleActivate={handleActivate}
          text="String"
          active={usingString}
          info={"The text will be displayed as is."}
        />

        <Box display="flex" gap={1} flex={1}>
          <TextField
            sx={{ flex: 1 }}
            label="Start Title"
            variant="filled"
            value={titles.startTitle || ""}
            onChange={handleOnChange("startTitle")}
          />
          <TextField
            sx={{ flex: 1 }}
            label="End Title"
            variant="filled"
            value={titles.endTitle || ""}
            onChange={handleOnChange("endTitle")}
          />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <SectionHeader
          handleActivate={handleActivate}
          text="Component"
          active={!usingString}
          info={
            "The custom component will display the text in uppercase and in a warning color."
          }
        />
        <Box display="flex" gap={1} flex={1}>
          <DisplayCustomComponent
            titles={titles}
            title="Start Title"
            field="startTitle"
          />
          <DisplayCustomComponent
            titles={titles}
            title="End Title"
            field="endTitle"
          />
        </Box>
      </Box>
    </Box>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */

/* ------------------------------- Controller ------------------------------- */

type ControllerProps = {
  handleReset: () => void;
};

const Controller = ({ handleReset }: ControllerProps) => {
  return (
    <Box display="flex" gap={2}>
      <Button variant="outlined" size="small" onClick={handleReset}>
        Reset
      </Button>
    </Box>
  );
};

/* ----------------------------- Section Header ----------------------------- */

type SectionHeaderProps = {
  text: string;
  active: boolean;
  info: string;
  handleActivate: ActivateButtonProps["handleActivate"];
};

const SectionHeader = (props: SectionHeaderProps) => {
  const { text, active, info, handleActivate } = props;
  return (
    <Typography variant="h2" sx={{ display: "inline-flex" }} gap={2}>
      {text}
      <ActivateButton active={active} handleActivate={handleActivate} />
      <Typography variant="body2">{info}</Typography>
    </Typography>
  );
};

/* ----------------------------- Activate Button ---------------------------- */

type ActivateButtonProps = {
  active: boolean;
  handleActivate: () => void;
};

const ActivateButton = (props: ActivateButtonProps) => {
  const { active, handleActivate } = props;
  return (
    <Button
      size="small"
      variant="outlined"
      disabled={active}
      onClick={handleActivate}
    >
      Activate
    </Button>
  );
};

/* ------------------------ Display Custom Component ------------------------ */

type DisplayCustomComponentProps = {
  title: string;
  field: "startTitle" | "endTitle";
  titles: TitleSettings;
};

const DisplayCustomComponent = (props: DisplayCustomComponentProps) => {
  const { title, field, titles } = props;
  return (
    <Box
      flex={1}
      sx={{
        backgroundColor: "background.alpha.light",
        p: 1,
        borderRadius: 1,
      }}
    >
      <Typography variant="h4">
        {title}: {titles[field] || "No text"}
      </Typography>
      <CustomComponent text={titles[field] as string} />
    </Box>
  );
};

type CustomComponentProps = {
  text?: string;
};

const CustomComponent = ({ text }: CustomComponentProps) => {
  if (!text) {
    return null;
  }

  const style = {
    p: 0,
    cursor: "pointer",
    textTransform: "uppercase",
    color: "warning.light",
  };

  const onClick = () => alert("This is a custom header.");

  return (
    <Typography variant="h4" sx={style} onClick={onClick}>
      {text}
    </Typography>
  );
};

export default Page;
