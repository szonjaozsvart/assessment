import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function Header() {
  return (
    <Grid
      display="flex"
      backgroundColor="#9CC3D5FF"
      alignItems="center"
      justifyContent="center"
      borderRadius={2}
    >
      <Typography sx={{fontWeight:"bold", fontSize:"large", color:"#1769aa"}} margin={3}>
      NO MORE DRAMA - LLAMA WITH TRANSLATING NUMBERS AGAIN!
      </Typography>
    </Grid>
  );
}

export default Header;
