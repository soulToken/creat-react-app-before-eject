import React, { Component } from "react";
import { Button, WhiteSpace } from "antd-mobile";
import { HashRouter as Router, Link } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import { StatisticsHistroy } from "@/api/index";
import SvgIcon from "@/components/common/icon/index";

class Demo extends Component {
  componentDidMount() {
    var param = {
      count: 0,
      variety: 1
    };
    StatisticsHistroy(param).then(() => {});
  }
  render() {
    return (
      <div style={{ height: "1000px" }}>
        <SvgIcon iconClass="money" />
        
        <li>
          <Link to="/">主页</Link>
        </li>
        <li>
          <Link to="/login">登录页面</Link>
        </li>
        <li>
          <Link to="/index">主页界面</Link>
        </li>
      </div>
    );
  }
}
export default Demo;
