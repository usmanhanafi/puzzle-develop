import React from "react";
import BoardComponent from "../BoardComponent";
import KalahComponent from "../KalahComponent";
import "./style.css";

export default class PuzzleComponent extends React.Component {
  // componentDidMount() {
  //   this.myInterval = setInterval(() => {
  //     const { seconds, minutes } = this.props;

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
  
  render() {
    const { minutes, seconds } = this.props;
    
    if(minutes === 0 && seconds === 0){
      return(<KalahComponent />);
    } else {
         return(
          <div>
            <div>
            <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
          </div>
        <div className="puzzle">
        {<BoardComponent
          size={this.props.size}
          board={this.props.board}
          updateBoard={this.props.updateBoard.bind(this)}
          
        />}
      </div>
          </div>
         )
      }
    
    }  
}
