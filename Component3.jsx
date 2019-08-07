import React from "react";
import { observer } from "mobx-react"

@observer
export class Component3 extends React.PureComponent {
    constructor(props) {
        super(props);
        // this.state = {};
    }

    render() {
        return <span>
            This is Component3, and my <b>this.props.children</b> are:
            {this.props.children}
        </span>;
    }
}

if (module.hot) {
    module.hot.accept();
}
