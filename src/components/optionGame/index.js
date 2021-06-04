import React, { Component } from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import Chip from "@material-ui/core/Chip";
import { Button } from "@material-ui/core";
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import { Link } from "react-router-dom";
import './index.css';

export default class OptionGame extends Component {
  newGame(size) {
      let board = new Array(size * size);
      for (let i = 0; i < size * size; ++i) board[i] = i;
      board = this.shuffle(board);
      this.updateBoard(board, size);
      this.setState({ size: size });
      console.log("size = ", size);

    }
    updateBoard(board, size) {
      this.setState({ board: board });
    }
    shuffle(o) {
      const temp = o.slice();
      for(var j, x, i = temp.length; i; j = Math.floor(Math.random() * i), x = temp[--i], temp[i] = temp[j], temp[j] = x);
      return temp;
    }
  render() {
 
    return (
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
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <div className="tombol-mulai">
        <Link
          className="bol-mulai"
          variant="contained"
          size="medium"
          as={Button}
          to="/game"
          onClick={this.newGame.bind(this, value)}
        >
          Mulai
        </Link>
      </div>
    </div>
    )
  }
}