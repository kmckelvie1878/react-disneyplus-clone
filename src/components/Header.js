import React from 'react'
import { auth, provider } from "../firebase";
import styled from 'styled-components'
import { selectUserName, selectUserPhoto } from "../features/user/userSlice"
import { useSelector } from "react-redux"

function Header() {

    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result);
        })
    }

    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            { !userName ?
                <Login onClick={signIn}>Login</Login> :
                <>
                    <NavMenu>
                        <a href="#">
                            <img src="/images/home-icon.svg" alt="Home" />
                            <span>Home</span>
                        </a>
                        <a href="#">
                            <img src="/images/search-icon.svg" alt="Search" />
                            <span>Search</span>
                        </a>
                        <a href="#">
                            <img src="/images/watchlist-icon.svg" alt="Watchlist" />
                            <span>Watchlist</span>
                        </a>
                        <a href="#">
                            <img src="/images/original-icon.svg" alt="Originals" />
                            <span>Originals</span>
                        </a>
                        <a href="#">
                            <img src="/images/movie-icon.svg" alt="Movies" />
                            <span>Movies</span>
                        </a>
                        <a href="#">
                            <img src="/images/series-icon.svg" alt="Series" />
                            <span>Series</span>
                        </a>

                    </NavMenu>
                    <UserImg src="/images/billy.jpeg" />
                </>
            }
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    
    @media(max-width:768px) {
        display: none;
    }
    
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
        span {
            text-transform: uppercase;
            font-size: 13px;
            letter-spacing: 1.42px;
            color: white;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        img {
            height: 20px;
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
// 07:01:16 if we end up needing the LoginContainer
const Login = styled.div`
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 250ms ease 0s;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`
