import React from 'react';
import Console from 'react-console-component';
import 'react-console-component/main.css';
import './javascript-console.css';

class JavaScriptConsole extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Andrei"
        }

        this.echo = this.echo.bind(this);
        this.promptLabel = this.promptLabel.bind(this);
    }
    child = {
        console: Console
    };

    echo(text) {
        this.child.console.log(text);
        this.child.console.return();
    }

    promptLabel() {
        return this.state.name + "> ";
    }

    render() {

        return (
            <Console ref={ref => this.child.console = ref}
                     handler={this.echo}
                     promptLabel={this.promptLabel}
                     welcomeMessage={"Welcome to the react-console demo!\nThis is an example of a simple echo console."}
                     autofocus={true}
            />
        )
    }
}

export default JavaScriptConsole;
