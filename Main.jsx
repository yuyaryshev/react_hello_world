import React from "react";
import {observable, computed} from "mobx"
import { observer } from "mobx-react"
import {Component1} from "./Component1";
import {Component2} from "./Component2";
import {Component3} from "./Component3";

export class MainData {
    @observable title = "MainData.title";
    @observable selectedItem = undefined;
    @observable items = [
        {id:'a', name:'AAA'},
        {id:'b', name:'BBB'},
        {id:'c', name:'CCC'}
    ];

    @computed
    get computedExample() {
        return `This is a computed value: this.selectedItem.id = ${(this.selectedItem || {}).id}, this.title=${this.title}`;
    }
}

@observer
export class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        // this.state = {};
        console.log(`Creating Main component...`);
        console.log(`this.props.data.title = ${this.props.data.title}`);
    }

    render() {
        let pthis = this;
        return <div>
            <h1>React hello world</h1>
            <p>Simple data binding: this.props.data.title = '<b>{pthis.props.data.title}</b>'</p>
            <p>Computed value binding: this.props.data.computedExample = '<b>{pthis.props.data.computedExample}</b>'</p>

            <p>========================================================</p>

            <Component1>
                <Component3 key={"1"}>A</Component3>
                <Component3 key={"2"}>
                    B
                    <b>more B</b>
                </Component3>
                <Component3 key={"3"} color={'red'}>C</Component3>
            </Component1>

            <p>========================================================</p>
            <h2>Here is more complex component example with data bindings</h2>
            <p>
                {this.props.data.items.map(item =>
                    <Component2
                        key={item.id}
                        color={(pthis.props.data.selectedItem === item?'red':'blue')}
                        data={item}
                        onClick={()=>{
                            console.log('onClick!!!!');
                            pthis.props.data.selectedItem = item;
                        }}
                    />)}
            </p>
        </div>;
    }
}

if (module.hot) {
    module.hot.accept();
}
