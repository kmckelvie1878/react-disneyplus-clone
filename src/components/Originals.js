import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal, } from "../features/movie/movieSlice";

function Originals() {
    const movies = useSelector(selectOriginal);
    console.log("Original movies", movies)
    return (
        <Container>
           <h4>Disney+ Originals</h4>
           <Content>
               { movies &&
                    movies.map((movie)=>(
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt="" />
                        </Link>
                    </Wrap>
                    ))
               }
                
           </Content>
        </Container>
    )
}

export default Originals

const Container = styled.div`
    margin-bottom: 50px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media (max-width:768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    @media only screen 
        and (min-device-width: 768px) 
        and (max-device-width: 1024px) 
        and (-webkit-min-device-pixel-ratio: 1) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
`

const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.05);
        border-color: (249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }

`