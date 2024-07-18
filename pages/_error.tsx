import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { NextPageContext } from "next";

import { commonErrorDetails } from "@/settings/errors";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statusCode: {
    borderRight: 1,
    pr: 2,
    mr: 2,
    mb: 0,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      fontSize: "0.8em",
    },
  },
};

export default function ErrorPage({ statusCode }: { statusCode?: number }) {
  const statusDetail =
    (statusCode && commonErrorDetails[statusCode]) || commonErrorDetails[500];
  return (
    <Box sx={styles.container}>
      <Typography variant="h2" sx={styles.statusCode}>
        {statusCode}
      </Typography>
      <Box sx={styles.detailsContainer}>
        <Typography variant="body1">{statusDetail.title}</Typography>
        <Typography variant="body1">{statusDetail.message}</Typography>
      </Box>
    </Box>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
