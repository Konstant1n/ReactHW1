import React from "react";

function Header ({handleInputChange}) {
    return (
        <div className="header">
            <div>
            <label htmlFor="searchByName" className="form-label">Search by name:</label>
            <input type="text" 
                className="header-input_text form-control" 
                label="Search by name"
                name="searchByName" 
                id="searchByName"
                // value={filters.name}
                onChange={handleInputChange}
                
            />
            </div>

 
        </div>
    )
}

export default Header;