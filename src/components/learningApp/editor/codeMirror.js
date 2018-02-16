import React from 'react';
import CodeMirror from 'react-codemirror';
import './codemirror.css';

class CodeMirrorEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            code: "// Code",
        };

        this.updateCode = this.updateCode.bind(this);
    }

    updateCode(newCode) {
        this.setState({
            code: newCode,
        });
    }

    render() {
        var options = {
            lineNumbers: false,
        };

        return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options}/>
    }
}


export default CodeMirrorEditor;
