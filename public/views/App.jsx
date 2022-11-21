import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        console.log("Component Mounted !🤩");
        this.timerID = setInterval(
            () =>
                this.setState({
                    date: new Date(),
                }),
            1000
        );
    }

    componentWillUnmount() {
        console.log("removed !💣");
        clearInterval(this.timerID);
    }

    // tick() {
    //     this.setState({
    //         date: new Date(),
    //     });
    // }
    render() {
        return (
            <div>
                <h1 className="text-blue-600">{this.props.title}</h1>
                {/* <h2 className="text-gray-400">{new Date().toLocaleTimeString()}</h2> */}
                <h2 className="text-gray-400">{this.state.date.toLocaleTimeString("fr-FR")}</h2>
            </div>
        );
    }
}

export default App;
