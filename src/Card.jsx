import React from "react";

function Card({ user }) {
    return (
        <div className="card">
            <div className="card-body">
                <img src={user.picture} alt={user.name} />
                <h5 className="card-title">{user.name}</h5>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <p>Balance: {user.balance}</p>
            </div>
        </div>
    )
}

export default Card;