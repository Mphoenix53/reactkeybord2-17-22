import logo from './logo.svg';
import './App.css';

import Keybord, {x,y} from './keybord.js'

function App() {
  
  const handleClick = ()=>{
    y()
    console.log('clicked')
  }
  return (
    <div className="App">
      {x}
      <h1 className='m-h'>Hello!</h1>
      
      <Keybord title={'Keybord'}/>
      
    </div>
  );
}

export default App;
