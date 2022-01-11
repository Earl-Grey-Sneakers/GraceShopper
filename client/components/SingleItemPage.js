import React, { Component } from "react";
import {connect} from "react-redux"
import { Link } from "react-router-dom"

const SingleStyle = () => {
    return (
        <div><h1>Hello From SingleItem</h1></div>
    )
}

export default connect()(SingleStyle)