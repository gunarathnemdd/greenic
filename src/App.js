import React, {Component} from "react";
import NavigationBar from './components/navigation_bar/NavigationBar';
import "./lib/bootstrap/css/flatty.css";
import "./index.css";

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        )
    }
}

export default App;