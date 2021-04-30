import React, { useState } from "react"
import PropTypes from "prop-types";

const Drawer = ({ opened, close }) => (
  <div className={`drawer  ${opened ? "opened" : null}`}>
    <div className="drawer--container">asdsad</div>
    <div
      aria-hidden="true"
      className="drawer--overlay"
      onClick={e => close(false)}
    ></div>
  </div>
)

Drawer.propTypes = {
  close: PropTypes.func.isRequired,
  opened : PropTypes.bool.isRequired,
}


export default Drawer
