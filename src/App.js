import "./App.css";
import LaptopComp from "./components2/LaptopComp";
import PhoneComp from "./components2/PhoneComp";
/* import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
import initialState from "./redux/store";
const store = createStore(reducer, initialState); */

function App() {
  return (
    <div className="App">
      <h1>Clarus Shop</h1>
      <LaptopComp/>
      <PhoneComp/>
    </div>
);
}
export default App;

    {/* <Provider store={store}>
      <div className="App">
        <h1>Clarus TEST</h1>
        <ComponentA />
        <ComponentB />
      </div>
    </Provider> */}

