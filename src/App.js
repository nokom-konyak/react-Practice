import logo from './logo.svg';
import './App.css';
import UserInput from './Component/HandleUserInput.tsx';
import DataFetcher from './Component/FetchApiData.tsx';
import ThemeProvider from './Component/UseContext/ThemeProviderUseContext.js';
import ThemedButton from './Component/UseContext/ConsumeThemeProvider.jsx';
import Counter from './Component/useReducer/ConsumeCounterReducer.jsx';
import TodoApp from './Component/useReducer/TodoReducer.jsx';
import ReactRouterExample from './Component/ReactRouter/ReactRouter.tsx';
import UseMemoExample from './Component/Memoization/UseMemo.tsx';
import MemoExampleParent from './Component/Memoization/ReactMemo.tsx';
import UseCallBackParent from './Component/Memoization/UseCallBack_Memo.tsx';
import DOMAccessUseRef from './Component/UseRef/DomAccessUseRef.tsx';
import PersistValueUseRef from './Component/UseRef/PersistValueBetweenRenderUseRef.tsx';
import PreviousValueUseRef from './Component/UseRef/PrevValueUseRef.tsx';
import LazyLoadingExample from './Component/LazyLoading/LazyLoading.tsx';
import FunctionCallDebounced from './Component/Debounce/FunctionCallDebounce.tsx';
import DebounceWithRef from './Component/Debounce/UseRefDebounce.tsx';
import FixedSizeListExample from './Component/OptimizationOfLargeList/FixedSizeList.tsx';
import VariableSizeListExample from './Component/OptimizationOfLargeList/VariableSizeList.tsx';
import GridVirtualizationExample from './Component/OptimizationOfLargeList/GridVirtualization.tsx';
import ConsumeLocStorageUseState from './Component/StateSyncWithLocStorage/ConsumeLocStorageUseState.jsx';
import ConsumeCounterSlice from './Component/Store_CreateSlice/ConsumeCounterSlice.jsx';

function App() {
  return (
    // // useContext Example
    // <ThemeProvider>
    //   <div style={{ padding: "2rem" }}>
    //     <h1>useContext Example</h1>
    //     <ThemedButton />
    //   </div>
    // </ThemeProvider>

    // <Counter />

    // <TodoApp/>

    // <ReactRouterExample />

    // <UseMemoExample/>
    // <MemoExampleParent/>
    // <UseCallBackParent/>
    // <DOMAccessUseRef />
    // <PersistValueUseRef />
    // <PreviousValueUseRef />
    // <LazyLoadingExample />
    // <FunctionCallDebounced />
    // <DebounceWithRef />
    // <FixedSizeListExample />
    // <VariableSizeListExample />
    // <GridVirtualizationExample  />
    // <ConsumeLocStorageUseState />

    <ConsumeCounterSlice />
  );
}

export default App;
