import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import Chip from "@material-ui/core/Chip";
import { Button } from "@material-ui/core";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Container from "@material-ui/core/Container";
import PuzzleComponent from "../../../components/PuzzleComponent";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [1, 2, 3, 4, 5, 6, 7, 8, 0],
      size: 3,
      whichComponentToShow: "ImageSlider",
    };
  }
  render() {
    if (this.state.whichComponentToShow === "ImageSlider") {
      return (
        <Container maxWidth="md" className="containerku">
          <Grid container md xs className="kanan">
            <Fab size="small" className="icon-musik">
              <MusicNoteIcon className="warna-utama" />
            </Fab>
          </Grid>
          <Grid container>
            <Grid md={6} xs className="grit">
              <div className="logoku">
                <img
                  className="logo-home"
                  src={"/assets/images/logo.png"}
                  alt={"logo"}
                />
              </div>
            </Grid>
            <Grid md={4} xs>
              <div className="block-list">
                <Accordion className="listoption">
                  <AccordionSummary
                    expandIcon={
                      <span className="arrbtn">
                        <ExpandMoreIcon className="arrowbtn" />
                      </span>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="judul-list">
                      <div className="ico-awal">
                        <div className="icon-awal">
                          <SportsEsportsOutlinedIcon />
                        </div>
                        <div>
                          <strong>Pilih Levelmu</strong>
                        </div>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="option-yo">
                      <Chip
                        className="option-you"
                        label="3x3"
                        component="a"
                        href="#"
                        clickable
                        value={3}
                      />
                      <Chip
                        className="option-you"
                        label="5x5"
                        component="a"
                        href="#"
                        clickable
                        value={3}
                      />
                      <Chip
                        className="option-you"
                        label="7x7"
                        component="a"
                        href="#"
                        clickable
                        value={3}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="listoption">
                  <AccordionSummary
                    expandIcon={
                      <span className="arrbtn">
                        <ExpandMoreIcon className="arrowbtn" />
                      </span>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="judul-list">
                      <div className="ico-awal">
                        <div className="icon-awal">
                          <AccessTimeOutlinedIcon />
                        </div>
                        <div>
                          <strong>Pilih Durasi Main</strong>/ Menit
                        </div>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="option-yo">
                      <Chip
                        className="option-you"
                        label="3 mnt"
                        component="a"
                        href="#"
                        clickable
                      />
                      <Chip
                        className="option-you"
                        label="5 mnt"
                        component="a"
                        href="#"
                        clickable
                      />
                      <Chip
                        className="option-you"
                        label="10 mnt"
                        component="a"
                        href="#"
                        clickable
                        onClick={this.newGame.bind(this, 3)}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
                <div className="tombol-mulai">
                  <Button
                    className="bol-mulai"
                    variant="contained"
                    size="medium"
                    onClick={() => {
                      this.setState({ whichComponentToShow: "Header" });
                    }}
                  >
                    Mulai
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid md={2} xs></Grid>
          </Grid>
        </Container>
      );
    } else if (this.state.whichComponentToShow === "Counter") {
      return <PuzzleComponent />;
    }
    return null;
  }
}
