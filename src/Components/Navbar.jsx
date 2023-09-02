import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { ReactComponent as Behance } from '../socials/behance.svg'
import { ReactComponent as Instagram } from '../socials/instagram.svg'
import { ReactComponent as LinkedIn } from '../socials/linkedin.svg'
import { ReactComponent as GitHub } from '../socials/github.svg'


const Navbar = () => {

    const toggle = () =>{

        let btn = document.querySelector('.phonemenu')
        btn.classList.toggle('toggle-menu')

        let line = document.querySelector('.line')
        line.classList.toggle('line-one')

        let lineTwo = document.querySelector('.line2')
        lineTwo.classList.toggle('line-two')

    }

    const [hovering, setHovering] = useState(false);

    const handleMouseMove = (e) => {

        if (hovering) {

        const button = e.target.getBoundingClientRect();
        const offsetX = e.clientX - button.left - button.width / 2;
        const offsetY = e.clientY - button.top - button.height / 2;

        const maxOffset =1; // Adjust this value to control the strength of the effect

        e.target.style.transform = `translate(${offsetX / maxOffset}px, ${offsetY / maxOffset}px)`;
    }};

        const handleMouseEnter = () => {
            setHovering(true);
        };

        const handleMouseLeave = (e) => {
            setHovering(false);
            e.target.style.transform = 'translate(0, 0)';
        };

  return (
    <Main>

        <Phone>
            <div className='phonemenu'>
                <PhoneLinks>

                    <p className='sub'>NAVIGATION</p>

                    <Link className='link' onClick={toggle} to='/works'>Works</Link>
                    <Link className='link' onClick={toggle} to='/aboutme' >About Me</Link>
                    <Link className='link' onClick={toggle} target='blank' to='./pdf/reshil_obeth.pdf' >Resume</Link>
                    <Link className='link' onClick={toggle} to='/contactme'  >Contact Me</Link>

                    <Socials>
                        <p className='sub'>SOCIALS</p>
                         <div className='svg-container'>

                            <a href='https://www.linkedin.com/in/reshilobeth/' target='_blank' className="svg-component">
                                <LinkedIn />
                            </a>
                            <a href='https://www.behance.net/reshilobeth' target='_blank' className="svg-component">
                                <Behance />
                            </a>
                            <a href='https://github.com/Reshilobeth' target='_blank' className="svg-component">
                                <GitHub />
                            </a>
                            <a href='https://www.instagram.com/_.reshil/' target='_blank' className="svg-component">
                                <Instagram />
                            </a>
                            
                        </div>
                    </Socials>

                    
                </PhoneLinks>
            </div>
        </Phone>

        <Nav>
            <Logo>
                <Link to= '/'>
                    <img  src="./images/Mylogo/logo.png" alt="" />
                </Link>
            </Logo>

            <Links>
                <ul>
                    <Link to='works'>
                        <MagneticButton onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            Works
                        </MagneticButton>
                    </Link>

                    <Link to='aboutme'>
                        <MagneticButton onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            About Me
                        </MagneticButton>
                    </Link>

                    <Link to='contactme'>
                        <MagneticButton className='hireme' onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            Hire Me
                        </MagneticButton>
                    </Link>
                    
                    
                </ul>
            </Links>

            <Menu onClick={toggle}>
                <div className='line line1'></div>
                <div className='line line2'></div>
            </Menu>

        </Nav>
    </Main>
  )
}

export default Navbar

const Socials = styled.div`

    padding: 4rem 0;


    @media (max-width:420px) {
        margin-top: -1.5rem;
    }

    .svg-container{

        display: flex;
        gap: 30px;

        .svg-component svg{
            width: 35px;
            height: 35px;
            fill: var(--cream-color);
            display: flex;
            transition: 0.2s all ease-in-out;

            &:hover{
                fill: var(--main-color);
            }
        }
        

        
    }
    
`


const Phone = styled.div`

position: relative;
overflow: hidden;


    .phonemenu{
        background-color: #151515;
        width: 40%;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        transform: translateX(101%);  
        transition: transform 700ms cubic-bezier(0.3,1,0.7,1);

        /* position: absolute; */
        z-index: 3;
        
        
        @media (max-width:1070px) {
            width: 100%;
        }
    }       

    .toggle-menu{
        transform: translateX(0%);   
        filter: drop-shadow(-10px 0px 30px #00000031);
    }
`

const PhoneLinks = styled.div`

    margin-top: 10rem;
    margin-left: 3rem;

    
    .sub{
        color: #ffffff53;
        margin-bottom: 2rem;
    }

    .link{
        font-size: 1.8rem;
        padding: .6rem 0; 
        color: white;
        display: flex;
        font-family: skr;
    }
    
`



const Menu = styled.div`

    /* position: relative; */
    

    div{
        width: 35px;
        height: 1.5px;
        background-color: var(--black-color);
        margin: .4rem 0;
        transition: 0.2s all ease-in-out;
    }

    .line-one{
        transform: translatey(8px) rotatez(45deg);
        background-color: white;
        
    }

    .line-two{
        transform: rotate(-45deg);
        background-color: white;
    }

    .line:focus{
        outline: none;
    }

    @media (min-width:700px) {
        display: none;
    }
`


const Main = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    
`

const Nav = styled.nav`

    width: inherit;
    max-width: inherit;
    position: fixed;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    padding: 1rem;
    align-items: center;

    backdrop-filter: blur(8px);
    

    /* position: absolute; */
    z-index: 999;

    @media (max-width:500px) {
        padding: 1.5rem;
        margin-top: 1rem;
        border-radius: 10px;
    }
        
`

const MagneticButton = styled.nav`
        align-items: center;
        display: flex;
        transition: transform 300ms cubic-bezier(0.3,1,0.7,1);
        cursor: pointer;
        font-size: 1rem;

        padding: .5rem;

        &:hover {
            transform: scale(1.1);
        }

        &:active {
            transform: scale(0.9);
        }

        &:nth-child(3){
                       
        }
`

const Links = styled.nav`
    ul{
        display: flex;
        gap: 3rem;
        a{
            color: var(--black-color);
        }
    }

    .hireme{
        background-color: var(--main-color);
        color: var(--cream-color);
        padding: .6rem 1.2rem;
        border-radius: 13px; 
    }

    

    @media (max-width:700px) {
        display: none;
    }

`


const Logo = styled.div`
    img{
        width: 90px;

    @media (max-width:500px) {
        width: 80px;
    }

    }
`