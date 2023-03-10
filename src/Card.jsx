import React from "react";

function Card({ user }) {
    return (
        <div className="card">
            <div className="card-body">
                <img src={user.picture} alt={user.name} />
                <h5 className="card-title">{user.name}</h5>
                <p>{user.age}</p>
                <p>{user.gender}</p>
                <p>{user.balance}</p>
            </div>
        </div>
    )
}

export default Card;