import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import Footer from './Footer'

const AboutMeFull = () => {
  return (
    <>
    <Container>
      <Title>
        <h1>About Me</h1>
      </Title>

      <Main>
        <div className='imgContainer'>
          <img src="./images/mypic.jpg" alt="" />
        </div>
        <div className='contentContainer'>
          
          <br />
          <br />
          <p>
            🎨 With an artist's eye and a coder's mind, I thrive on 
            creating visually stunning and user-friendly websites that 
            leave a lasting impression. I'm committed to staying on the 
            cutting edge of industry trends and continuously learning to 
            deliver the best solutions.
          </p>
          <p>
            <br /> 
            <br /> 
            🌐 My portfolio is a testament to my dedication and 
            growth in this dynamic world of front-end development. 
            <br />
            <br />
            <p>
              ✨In addition to my passion for designing and coding, 
              I have a diverse range of interests and hobbies that 
              bring me joy. I find relaxation and inspiration in 
              watching old movies, immersing myself in music, devouring 
              books, strumming on my guitar and experimenting in the kitchen. 
              These activities enrich my life and provide a well-rounded 
              balance to my creative pursuits.
            </p>
            
          </p>

          <br />


          <p>
            Let's connect and bring your web visions to life!
          </p>

          <br />
          <br />

          <p className='resume'>
            <a target='blank' href="./pdf/reshil_obeth.pdf">Resume</a>
          </p>

        </div>
      </Main>

    </Container>
    <Footer />
    </>
  )
}

export default AboutMeFull

const Container = styled.div`

  padding: 1rem;
  padding-top: 13rem;

  max-width: 1400px;
  margin: 0 auto;

  margin-bottom: 9rem;

  @media (max-width:500px){
    padding-top: 9rem;
    margin-bottom: 2rem;
  }
`

const Title = styled.div`

  h1{
    font-size: clamp(3rem,8vw, 8rem);
    padding-bottom: 4rem;
  }
  
`

const Main = styled.div`

  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width:865px) {
    flex-direction:column;
  }

  .contentContainer{
    width: 60%;

    @media (max-width:865px) {
        width: 100%;
    }
    p{
      /* padding-right: 3rem; */
      font-size: clamp(1rem, 1.7vw, 3rem);
      
    }

    a{
      color: var(--main-color);
      font-size: clamp(1.5rem, 1.4vw, 2rem);
      cursor: pointer;
      border-bottom: 1px var(--main-color) solid ;
    }
  }

  .imgContainer{

    padding-bottom: 3rem;
    img{
      width: 300px;
      height: 300px;
      object-fit: cover;
      border-radius: 20px;
    

    @media (max-width:700px) {
      width: 100%;
    }
    }
  }

`
