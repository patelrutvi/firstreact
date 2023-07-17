
import { Provider } from 'react-redux';

import CounterFun from './containers/CounterFun';
import Country from './containers/Country';
import CountryFun from './containers/CountryFun';
import Course from './containers/Course';
import Employe from './containers/Employe';
import EmployeFun from './containers/EmployeFun';
import Students from './containers/Students';
import StudentsFun from './containers/StudentsFun';
import { configureStore } from './redux/Store';
import Counter from './containers/counter/Counter';

function App() {

  const store = configureStore();

  return (

    <>
      <Provider store={store}>
        {/* <Employe /> */}
        {/* <Course /> */}
        {/* <EmployeFun /> */}
        {/* <Counter /> */}
        {/* <CounterFun /> */}
        {/* <Country />
        <CountryFun /> */}
        <Counter />
        
      </Provider>
    </>

  );
}

export default App;
