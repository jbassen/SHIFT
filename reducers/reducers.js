import { combineReducers } from 'redux'
import * as _ from 'lodash'
import { TopLevel } from '../assets/activity'

const activity = (state = {problem: '', input: '', output: '', answer: '', response: ''}, action) => {
  switch(action.type) {
    case 'NEXT_ACTIVITY':
      let activity = TopLevel.generate()
      state['problem'] = 'asdf' //activity.getProblem()
      // state.input = activity.getInput()
      // state.output = activity.getOutput()
      // state.answer = ''
      // state.response = ''
      console.log(state)
      return state
    case 'GRADE_ACTIVITY':
      // let runCode = 'var list = ' + state.input + '\n'
      // runCode += action.answer
      // runCode += '\n' + 'return fun(list)'
      // let runResult = eval(runCode).toString()
      // if (runResult === state.output) {
      //   state.response = 'THAT\'S CORRECT!'
      // } else {
      //   state.response = 'THAT\'S INCORRECT!'
      // }
      return state
    default:
      return state
  }
}


const rootReducer = combineReducers({
  activity
})

export default rootReducer
