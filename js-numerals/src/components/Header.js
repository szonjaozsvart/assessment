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
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: "large", color: "#C2B280" }}
        margin={3}
      >
        NO MORE DRAMA - LLAMA WITH TRANSLATING NUMBERS AGAIN!
      </Typography>
    </Grid>
  );
}

export default Header;
