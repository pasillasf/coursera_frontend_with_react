// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//       <h1>Hello World</h1>
//   );
// }

// export default App;

// function App(props) {
//     const currDate = new Date();
  
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
  
//   export default App;

function App(props) {
    const currDate = new Date();
  
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  export default App;