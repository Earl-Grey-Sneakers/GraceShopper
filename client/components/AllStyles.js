import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchStyles } from '../store/styles'
import { Link } from "react-router-dom"

const AllStyles = (props) => {
    useEffect(()=>{
        props.fetchStyles()
    }, [])
    
    const styles = props.styles || []
    

    return (
        <div>
            <div className='all-styles-container'>
                {styles.map((style,idx) => (
                    <div className='all-styles-single-style' key={idx}>
                        <img src={style.imageUrl} className='shoe-img'/>
                        <h3>{style.shoeName}</h3>
                        <h5>{'$'}{style.price}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapToState = (state) => {
    return {
        styles: state.styles
    }
}

const mapToDispatch = (dispatch) => {
    return {
        fetchStyles: () => dispatch(fetchStyles())
    }
}

export default connect(mapToState,mapToDispatch)(AllStyles)