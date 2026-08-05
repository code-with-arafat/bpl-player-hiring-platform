import React from 'react'
import currencyImg from '../../assets/currency.png'
import logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start flex items-center gap-4">
                <a href="/">
                    <img src={logo} alt="Logo" className="w-15 h-auto" />
                </a>

                {/*Dropdown */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center gap-3">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                    <div className="flex items-center gap-2 border border-amber-100 p-2 rounded-lg">
                        <p>0 Coin</p>
                        <img src={currencyImg} alt="Coin" className="w-5 h-5"/>
                    </div>
                </ul>
            </div>
        </div>
    )
}