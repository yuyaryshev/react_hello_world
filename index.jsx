const useHotReloading = true;

import {hot} from "react-hot-loader/root";
import React from "react";
import {render} from "react-dom";
import {Main as Main0, MainData} from "./Main";


let Main = ( useHotReloading ? hot(Main0) : Main0);

let appData = new MainData();

(async () => {
    let root = document.querySelector('#root');
    if (!root) {
        root = document.createElement('div');
        root.id = "root";
        document.body.appendChild(root);
    }

    console.log(`Starting...`);
    console.log(`appData.title = ${appData.title}`);
    setInterval(()=> {
        appData.title = 'MainData.title '+Math.random();
    }, 1000);

    render(<Main data={appData} />, root);
})();


if (module.hot) {
    module.hot.accept();
}