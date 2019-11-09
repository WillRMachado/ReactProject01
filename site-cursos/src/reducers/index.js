import {combineReducers} from 'redux';
import cursoReducer from './curso-reducer'
import contatoReducer from './contato-reducer'


const reducers = combineReducers({
    contato:contatoReducer,
    curso:cursoReducer

})


export default reducers