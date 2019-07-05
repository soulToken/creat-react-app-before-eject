import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button, WhiteSpace } from "antd-mobile";
import { NavBar, Icon } from "antd-mobile";
import { Switch, Route } from "react-router";
import { HashRouter as Router, Link } from "react-router-dom";
import routers from "@/router/index";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";
import { StatisticsHistroy } from "@/api/index";
import Login from "@/views/login/index";
import Index from "@/views/index/";
//自定义环境变量
console.log(process.env.REACT_APP_BAR);
//根据不同命令可以获取环境变量的值
console.log(process.env.REACT_APP_SECRET_API);

class App extends Component {
  componentDidMount() {
    var param = {
      count: 0,
      variety: 1
    };
    StatisticsHistroy(param).then(() => {});
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            {routers.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  component={item.component}
                  key={index}
                />
              );
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
