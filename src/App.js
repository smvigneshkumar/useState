// import { useState } from "react";
// function App(props) {
//   const [state, setState] = useState({ age: 32, siblingsNum: 1 });
//   let handleAge = (val) => {
//     console.log([val]);
//     setState({ ...state, [val]: state[val] + 1 });
//   };
//   const { age, siblingsNum } = state;
//   return (
//     <div>
//       <h1>I am {age} years old</h1>
//       <h1>Number of siblings {siblingsNum}</h1>
//       <button onClick={handleAge.bind(null, "age")}>Get Older</button>
//       <button onClick={handleAge.bind(null, "siblingsNum")}>
//         More siblings
//       </button>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";
// function App(props) {
//   const [state] = useState(()=>{
//     let token = window.localStorage.getItem("token");
//     return token || "default#-token#";
//   });
//   return (
//     <div>
//       <h1>Token {state}</h1>
//     </div>
//   );
// }
// export default App;

import { useState } from "react";
function App(props) {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);
  let handleReset = () => {
    setState(0);
  };
  let handleAdd = (prevState) => {
    setState((prevState) => prevState + 1);
  };
  let handleMinus = (prevState) => {
    setState((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };

  let handleCount = (prevState) => {
    setCount((prevState) => prevState + 2);
  };
  return (
    <div>
      <h1>Count: {state}</h1>
      <h1>New Count: {count}</h1>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handleCount}>Increment +2</button>
    </div>
  );
}
export default App;
