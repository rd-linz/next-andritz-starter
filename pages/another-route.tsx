import { useUser, useMSALAuth, } from "@andritz/hwf2"
import { UserInfo } from "@andritz/hwf2"
import {Box, Button, Typography} from "@mui/material"

export const Page = () => {
  const msal = useMSALAuth()
  const { data: profile } = useUser("me")

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", flex: 1 }}>
      <Typography variant="h1">Another Route</Typography>
      <Box>
        {profile ? (
          <UserInfo
            disposition="left"
            user={profile}
          />
        ) : null}
        <Button variant="contained" onClick={() => msal.logout()}>Logout Example</Button>
    </Box>
    </Box>
  );
};

export default Page;
