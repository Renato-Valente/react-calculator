import { useState } from 'react'
import './App.css'
import NumberBox from './components/buttons/NumberBox.tsx'
import DeleteBox from './components/buttons/DeleteBox.tsx'
import ClearBox from './components/buttons/ClearBox.tsx';
import OperatorBox from './components/buttons/OperatorBox.tsx';
import EqualsBox from './components/buttons/EqualsBox.tsx';

import Screen from './components/Screen.tsx';


function App() {

  const [screenValue, setScreenValue] = useState('0');
  const [lastValue, setLastValue] = useState(' ');

  return (
    <>
      <div className="container">

        <Screen lastValue={lastValue} currentValue={screenValue}/>

        <div className="bottom-container">
            <ClearBox setScreen={setScreenValue} setLastValue={setLastValue}/>
            <DeleteBox setScreen={setScreenValue}/>
            <OperatorBox value={'/'} screenValue={screenValue} setScreenValue={setScreenValue} setLastValue={setLastValue}/>
            <NumberBox value={'1'} setScreen={setScreenValue}/>
            <NumberBox value={'2'} setScreen={setScreenValue}/>
            <NumberBox value={'3'} setScreen={setScreenValue}/>
            <OperatorBox value={'*'} screenValue={screenValue} setScreenValue={setScreenValue} setLastValue={setLastValue}/>
            <NumberBox value={'4'} setScreen={setScreenValue}/>
            <NumberBox value={'5'} setScreen={setScreenValue}/>
            <NumberBox value={'6'} setScreen={setScreenValue}/>
            <OperatorBox value={'+'} screenValue={screenValue} setScreenValue={setScreenValue} setLastValue={setLastValue}/>
            <NumberBox value={'7'} setScreen={setScreenValue}/>
            <NumberBox value={'8'} setScreen={setScreenValue}/>
            <NumberBox value={'9'} setScreen={setScreenValue}/>
            <OperatorBox value={'-'} screenValue={screenValue} setScreenValue={setScreenValue} setLastValue={setLastValue}/>
            <NumberBox value={'.'} setScreen={setScreenValue}/>
            <NumberBox value={'0'} setScreen={setScreenValue}/>
            <EqualsBox setScreen={setScreenValue} setLastValue={setLastValue} lastValue={lastValue}/>
            
        </div>
      </div>
    </>
  )
}

export default App
