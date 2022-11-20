import React, { useState } from "react";
import validator from "validator";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Container } from "@mui/system";
import CopyrightIcon from "@mui/icons-material/Copyright";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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
    if (givenNumber.length > 9) {
      setShowError(true);
      setErrorMessage("The inserted number must be under 1 trillion!");
      return;
    }
    for (let i = 0; i < givenNumber.length; i++) {
      if (
        givenNumber[i] === "-" ||
        givenNumber[i] === "." ||
        givenNumber[i] === ","
      ) {
        setShowError(true);
        setErrorMessage("Please insert only numbers into the field!");
        return;
      }
    }
    setShowError(false);
    const calculation = whereTheMagicHappens(givenNumber);
    setResult(calculation);
  };

  return (
    <Grid>
      <Header />
      <ImageList variant="masonry" cols={4} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Grid
        backgroundColor="#9CC3D5FF"
        align="center"
        justifyContent="center"
        minHeight={250}
      >
        <br />
        <Typography variant="h4" component="span" margin={3} color="primary">
          The number, you would like to convert to words is..
        </Typography>
        <Container align="center" maxWidth="xs">
          {showError && (
            <Alert severity="error" variant="outlined">
              <AlertTitle align="center" color="red">
                {errorMessage}
              </AlertTitle>
            </Alert>
          )}
          <br />
        </Container>
        <br />
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
        </Container>
        {!result ? null : (
          <Typography color="primary" variant="h5" padding={1}>
            The desired answer is {result} !
          </Typography>
        )}
      </Grid>
      <ImageList variant="masonry" cols={4} gap={5}>
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={15}
      >
        <CopyrightIcon
          sx={{ maxWidth: 20, maxHeight: 14, fontWeight: "bold" }}
        />
        2022 No Drama-Llama
      </Typography>
    </Grid>
  );
}

export default App;

const itemData = [
  {
    img: "https://bellepaga.com/img/cms/Alpaga%20Lama/Alpaga%20souriant%20desert.jpg",
    title: "Llama 1.",
  },
  {
    img: "https://i.ytimg.com/vi/W0uf2O575H0/maxresdefault.jpg",
    title: "Llama 2.",
  },
  {
    img: "https://cms.qz.com/wp-content/uploads/2017/08/llama.jpg?quality=75&strip=all&w=200&h=200",
    title: "Llama 3.",
  },
  {
    img: "https://media.king5.com/assets/KING/images/a72c7394-6730-494d-8e40-dc85e3499aaf/a72c7394-6730-494d-8e40-dc85e3499aaf_1920x1080.jpg",
    title: "Llama 4.",
  },
];

const itemData2 = [
  {
    img: "https://i0.wp.com/earthshinenc.com/wp-content/uploads/2020/07/IMG_8965.jpg?fit=1920%2C1080&ssl=1",
    title: "Llama 5.",
  },
  {
    img: "https://dcom-prod.imgix.net/files/2019-06/Las%20alpacas%20del%20sur.jpg?w=1280&h=720&crop=faces&fit=crop&auto=compress&q=75",
    title: "Llama 6.",
  },
  {
    img: "https://bellepaga.com/img/cms/Alpaga%20Lama/Cam%C3%A9lid%C3%A9s.jpg",
    title: "Llama 7.",
  },
  {
    img: "https://d.newsweek.com/en/full/1245050/12-5-alpaca.webp?w=1600&h=900&q=88&f=a4d3f549a5795aeee7518459f9214bec",
    title: "Llama 8.",
  },
];
