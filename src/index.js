import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {configure} from 'mobx';
import {Provider} from 'mobx-react';
import userStore from '@/store/index';
import "lib-flexible";
import "@/assets/icons";
configure({'enforceActions': 'always'});
ReactDOM.render(
    //mobx 
    <Provider userStore={userStore}>
            <App />
    </Provider>
, document.getElementById('root'));
//不用热更新
if (module.hot) {
    module.hot.accept();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
