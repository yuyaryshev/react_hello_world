import React from "react";

import {AlfaStyledButton} from "./ExternalComponents";
import { observer } from "mobx-react"

@observer
export class Component2 extends React.PureComponent {
    constructor(props) {
        super(props);
        // this.state = {};
    }

    render() {
        return <span>
            Component2 - Button
            <AlfaStyledButton color={this.props.color} onClick={this.props.onClick}>
                {this.props.data.name}
            </AlfaStyledButton>
        </span>;
    }
}

if (module.hot) {
    module.hot.accept();
}
