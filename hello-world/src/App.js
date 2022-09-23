//import logo from './logo.svg';
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/*<EventBind/>
      <Message/>*/}
      {/*<FunctionClick/>
      <ClassClick/>*/}
      {/*<Counter addVal={13}/>*/}
      {/*<Hello name="Crazyyy">
        <p>This is my Life</p>
      </Hello>
      <Greet name="Shreyans" heroName="Spider Man"/>
      <Welcome name="Kashish" heroName="Iron Man">
        <p>
          This is a Class Component
        </p>
      </Welcome>*/}
      {/*<Greet name='Shreyans' heroName='Super Man'/>
      <Welcome name ='Kashish' heroName='Bat Man'/>*/}
    </div>
  );
}

export default App;
