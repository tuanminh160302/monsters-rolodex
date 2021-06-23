import React from 'react'

import '../searchBox/searchBox.styles.css'

export const SearchBox = ({className, type, placeholder, handleChange}) => {
    return (
        <input 
            className={className} 
            type={type} 
            placeholder={placeholder} 
            onChange={handleChange}/>
    )
}