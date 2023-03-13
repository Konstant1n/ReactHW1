import React from "react";

function Modal({ user, handleModaClose }) {
let userAllInfo = Object.entries(user).map(user => <div key = {user}> <b>{user[0]}</b> {' : ' + user[1]}</div>) // get all information in div


//    console.log(userAllInfo)
    return (
        <>
            <div className="modal-background" onClick={handleModaClose}></div>
            <div className="modal-container">
                    {userAllInfo}
            </div>
        </>
    )
}

export default Modal;