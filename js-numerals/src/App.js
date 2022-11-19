import React, { useState } from "react";
import validator from "validator";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Container } from "@mui/system";
import Header from "./components/Header";
import FormField from "./components/FormField";
import whereTheMagicHappens from "./service/whereTheMagicHappens";
import "./App.css";

function App() {
  const [givenNumber, setGivenNumber] = useState("");
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const handleTranslate = (e) => {
    e.preventDefault();
    setResult("");
    if (validator.isEmpty(givenNumber)) {
      setShowError(true);
      setErrorMessage("Please write a number into the empty field!");
      return;
    }
    setShowError(false);
    const calculation = whereTheMagicHappens(givenNumber);
    setResult(calculation);
  };

  return (
    <Grid>
      <Header />
      <Grid
      backgroundColor="#9CC3D5FF"
        borderRadius={3}
        align="center"
        justifyContent="center"
        margin={5}
        minHeight={350}
        paddign={4}
      >
        <br />
        <Typography variant="h4" margin={3} component="span" color="primary">
          How can we describe this number with words?
        </Typography>
        <Container align="center" maxWidth="xs" >
          {showError && (
            <Alert severity="error" variant="outlined">
              <AlertTitle align="center" color="red" >{errorMessage}</AlertTitle>
            </Alert>
          )}
          <br />
        </Container>
        <br/>
        <Container maxWidth="sm">
          <Typography align="center" component="span">
            <form onSubmit={handleTranslate}>
              <FormField
                name="givenData"
                color="primary"
                type="number"
                label="Give me the number"
                icon={<AutorenewIcon fontSize="large" />}
                value={givenNumber}
                onChange={setGivenNumber}
              />
              <br />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                title="Translate it!"
              >
                Translate it!
              </Button>
            </form>
            <br />
          </Typography>
        </Container>{!result ? null : (
        <Typography 
        backgroundColor="#EBECEB" 
        borderRadius={4}
        borderColor="black"
        border={1}
        maxWidth={400}
        padding={1}>The desired answer is: {result} </Typography>)
}
      </Grid>
    </Grid>
  );
}

export default App;
