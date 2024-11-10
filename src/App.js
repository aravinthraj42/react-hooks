import './App.css';

import React from 'react';
import Useinput from './Components/CustomHook/Useinput';
// import CounterOne from './Components/CustomHook/CounterOne';
// import CounterTwo from './Components/CustomHook/CounterTwo';

// import FocusInput from './Components/Ref/FocusInput'
// import ClassTimer from './Components/Ref/ClassTimer'
// import HookTimer from './Components/Ref/HookTimer'
// import DocTitleOne from './Components/CustomHook/DocTitleOne';
// import DocTitleTwo from './Components/CustomHook/DocTitleTwo';
// import ParentComponent from './Components/Callback/ParentComponent';
// import Counter from './Components/Memo/Counter'
// import DataFetchingOne from './Components/Reducer/DataFetchingOne'
// import DataFetchingTwo from './Components/Reducer/DataFetchingTwo';
// import React, { useReducer } from 'react';
// import ComponentC from './Components/Reducer/ComponentC';
// import ComponentA from './Components/Reducer/ComponentA';
// import ComponentB from './Components/Reducer/ComponentB';

// import CounterOne from './Components/Reducer/CounterOne';
// import CounterThree from './Components/Reducer/CounterThree';

// import ClassCounter from './Components/ClassCounter'
// import HookCounter from './Components/HookCounter'
// import HookCounterTwo from './Components/HookCounterTwo'
// import HookCounterThree from './Components/HookCounterThree'
// import HookCounterFour from './Components/HookCounterFour'
// import ClassCounterOne from './Components/ClassCounterOne'
// import HookCounterOne from './Components/HookCounterOne'
// import ClassMouse from './Components/ClassMouse'
// import HookMouse from './Components/HookMouse'
// import MouseContainner from './Components/MouseContainner'
// import IntervalClassCounter from './Components/IntervalClassCounter'
// import IntervalHookCounter from './Components/IntervalHookCounter'
// import DataFecthing from './Components/DataFecthing'
// import ComponentA from './Components/Context/ComponentA';
// export const UseContext = React.createContext()
// export const ChannelContext = React.createContext()

export const UserContext = React.createContext()

// const initialState =0 ;
// const reducer = (state, action) => {
//     switch(action){
//         case 'increment':
//          return state + 1
//         case 'decrement':
//          return state - 1
//         case 'reset':
//         return initialState
//         default:
//           return state
//     }
// }


function App() {
return (
  <div className="App">
    {/* <ParentComponent /> */}
    {/* <Counter /> */}
{/* <DataFetchingOne /> */}
{/* <DataFetchingTwo /> */}
{/* <ClassTimer />
<HookTimer /> */}
{/* <DocTitleOne />
<DocTitleTwo /> */}
{/* <FocusInput /> */}

{/* <CounterOne />
<CounterTwo /> */}
    <Useinput />
     </div>
)

  // use Reducer
//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
// <UserContext.Provider value = {{
// contState: count, countDispatch: dispatch
// }}>
// <div className="App">
//   <h2> count - {count}</h2>
// <ComponentA />
// <ComponentB />
// <ComponentC />
// </div>
// </UserContext.Provider>

// Use State and Use Effect, use Context  
      // {/* <ClassCounter />
      // <HookCounter /> */}
      // {/* < HookCounterTwo /> */}
      // {/* <HookCounterThree /> */}
      // {/* <HookCounterFour /> */}
      // {/* <ClassCounterOne /> */}
      // {/* <HookCounterOne /> */}
      // {/* <ClassMouse /> */}
      // {/* <HookMouse /> */}
      // {/* <MouseContainner /> */}
      // {/* <IntervalClassCounter />
      // <IntervalHookCounter /> */}
      // {/* <DataFecthing /> */}
      // {/* <UseContext.Provider value = {'Aravinth'}>
      //   <ChannelContext.Provider value = {'the codings Channel'}>
      //   <ComponentA/>
      //   </ChannelContext.Provider>
      // </UseContext.Provider> */}
      // {/* <CounterOne /> */}
      // {/* <CounterThree /> */}

  // )
}

export default App;
