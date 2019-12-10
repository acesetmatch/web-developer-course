
import React from "react"
import "./search-box.styles.css"


export const SearchBox = ({ placeholder, onHandleChange }) =>
    <input
        className="search"
        type='search'
        placeholder={placeholder}
        onChange={onHandleChange}
    />