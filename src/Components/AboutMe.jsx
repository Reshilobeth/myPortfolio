import React from 'react'
import styled from 'styled-components'



const AboutMe = () => {
  return (
    <Container>

      <TextWrapper>
            <h1 className='rolling-text' >ABOUT ME</h1>
            <h1 className='rolling-text' >ABOUT ME</h1>
            <h1 className='rolling-text' >ABOUT ME</h1>
            <h1 className='rolling-text' >ABOUT ME</h1>
            <h1 className='rolling-text' >ABOUT ME</h1>
            <h1 className='rolling-text' >ABOUT ME</h1>
      </TextWrapper>

      <Content>
        <div className='decor' >//</div>
        <div className='mainText'>
           <span>&#128075;&#127996;</span> Hi there! I'm Reshil Obeth, a dedicated and passionate 
            front-end web developer with a love for crafting immersive 
            online experiences and design and the desire to transform 
            ideas into pixel-perfect realities.

            <br />
            <br />

            Specialized in Web development, Web design, graphic 
            design, and motion design. My passion for design and 
            coding puts me in a unique position.
        </div>
      </Content>

    </Container>
  )
}

export default AboutMe

const Container = styled.div`
    margin: 4rem 0;
    margin-top: 9rem;

    @media (max-width:500px) {
     margin-top :4rem;
    }
`

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width:500px) {
      flex-direction: column;
  }

  .decor{
    
    @media (max-width:500px) {
      display: none;
    }
  }

  .mainText{
    width: 60%;
    font-size: clamp(1.3rem, 2vw, 8rem);
    border-bottom: 1px solid black;
    padding-bottom: 4rem;

    @media (max-width:500px) {
      width: 100%;
      border: none;
    }
  }

`

const TextWrapper = styled.div`


    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    /* padding: 6rem 0; */
    padding-bottom: 4rem;

    /* margin-top: 9rem; */

    .rolling-text{
        
        font-size: clamp(5rem, 9vw, 10rem);
        color: #00000010;
        white-space: nowrap;
        padding: 0rem 3rem;
        animation: move-rtl 16000ms linear infinite;
        text-transform: uppercase;

        @media (max-width:500px) {
          animation: move-rtl 16000ms linear infinite;
        }
        
    }

    @keyframes move-rtl {
        0%{
            transform: translateX(0);
        }

        100%{
            transform: translateX(-100%);
        }
    }
`