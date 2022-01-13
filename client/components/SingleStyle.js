import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { _fetchSingleStyle } from "../store/singleStyle";

const SingleStyle = (props) => {
    const name = props.match.params.name

    const singleStyle = useSelector((state) => {
        return state.singleStyleReducer
    }) || []
    const dispatch = useDispatch()
    const { brand, shoeName, imageUrl, quantity } = singleStyle[0] || []
    

    useEffect(() => {
       dispatch(_fetchSingleStyle(name))
    }, [])
    return (
        <div className ="single-style-container">
            <div className="style-description">
                <div className="single-shoe">
                    <img src={imageUrl} />
                </div>
                <h1>{shoeName}</h1>
                <h2>{brand}</h2>
                <h3>{quantity}</h3>
                <form>
                    <label for="size">Choose A Size</label>
                    <select name="sizeList" id="sizeList">
                    {singleStyle.map((element, idx) => (
                        <option value={idx}>{element.size}</option>
                    )) }
                    </select>
                    <button type="submit">Add To Cart</button>
                </form>
            </div>
        </div>
    )
}

export default SingleStyle