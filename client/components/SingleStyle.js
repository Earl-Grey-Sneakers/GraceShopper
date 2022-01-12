import React, { Component, useEffect } from "react";
import {connect} from "react-redux"
import { Link } from "react-router-dom"
import { _fetchSingleStyle } from "../store/singleStyle";
const SingleStyle = (props) => {
    console.log(props)
    useEffect(() => {
        props.fetchSingleStyle()
    }, [])
    return (
        <div className ="single-style-container">
            <h1>Hello From SingleItem</h1>
            
        </div>
    )
}

const mapState = (state) => {
    console.log("The state", state)
    return {
        singleStyle: state.singleStyle
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchSingleStyle: (id) =>(dispatch(_fetchSingleStyle(id)))
    }
}
export default connect(mapState, mapDispatch)(SingleStyle)