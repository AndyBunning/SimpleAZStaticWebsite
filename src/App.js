import React from 'react';

function App() {
  const value = 'World';
  const locale = 'en';
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

  return <div>Hello {value}. The current time is {time}</div>;
}

export default App;
