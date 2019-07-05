import React from "react";
import PropTypes from "prop-types";
import styles from "./index.scss"; //已启用 CSS Modules

const SvgIcon = props => {
  const { iconClass, fill } = props;

  return (
    <i aria-hidden="true" className="anticon">
      <svg className={styles["svg-class"]}>
        <use xlinkHref={"#icon-" + iconClass} fill={fill} />
      </svg>
    </i>
  );
};

SvgIcon.propTypes = {
  // svg名字
  iconClass: PropTypes.string.isRequired,
  // 填充颜色
  fill: PropTypes.string
};

SvgIcon.defaultProps = {
  fill: "currentColor"
};

export default SvgIcon;
