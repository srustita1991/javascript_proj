import React from 'react';
export default function Header(props){
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Lina Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart</a>
                <a href="#/Signin">Signin</a>
            </div>
        </header>
    );
}