import AceEditor from 'react-ace'
import brace from 'brace'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { nextActivity, gradeActivity } from '../actions/actions'

import '../node_modules/brace/mode/javascript'
import '../node_modules/brace/snippets/javascript'
import '../node_modules/brace/theme/monokai'
import '../node_modules/brace/ext/language_tools'
import '../node_modules/brace/ext/searchbox'


class App extends Component {
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
              {this.props.activity.problem}
            </div>
          </div>
          <AceEditor
            width="100%"
            fontSize="20px"
            mode="javascript"
            theme="monokai"
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling: true}}
            defaultValue={this.props.activity.answer}
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
          <button onClick={() => this.props.dispatch(nextActivity())} style={{
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
          <div style={{
            width: '100%',
            padding: "8px 20px",
            fontSize: '20px',
            lineHeight: '2em',
            fontFamily: 'arial'
          }}>
          {this.props.activity.response}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  activity: state.activity
})

App = connect(mapStateToProps)(App);

export default App
