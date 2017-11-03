import AceEditor from 'react-ace'
import brace from 'brace'
import React from 'react'
import ReactDOM from 'react-dom'
import Container from './src/components/container'
import { connect } from 'react-redux'

import './node_modules/brace/mode/javascript'
import './node_modules/brace/snippets/javascript'
import './node_modules/brace/theme/monokai'
import './node_modules/brace/ext/language_tools'
import './node_modules/brace/ext/searchbox'


export default class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue) {
    console.log('change', newValue)
    this.problemText = newValue
  }

  render() {
    return (
      <div style={{width: '1020px'}}>
          <div style={{
            fontSize: '20px',
          }}
          >
            <div style={{
              width: '100%',
              padding: "8px 20px",
              fontSize: '30px',
              fontFamily: 'arial',
              textDecoration: 'underline'
            }}>
              Program Synthesis Problems
            </div>
            <div style={{
              width: '100%',
              padding: "8px 20px",
              fontSize: '20px',
              lineHeight: '2em',
              fontFamily: 'arial'
            }}>
              {this.props.problemText}
            </div>
          </div>
          <AceEditor
            width="100%"
            fontSize="20px"
            mode="javascript"
            theme="monokai"
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling: true}}
          />
          <button style={{
              backgroundColor: 'green',
              border: 'none',
              color: 'white',
              padding: '8px 24px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '20px',
              borderRadius: '2px'
          }}>GRADE</ button>
          <button style={{
              float: 'right',
              backgroundColor: 'teal',
              border: 'none',
              color: 'white',
              padding: '8px 24px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '20px',
              borderRadius: '2px'
          }}>NEXT PROBLEM</ button>
          <div style={{width: '100%', padding: "8px 20px", fontSize: '20px', lineHeight: '2em', fontFamily: 'arial'}}>{this.props.responseText}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// const defaultValue = `const onLoad = (editor) => {
//     console.log('i\'ve loaded');
// };`;
//
// const App = React.createClass({
//     getInitialState() {
//         return {
//             theme: 'monokai',
//             fontSize: 14,
//             height: '6em',
//             value: defaultValue,
//         };
//     },
//     reloadProps() {
//         this.setState({
//             theme: 'solarized_light',
//             fontSize: 40,
//             height: '8em',
//             value: 'I am changed',
//         });
//     },
//     logValue() {
//         console.log('Second editor has value: ', this.state.value);
//     },
//     render() {
//         return (
//             <div>
//                 <h1>React Ace Wrapper example using Brace</h1>
//                 <h2>Mode: java, theme: github</h2>
//                 <AceEditor mode="javascript" theme="github" name="blah1" height="6em"
//                     defaultValue={defaultValue}
//                     onChange={(newValue) => console.log('Change in first editor', newValue)} />
//
//                 <h2>Mode: javascript, theme: monokai</h2>
//                 <AceEditor mode="javascript" theme='tomorrow'
//                     fontSize={this.state.fontSize} height={this.state.height}
//                     value={this.state.value} name="blah2"
//                     onLoad={() => console.log('Second editor loaded!')}
//                     onChange={(newValue) => this.setState({value: newValue})} />
//
//                 <button onClick={this.reloadProps}>Update with new props</button>
//                 <button onClick={this.logValue}>Log current value</button>
//             </div>
//         );
//     },
// });

// render(<App />, document.getElementById('react'));


// function onChange(newValue) {
//   console.log('change',newValue);
// }
//
// // Render editor
// ReactDOM.render(
//   <ProblemText/>
//   <AceEditor
//     mode='javascript'
//     theme='tomorrow'
//     onChange={onChange}
//     name='UNIQUE_ID_OF_DIV'
//     editorProps={{$blockScrolling: true}}
//   />
//   <SubmitButton/>
//   <NextButton/>,
//   document.getElementById('root')
// );


// class FunctionGenerator {
//   constructor() {
//     this.rewrites = []
//   }
//   register(fun) {
//     this.rewrites.push(fun)
//   }
//   generate() {
//     return new this.rewrites[Math.floor(Math.random() * this.rewrites.length)]()
//   }
// }
//
// let TopLevel = new FunctionGenerator()
// let AtoA = new FunctionGenerator()
// let AtoBool = new FunctionGenerator()
// let AtoAtoA = new FunctionGenerator()
// let AtoAtoBool = new FunctionGenerator()
//
// class FunctionType {
//   encode() {
//     throw 'You need to implement'
//   }
//   execute() {
//     throw 'You need to implement'
//   }
//   describe() {
//     throw 'You need to implement'
//   }
// }
//
// class MapFun extends FunctionType {
//   constructor() {
//     super()
//     this.func = AtoA.generate()
//   }
//   encode(lst) {
//     return 'map( lambda x: ' + this.func.encode('x') + ' , [' + lst + '] )'
//   }
//   execute(lst) {
//     return 'map( ' + this.func.execute(lst) + ' )'
//   }
//   describe() {
//     return this.func.describe() + ' to each element in the list'
//   }
// }
// TopLevel.register(MapFun)
//
// class ReduceFun extends FunctionType {
//   constructor() {
//     super()
//     this.func = AtoAtoA.generate()
//   }
//   encode(lst) {
//     return 'reduce( lambda (x,y): ' + this.func.encode('x','y') + ' , [' + lst + '] )'
//   }
//   execute(lst) {
//     return 'reduce( ' + this.func.execute(lst) + ' )'
//   }
//   describe() {
//     return this.func.describe() + ' for each element in the list'
//   }
// }
// TopLevel.register(ReduceFun)
//
// class OperateAwithX extends FunctionType {
//   constructor() {
//     super()
//     this.number = Math.random()
//     this.operators = ['*', '+', '-', '%']
//     this.operator = this.operators[Math.floor(Math.random() * this.operators.length)]
//   }
//   encode(x) {
//     return x + this.operator + this.number
//   }
//   execute(x) {
//     return this.number + this.operator + x
//   }
//   describe() {
//     return this.operator + this.number
//   }
// }
// AtoA.register(OperateAwithX)
//
// class SquareA extends FunctionType {
//   constructor() {
//     super()
//   }
//   encode(x) {
//     return x + '^2'
//   }
//   execute(x) {
//     return x + '^' + '2'
//   }
//   describe() {
//     return 'square'
//   }
// }
// AtoA.register(SquareA)
//
// class CompareA extends FunctionType {
//   constructor() {
//     super()
//     this.number = Math.random()
//     this.operators = ['===', '<==', '>==', '>', '<']
//     this.operator = this.operators[Math.floor(Math.random() * this.operators.length)]
//   }
//   encode(x) {
//     return x + this.operator + this.number
//   }
//   execute(x) {
//     return this.number + this.operator + x
//   }
//   describe() {
//     return this.operator + this.number
//   }
// }
// AtoBool.register(CompareA)
// AtoA.register(CompareA)
//
// class OperateAwithA extends FunctionType {
//   constructor() {
//     super()
//     this.operators = ['*', '+', '-', '%']
//     this.operator = this.operators[Math.floor(Math.random() * this.operators.length)]
//   }
//   encode(x,y) {
//     return x + this.operator + y
//   }
//   execute(x, y) {
//     return x + this.operator + y
//   }
//   describe(x, y) {
//     return 'apply ' + this.operator + ' to the values'
//   }
// }
// AtoAtoA.register(OperateAwithA)
//
// class CompareAtoA extends FunctionType {
//   constructor() {
//     super()
//     this.number = Math.random()
//     this.operators = ['===', '<==', '>==', '>', '<']
//     this.operator = this.operators[Math.floor(Math.random() * this.operators.length)]
//   }
//   encode(x,y) {
//     return x + this.operator + y
//   }
//   execute(x,y) {
//     return x + this.operator + y
//   }
//   describe() {
//     return this.operator + this.number
//   }
// }
// AtoAtoBool.register(CompareAtoA)
// AtoAtoA.register(CompareAtoA)
//
//
// let tree = TopLevel.generate()
// console.log(tree.encode([-1,0,1]))
//
// ReactDOM.render(<Container />,
//   document.getElementById('root')
// );
