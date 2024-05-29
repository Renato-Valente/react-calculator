import { useState } from 'react'
import './App.css'
import NumberBox from './components/NumberBox.tsx'
import DeleteBox from './components/DeleteBox.tsx'
import ClearBox from './components/ClearBox.tsx';
import OperatorBox from './components/OperatorBox.tsx';
import EqualsBox from './components/EqualsBox.tsx';


function App() {

  const [screenValue, setScreenValue] = useState('0');

  return (
    <>
      <div className="container">
        <div className="top-container">
          {screenValue}
        </div>

        <div className="bottom-container">
            <ClearBox setScreen={setScreenValue}/>
            <DeleteBox setScreen={setScreenValue}/>
            <OperatorBox value={'/'}/>
            <NumberBox value={'1'} setScreen={setScreenValue}/>
            <NumberBox value={'2'} setScreen={setScreenValue}/>
            <NumberBox value={'3'} setScreen={setScreenValue}/>
            <OperatorBox value={'*'}/>
            <NumberBox value={'4'} setScreen={setScreenValue}/>
            <NumberBox value={'5'} setScreen={setScreenValue}/>
            <NumberBox value={'6'} setScreen={setScreenValue}/>
            <OperatorBox value={'+'}/>
            <NumberBox value={'7'} setScreen={setScreenValue}/>
            <NumberBox value={'8'} setScreen={setScreenValue}/>
            <NumberBox value={'9'} setScreen={setScreenValue}/>
            <OperatorBox value={'-'}/>
            <NumberBox value={'.'} setScreen={setScreenValue}/>
            <NumberBox value={'0'} setScreen={setScreenValue}/>
            <EqualsBox setScreen={setScreenValue}/>
            
        </div>
      </div>
    </>
  )
}

export default App
