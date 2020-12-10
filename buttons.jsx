import React, { Component } from "react";
import "../App.css";
class Button extends Component {
  state = {};

  render() {
    return (
      <div
        className="col-sm-8 col-md-4"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div tabIndex="1" onKeyPress={(event)=>this.props.handleKeyPress(event)}>
          <label
            className="col-12" 
          >
            {this.props.exp}
          </label>
          <label className="col-12">
              {this.props.result}
          </label>
        </div>
        <div>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="CE"
          >
            CE
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="C"
          >
            C
          </button>
          <button className="col-3" onClick={(event) => this.props.evaluateExpression(event)} name="B">
            back
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="%"
          >
            mod
          </button>

          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="7"
          >
            7
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="8"
          >
            8
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="9"
          >
            9
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="*"
          >
            x
          </button>

          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="4"
          >
            4
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="5"
          >
            5
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="6"
          >
            6
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="-"
          >
            -
          </button>

          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="1"
          >
            1
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="2"
          >
            2
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="3"
          >
            3
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="+"
          >
            +
          </button>

          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="."
          >
            .
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="0"
          >
            0
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="="
          >
            =
          </button>
          <button
            className="col-3"
            onClick={(event) => this.props.evaluateExpression(event)}
            name="/"
          >
            ÷
          </button>
        </div>
      </div>
    );
  }
}

export default Button;
