import React, { useReducer } from 'react'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action)=>{
    //return newState
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state

    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState : count, countDispatch : dispatch}}>
      <div className="App">
      <UserForm/>
      {/* <CounterTwo/>
      <CounterOne/> */}
{/*       <DocTitleTwo/>
      <DocTitleOne/> */}
      {/* <HookTimer/> */}
      {/* <ClassTimer/> */}
      {/* <FocusInput/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      {/* <DataFetchingTwo/> */}
        {/* <DataFetchingOne/> */}
       {/*  Count - {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/> */}
      </div>
    </CountContext.Provider>
  )
}

export default App
