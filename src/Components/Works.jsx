import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import Footer from './Footer'

const Works = () => {

  const cardref = useRef(null)

  useEffect(() =>{
    const element = cardref.current
    
    const tl = gsap.timeline({duration:.5})

    tl.from((element.querySelectorAll('section')),{y:30, opacity:0, ease: 'ease-in-out',stagger:.06 })
  }, [])

  return (
    <>
    <Container>

      <Title>
        <h1>Recent Works</h1>
      </Title>

      <WorksContaienr ref={cardref} >

        <section>
          <div className='imgContainer'>
            <img src="./images/project/1.jpg" alt="" />
          </div>
          
          <div className='contentContainer'>

            <div>
              <b>Cross Global</b>
              <p>Web Developed</p>
            </div>
            <a target='blank' href='https://www.crossglobalindia.org/'>Visit site</a>


          </div>
        </section>

        <section>
          <div className='imgContainer'>
            <img src="./images/project/2.jpg" alt="" />
          </div>
          
          <div className='contentContainer'>

            <div>
              <b>HooBank</b>
              <p>Web Developed</p>
            </div>
            <a target='blank' href='https://hoobankreshil.netlify.app/'>Visit site</a>


          </div>
        </section>

        <section>
          <div className='imgContainer'>
            <img src="./images/project/3.jpg" alt="" />
          </div>
          
          <div className='contentContainer'>

            <div>
              <b>Netflix Clone</b>
              <p>Web Developed</p>
            </div>
            <a target='blank' href='https://netflix-react-cbf24.web.app/'>Visit site</a>


          </div>
        </section>

        <section>
          <div className='imgContainer'>
            <img src="./images/project/4.jpg" alt="" />
          </div>
          
          <div className='contentContainer'>

            <div>
              <b>RO media(You-Tube clone)</b>
              <p>Web Developed</p>
            </div>
            <a target='blank' href='https://monumental-hummingbird-dfa1b5.netlify.app/'>Visit site</a>


          </div>
        </section>

        <section>
          <div className='imgContainer'>
            <img src="./images/project/5.jpg" alt="" />
          </div>
          
          <div className='contentContainer'>

            <div>
              <b>HomeLing</b>
              <p>Web Developed</p>
            </div>
            <a target='blank' href='https://homeling.in/'>Visit site</a>


          </div>
        </section>

      </WorksContaienr>

      <div>
        <p className='behance'>For Graphic Design works visit: <a target='blank' href="https://www.behance.net/reshilobeth">Behance</a> </p>
      </div>

    </Container>
    <Footer />
    </>
  )
}

export default Works

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

  

  div{
    .behance{
      padding: 3rem 0;
      font-size: clamp(1.2rem,2vw, 2rem);
      padding-top: 9rem;

      @media (max-width:500px){
        padding-top: 4rem;
      }

      a{
        color: var(--main-color);
        text-decoration: underline;
      }
    }
  }
  
`

const Title = styled.div`

  h1{
    font-size: clamp(2.5rem,8vw, 8rem);
    padding-bottom: 4rem;
  }
  
`

const WorksContaienr = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;

  @media (max-width:1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width:700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  section{
    .imgContainer{
      /* width: 500px; */
      
      img{
        border-radius: 10px;
        width: 100%;
      }
    }

    .contentContainer{
      padding-top: 0.5rem;
      /* width: 500px; */
      display: flex;
      justify-content: space-between;
      align-items: end;

      a{
        color: var(--black-color);
      }
    }
  }
`