import React from 'react';

/* function App() {
  const locale = 'en';
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

  return <div>Hello {value}. The current time is {time}</div>;
}

export default App; */


class App extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="App">
        <p>Hello World!</p>
        <p>Current Date And Time : {this.state.curDT}</p>
      </div>
    );
  }
}

export default App;