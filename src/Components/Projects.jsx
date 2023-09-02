import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Projects = () => {

  const titleRef = useRef()

  useEffect(() =>{
    const element = titleRef.current

    gsap.fromTo(element.querySelector('.title'),
        {
          scale:1.4
        },{
          scale:1,
          scrollTrigger:{
            trigger:element.querySelector('.title'),
            start:'top 60%',
            end:'top 30%',
            scrub: 2,
          },
          
        })

    gsap.fromTo(element.querySelector('.projectContainer'),
        {
          opacity:0,
        },{
          opacity:1,
          scrollTrigger:{
            trigger: element.querySelector('.projectContainer'),
            start: 'top 100%',
            end: 'bottom 80%',
            pin: element.querySelector('.title')
          }
        })
    }, [])

  return (
    <Main ref={titleRef}>
      <Title >
        <h1 className='title'>Recent Works</h1>
      </Title>

      <ProjectsContainer className='projectContainer' >
        
        <Project>

          <div className='imgContainer'>
            <img src="./images/project/1.jpg" alt="" />
          </div>

          <div className='textContaienr'>
            <section>
              <p>Web Developed</p>
              <p className='topic'>Cross Global</p>
              
            </section>
            <section>
              <a target='blank' href='https://www.crossglobalindia.org/'>Visit site</a>
            </section>
          </div>

        </Project>
        
        <Project>

          <div className='imgContainer'>
            <img src="./images/project/2.jpg" alt="" />
          </div>

          <div className='textContaienr'>
            <section>
              <p>Web Developed</p>
              <p className='topic'>HooBank</p>
              
            </section>
            <section>
              <a target='blank' href='https://hoobankreshil.netlify.app/'>Visit site</a>
            </section>
          </div>

        </Project>
        
        <Project>

          <div className='imgContainer'>
            <img src="./images/project/3.jpg" alt="" />
          </div>

          <div className='textContaienr'>
            <section>
              <p>Web Developed</p>
              <p className='topic'>Netflix Clone</p>
              
            </section>
            <section>
              <a target='blank' href='https://netflix-react-cbf24.web.app/'>Visit site</a>
            </section>
          </div>

        </Project>
        
        <Project>

          <div className='imgContainer'>
            <img src="./images/project/4.jpg" alt="" />
          </div>

          <div className='textContaienr'>
            <section>
              <p>Web Developed</p>
              <p className='topic'>RO media(You-Tube clone)</p>
              
            </section>
            <section>
              <a target='blank' href='https://monumental-hummingbird-dfa1b5.netlify.app/'>Visit site</a>
            </section>
          </div>

        </Project>

      </ProjectsContainer>

    </Main>
  )
}

export default Projects

const Main = styled.div`

`


const Title = styled.div`

  height: 100vh;
  width: 100%;

  @media (max-width: 500px) {
    height: 100vh;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  h1{
    font-size: clamp(3rem, 15vw, 10rem);
  }

`

const ProjectsContainer = styled.div`

  /* height: 100vh; */
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9rem;

  @media (max-width: 500px) {
   gap: 3rem;
  }

`

const Project = styled.div`

  width: 1000px;
  position: relative;
  overflow: hidden;
  object-fit: cover;

  @media (max-width: 1036px) {
   width: 620px;
  }

  @media (max-width: 680px) {
   width: 520px;
  }

  @media (max-width: 500px) {
   width: 320px;
  }

  .imgContainer{
    
    overflow: hidden;
    
    img{
      width: 100%;
      height: auto;
      transition: 0.5s all ease-in-out;
      /* border-radius: 20px; */
    }

      &:hover img{
        scale: 1.05;
      }

  }

  .textContaienr{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--black-color);
    color: white;
    position: absolute;
    width: 100%;
    /* top: 0; */
    bottom: 0;

    padding: 1rem 3rem;
    transform: translateY(130px);
    transition: 0.5s all ease-in-out;

    @media (max-width: 500px) {
      transform: translateY(110px);
      padding: .3rem 1rem ;
    }

    section{
      .topic{
        font-size: clamp(1rem, 1vw, 8rem);
        padding-bottom: 0.5rem;
      }

      a{
        color: var(--cream-color);
      }
    }

  }

  &:hover .textContaienr{
    transform: translateY(0px);
  }

  border-radius: 8px;

`
