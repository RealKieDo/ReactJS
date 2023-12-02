import React from 'react'

function Header() {
 
/*
    if(client === "Designer") {
        title = "Design is my life"
    } else {
        title = "Programming is my life"
    }
*/
    const client = "Designer";
    const title = {
        designer: "Design ",
        programmer: "Programming "
    }

    const info = {
    name: "Mohammed",
    nick: "Alrehaili"
}
    return(
        <div className="navbar bg-dark rounded text-white">
            Hello {`${info.name} ${info.nick}`}
        <h2>{client == "Designer" ? title.designer : title.programmer}
         is my life.</h2>
        </div>
    );
}

export default Header;



