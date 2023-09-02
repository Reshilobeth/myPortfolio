import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Lottie from 'lottie-react'
import animation from '../assests/data.json'

const Footer = () => {
    
  return (
    <Main>
        <Container>
            <Top>
                <div className='title' >
                    <h1>Let's create something<br />WOW-worthy. </h1>
                </div>
                <div className='mail'>
                    <Link to='javascript:void(0)' onClick={() => window.location = 'mailto:reshilobeth5510@gmail.com'}>
                        <p>reshilobeth5510@gmail.com</p>
                    </Link>
                    <p>+91 9790392441</p>
                </div>
            </Top>

            <Bottom>
                <div>
                    <a href='https://www.linkedin.com/in/reshilobeth/' target='_blank'>LinkedIn</a>
                    <a href='https://www.behance.net/reshilobeth' target='_blank' >Behance</a>
                    <a href='https://github.com/Reshilobeth' target='_blank'>Github</a>
                    <a href='https://www.instagram.com/_.reshil/' target='_blank'>Instagram</a>
                </div>

                <div className='aniContainer'>
                    <Lottie className='animation' animationData={animation} />
                </div>
            </Bottom>
        </Container>
    </Main>
  )
}

export default Footer

const Main = styled.div`

    width: 100%;
    padding: 4rem;
    /* padding-top: 9rem; */
    background-color: var(--black-color);

    @media (max-width:700px) {
        padding: 2rem;
    }
    
`

const Container = styled.div`
    
`

const Top = styled.div`

    .title{
            h1{
            font-size: clamp(2rem, 5vw,6rem);
            font-family: skr;
            color: var(--cream-color);
            /* line-height: 75px; */

            span{
                color: var(--main-color);
            }
        }
    }

    .mail{

        display: flex;
        gap: 40px;
        
        margin-top: 4rem;

        p{
            color: var(--cream-color);
            border: 1px solid var(--cream-color);
            padding: 1.3rem 1rem;
            border-radius: 30px;
            transition: 0.2s all ease-in-out;
            cursor: pointer;

            

            &:hover{
                background-color: var(--main-color);
                border: 1px solid var(--main-color);
                
            }
        }

        @media (max-width:700px) {
            flex-direction:column ;
            text-align: center;
        }
    }
    
`

const Bottom = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: end;

    @media (max-width:700px) {
        flex-direction:column ;
        align-items: start;
    }

    div{
        padding-top: 2rem;
        a{
            padding-right: 2rem;
            color: var(--cream-color);
            transition: 0.6s all ease-in-out;

        @media (max-width:700px) {
            /* padding: 5rem ; */
            font-size: 15px;
            text-align: center;
        }
        @media (max-width:380px) {
           display: none;
        }
            

            &:hover{
                color: var(--main-color);
                font-family: skb;
                transition: 0.6s all ease-in-out;
            }
        }
    }

.aniContainer{
    width: 170px;
    position: relative;

    .animation{
      /* position: absolute; */
      z-index: 1;
      /* top: 10px; */
      background-color: var(--main-color);
      border-radius: 50%;
      padding: 0.5rem;

      
    @media (max-width:500px) {
      height: 100px;
      right: 27px;
      top: 5px;
       display: none;
    }

    }
  }
    
` 