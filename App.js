import React, { Component } from "react";
import Button from "./components/buttons";

class App extends Component {
  state = {
    expression: "",
    result: "",
  };
  evaluate = (e) => {
    let len=this.state.expression.length
    let lastValue = this.state.expression[len-1]
    const regex=/^(\+|-|\*|\/|\||%|\^|\(|\))$/
    if(e.target.name==='='){
      this.calculate()
    }
    else if(e.target.name==='C'){
      this.cancel()
    }
    else if(e.target.name==='B'){
      this.back()
    }
    else if(e.target.name==='CE'){
      this.clearLast()
    }
    else if((lastValue === '%'|| lastValue === '/' || lastValue==='+' ||lastValue==='-'||lastValue==='*') && e.target.name.match(regex)){
      let temp = this.state.expression.slice(0,-1)
      this.setState({
        expression: temp+e.target.name
      })
    }
    else{
      this.setState({
        expression: this.state.expression + e.target.name,
      });
  
    }
      };
  calculate = () => {
    let len=this.state.expression.length
    let lastValue = this.state.expression[len-1]
    let temp = this.state.expression
    if(lastValue === '%'|| lastValue === '/' || lastValue==='+' ||lastValue==='-'||lastValue==='*'){  
      this.setState({
        result: (eval(temp.slice(0,-1)) || ""),
      });
      
    }
    else{
        this.setState({
          result: (eval(temp) || ""),
        });
    }
  };
  clearLast=()=>{
    let len=this.state.expression.length
    let temp = this.state.expression
    const regex=/^(\+|-|\*|\/|\||%|\^|\(|\))$/
    for(let i=len-1; i>=0;i--){
      if(temp[i].match(regex)){
        this.setState({
         expression: this.state.expression.slice(0,i)
        })
        break
      }
    }
    return
  }
  cancel = () => {
    this.setState({
      expression: "",
      result:""
    });
  };
  back=()=>{
    return this.state.expression.length > 0? this.setState({
      expression: this.state.expression.slice(0,-1)
    }):null
  }
  handleKey=(e)=>{
    if(e.key==='Enter'){
      this.calculate()
    }
    else{
      this.setState({
        expression: this.state.expression + e.key
      })
      
    }
      
    
  }
  render() {
    return (
      <div>
        <Button
          exp={this.state.expression}
          result={this.state.result}
          evaluateExpression={this.evaluate}
          handleKeyPress={this.handleKey}
        />
      </div>
    );
  }
}
export default App;
