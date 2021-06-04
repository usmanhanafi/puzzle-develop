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
import PuzzleComponent from "./components/PuzzleComponent";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [1, 2, 3, 4, 5, 6, 7, 8, 0],
      size: 3,
      whichComponentToShow: "home",
      minutes: 3,
      seconds: 0,
    };
  }
  // componentDidMount() {
  //   this.myInterval = setInterval(() => {
  //     const { seconds, minutes } = this.state;

  //     if (seconds > 0) {
  //       this.setState(({ seconds }) => ({
  //         seconds: seconds - 1,
  //       }));
  //     }
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         clearInterval(this.myInterval);
  //       } else {
  //         this.setState(({ minutes }) => ({
  //           minutes: minutes - 1,
  //           seconds: 59,
  //         }));
  //       }
  //     }
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.myInterval);
  // }
  menuTimer(minutes){
    this.setState({minutes:minutes})
  }
  newGame(size) {
    let board = new Array(size * size);
    for (let i = 0; i < size * size; ++i) board[i] = i;
    board = this.shuffle(board);
    this.updateBoard(board, size);
    this.setState({ size: size });
    console.log("board: ", board);
  }
  updateBoard(board, size) {
    this.setState({ board: board });
  }
  shuffle(o) {
    const temp = o.slice();
    for (
      var j, x, i = temp.length;
      i;
      j = Math.floor(Math.random() * i),
        x = temp[--i],
        temp[i] = temp[j],
        temp[j] = x
    );
    return temp;
  }
  ButtonClick = () => {
    this.setState({ whichComponentToShow: "puzzle" });
      this.myInterval = setInterval(() => {
        const { seconds, minutes } = this.state;
  
        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1,
          }));
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(this.myInterval);
          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes - 1,
              seconds: 59,
            }));
          }
        }
      }, 1000);
    
  };
  render() {
    
    if (this.state.whichComponentToShow === "home") {
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
                        onClick={this.newGame.bind(this, 3)}
                      />
                      <Chip
                        className="option-you"
                        label="5x5"
                        component="a"
                        href="#"
                        clickable
                        onClick={this.newGame.bind(this, 5)}
                      />
                      <Chip
                        className="option-you"
                        label="7x7"
                        component="a"
                        href="#"
                        clickable
                        onClick={this.newGame.bind(this, 7)}
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
                        onClick={this.menuTimer.bind(this, 3)}
                      />
                      <Chip
                        className="option-you"
                        label="5 mnt"
                        component="a"
                        href="#"
                        clickable
                        onClick={this.menuTimer.bind(this, 5)}
                      />
                      <Chip
                        className="option-you"
                        label="10 mnt"
                        component="a"
                        href="#"
                        clickable
                        onClick={this.menuTimer.bind(this, 10)}
                        // onClick={this.newGame.bind(this, 3)}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
                <div className="tombol-mulai">
                  <Button
                    className="bol-mulai"
                    variant="contained"
                    size="medium"
                    onClick={this.ButtonClick}
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
    } else if (this.state.whichComponentToShow === "puzzle") {
      return (
        <PuzzleComponent
          size={this.state.size}
          board={this.state.board}
          updateBoard={this.updateBoard.bind(this)}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
      );
    }
    return null;
  }
}
