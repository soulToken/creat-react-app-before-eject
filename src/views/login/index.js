import React, { Component } from "react";
import { Button, WhiteSpace } from "antd-mobile";
import { HashRouter as Router, Link } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import { StatisticsHistroy } from "@/api/index";
import { inject, observer } from "mobx-react";
import ReactSVG from "react-svg";
import SvgIcon from "@/components/common/icon/index";
import "./index.scss";
@inject("userStore")
@observer
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
        <Icon type="search" />
        <ReactSVG
          src={require(`@/assets/icons/svg/money.svg`)}
          className="svgClass"
        />
        <Button className="btn_class">default</Button>
        <WhiteSpace />
        <Button disabled>default disabled</Button>
        <WhiteSpace />
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          NavBar
        </NavBar>

        <NavBar
          mode="dark"
          leftContent="Back"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          NavBar
        </NavBar>
        <li>
          <Link to="/">主页</Link>
        </li>
        <li>
          <Link to="/login">登录页面</Link>
        </li>
        <li>
          <Link to="/index"> 主页界面</Link>
        </li>
      </div>
    );
  }
}
export default Demo;
