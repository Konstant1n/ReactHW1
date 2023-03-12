import React from "react";

function Header({ filter, handleInputNameChange, handleSelectSortChange, handleResetAllData }) {
    return (
        <div className="header">
            <div>
                <label
                    htmlFor="searchByName"
                    className="form-label">
                    Search by name:
                </label>
                <input
                    type="text"
                    className="header-input_text form-control"
                    label="Search by name"
                    name="searchByName"
                    id="searchByName"
                    value={filter.byName}
                    onChange={handleInputNameChange}

                />
            </div>

            <select
                name="sortingByAge"
                className="form-select"
                value={filter.sortByAge}
                onChange={handleSelectSortChange}
            >
                <option value="default">default</option>
                <option value="ascending">ascending</option>
                <option value="descending">descending</option>
            </select>

            <button
                onClick={handleResetAllData}
                className="btn btn-primary"
            >
                Reset Data
            </button>

        </div >
    )
}

export default Header;