import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function Header() {
  return (
    <Grid
      display="flex"
      backgroundColor="#1769AA"
      alignItems="center"
      justifyContent="center"
      padding={3}
    >
      <Typography
        align="center"
        variant="h5"
        sx={{ fontWeight: "bold", color: "#C2B280" }}
      >
        NO MORE DRAMA - LLAMA WITH CONVERTING NUMBERS AGAIN !
      </Typography>
    </Grid>
  );
}

export default Header;
