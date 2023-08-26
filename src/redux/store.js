import { createStore } from 'redux'
import reducer from './reducer/reducer';
import phonereducer from './reducer/phonereducer';


let store = createStore(reducer);

let phonestore = createStore(phonereducer);

// export default store 
export default phonestore