import React, { Component } from "react";
import { Button, WhiteSpace } from "antd-mobile";
import { HashRouter as Router, Link } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import { StatisticsHistroy } from "@/api/index";
class Demo extends Component {
  componentDidMount() {
    var param = {
      count: 0,
      variety: 1
    };
    StatisticsHistroy(param).then(() => {});
  }
  render() {
    return <div style={{ textAlign: "center" }}>未找到 你访问的页面哦</div>;
  }
}
export default Demo;
