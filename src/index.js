import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import image from './me.jpg'

class StateManagement extends React.Component {
  constructor () {
    super()
    this.state = {year : 'Third'}
  }
  
  first = () => this.setState({year : 'First'})
  second= () => this.setState({year : 'Second'})
  third = () => this.setState({year : 'Third'})
  fourth = () => this.setState({year : 'Fourth'})

  render () {
    return (
      <div>
        <h1><b>ATHI KESAVAN</b></h1>
        <div>
          <img src={image} alt='image'></img>
        </div>

        <h2 id="super"><u>ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</u></h2>
        <h3><i>I am a <span class = "ds">Smart Boy</span></i></h3>
        <h1>I am studying {this.state.year} Year</h1>
        <button type='button' onClick={this.first}>First</button>
        <button type='button' onClick={this.second}>Second</button>
        <button type='button' onClick={this.third}>Third</button>
        <button type='button' onClick={this.fourth}>Fourth</button>
      </div>
    );  
  }
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateManagement/>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();