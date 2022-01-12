import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { _fetchSingleStyle } from "../store/singleStyle";
const SingleStyle = (props) => {
    console.log(props)
    const name = props.match.params.name
    console.log(name)
    const singleStyle = useSelector((state) => {
        console.log(state)
        return state.singleStyle
    }) || []
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(_fetchSingleStyle(name))
    }, [])
    return (
        <div className ="single-style-container">
            <h1>Hello From SingleItem</h1>
            
        </div>
    )
}

export default SingleStyle