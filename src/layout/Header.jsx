import React from 'react'
import "./Header.css";

const Header = () => {
    return (
        
            <Header>
                <div id="cajaBuscador">
                    <input type="text" name="buscar" id="buscar" placeholder="buscar"/>
                    <img id="lupa" src="./search.svg" alt=""  width="32px" heigh="32px"/>
                </div>
            </Header>
        
    )
}

export default Header
