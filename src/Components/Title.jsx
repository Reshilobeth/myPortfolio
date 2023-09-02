import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import {Link} from 'react-router-dom'
import animation from '../assests/data.json'
import gsap from 'gsap'

const Title = () => {

  const contactForm = () =>{
    let btn = document.querySelector('.form')
    btn.classList.toggle('visible')
  }

  const contactFormClose = () =>{
    let btn = document.querySelector('.form')
    btn.classList.remove('visible')
    console.log('close')
  }

  const textRef = useRef(null)
  const nameRef = useRef(null)

  console.log(nameRef)
  
  useEffect(() =>{

    const element = textRef.current
  
    const tl = gsap.timeline({duration:.7})

    tl.from((element.querySelectorAll('h1')),{y:30, opacity:0, ease: 'ease-in-out',stagger:.09 })
  },[])

  useEffect(() =>{

        const name = nameRef.current
        gsap.from((name.querySelectorAll('div')),{opacity:0, duration:.5, delay:1.5, stagger:.2})
  },[])

  return (
    <Container>

      <Form >

        <form className='form' action="https://formspree.io/f/xzblgead" method='POST'>

          <div onClick={contactFormClose} className='Contactcancel'>
              <div className='line line-one'></div>
              <div className='line line-two'></div>
          </div>
          
          <div className='allInput' >
            <p>Your name</p>
            <input name='Your name' placeholder='Reshil obeth' type="text" />
          </div>
          
          <div  className='allInput'>
            <p>Your E-mail</p>
            <input name='Your namae' placeholder='Reshil obeth' type="text" />
          </div>
          
          <div  className='allInput noBorder'>
            <p>Your Message</p>
            <textarea name='Your Message' cols='25' rows='4'  placeholder='Your Message'></textarea>
          </div>

          <button>Submit</button>

        </form>

        

      </Form>
        
        <Heading ref={textRef}>

          <h1 className='first'>Front - End Web</h1>
          <br />
          <h1 className='sec'>
          <b className='design'>Designer</b> <b className='and'>&</b> Developer</h1>

        </Heading>


        <Details>
          <div ref={nameRef} className='name'>
            <div>
              <p>I'm Reshil obeth <br/>//age 22 </p>
            </div>
            <div>
              <Link className='mail' to='javascript:void(0)' onClick={() => window.location = 'mailto:reshilobeth5510@gmail.com'}>reshilobeth5510@gmail.com</Link>
            </div>
          </div>

              <div onClick={contactForm} className='aniContainer'>
                <Lottie className='animation' animationData={animation} />
              </div>
                        
        </Details>

        <Image>
            <div>
              <img src="./images/mypic.jpg" alt="" />
            </div>
        </Image>

    </Container>
  )
}

export default Title

const Form  = styled.div`

  .visible{
    transform: translateY(0%);
    opacity: 1;
    transition: 0.5s all ease-in-out;
  }

  form{
      position: fixed;
      z-index: 999;
      right: 0;
      top: 0;
      height: 90vh;
      width: 40%;
      background-color: var(--black-color);
      backdrop-filter: blur(80px);
      margin: 2rem;
      border-radius: 30px;
      padding: 2.5rem;
      transform: translateY(100%);
      color: white;
      opacity: 0;
      transition: 0.2s all ease-in-out;

      @media (max-width:700px) {
        width: 100%;
        margin: 0;
        padding: 2rem;
        height: 100vh;
        border-radius: 0;
      }

      button{
        padding: 1rem 2rem;
        border: none;
        background-color: var(--main-color);
        color: var(--cream-color);
        font-size: 1.4rem;
        border-radius: 20px;
      }
    

    .Contactcancel{
      padding: .5rem;
      .line{
        height: 1px;
        width: 30px;
        
        margin-bottom: 1rem;
      }

      .line-one{
          transform: translatey(16px) rotatez(45deg);
          background-color: white;
          
      }

      .line-two{
          transform: rotate(-45deg);
          background-color: white;
      }

      .line:focus{
          outline: none;
      }
      
    }


  

    .allInput{

      padding: 2rem 0rem;
      border-bottom: #ffffff42 2px solid;
      p{
        font-size: 2rem;
        padding-bottom: 1rem;
      }

      input{
        color: #888888;
        font-size:1.3rem;
      }
      textarea{
        color: white;
        font-size:1.3rem;
      }
    }

    .noBorder{
      border: none;
    }


  }
`

const Image = styled.div`
  /* max-width: 1400px; */
  div{
    

    img{
      border-radius: 30px;
      width: 100%;

      @media (max-width:500px) {
        height: 400px;
        object-fit: cover;
        
      }
    }
  }
`

const Details = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  padding-right: 3rem;



  .mail{
    color: var(--black-color);
    cursor: pointer;

    @media (max-width:500px) {
      /* width: 60%; */
      color: var(--cream-color);
      background-color: var(--cream-color);
    }

    &::after{
      content: '';
      background-color: var(--main-color);
      display: block;
      height: 2px;
      width: 0;
      margin-top: 2px;
      /* transform-origin: left; */
      transition: 0.6s all ease-in-out;
  }

      &:hover::after{
          width: 100%;
      }
  }

  @media (max-width:500px) {
    padding-right: 0rem;
    margin-top: 1.3rem;
    margin-bottom: 1rem;
  }

  .name{
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: end;

    font-size: clamp(.6rem,2vw, 1rem);

    @media (max-width:500px) {
      width: 60%;
      color: var(--cream-color);
      background-color: var(--cream-color);
    }
  }

  .aniContainer{
    width: 170px;
    position: relative;

    .animation{
      position: absolute;
      z-index: 1;
      top: 10px;
      background-color: var(--main-color);
      border-radius: 50%;
      padding: 0.5rem;
      
    @media (max-width:500px) {
      height: 100px;
      right: 27px;
      top: 5px;
    }

    }
  }

`

const Container = styled.div`
  padding: 1rem;
  padding-top: 13rem;

  max-width: 1400px;
  margin: 0 auto;

  @media (max-width:500px){
    padding-top: 9rem;
  }
    
`

const Heading = styled.div`

    .first{
      font-size: clamp(3rem,10vw, 8.6rem);

      @media (max-width:350px){
        font-size: clamp(2.3rem,10vw, 8.6rem);
      }
    }
    
    h1{
      font-size: clamp(2.2rem,8vw, 8rem);
      line-height: clamp(.1rem,6vw, 8rem);
      font-family:skb ;

      @media (max-width:350px){
        font-size: clamp(1.7rem,8vw, 8rem);
      }

      .and{
        font-family: skr;
        font-size: clamp(1rem,5vw, 7rem);
      }

      .design{
        color: var(--main-color);
        background-color: transparent;
        /* font-family: i;
        font-size: clamp(1.7rem,9vw, 9rem); */
      }

      
    }
`