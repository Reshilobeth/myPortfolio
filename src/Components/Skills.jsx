import React from 'react'
import styled from 'styled-components'


const Skills = () => {
  return (
    <Main>

      <Right>
        <p>My Skills</p>
      </Right>

      <Left>

        <Cards className='border'>

          <div>
            <h3>Fornt-End Development</h3>
          </div>

          <Container>
            <div>
              <img src="./images/fe/html.png" alt="" />
              <p>HTML</p>
            </div>
            <div>
              <img src="./images/fe/css.png" alt="" />
              <p>CSS</p>
            </div>
            <div>
              <img src="./images/fe/js.png" alt="" />
              <p>Javascript</p>
            </div>
            <div>
              <img src="./images/fe/react.png" alt="" />
              <p>React</p>
            </div>
            <div>
              <img src="./images/fe/gsap.png" alt="" />
              <p>GSAP</p>
            </div>
            <div>
              <img src="./images/fe/sc.png" alt="" />
              <p>Styled Component</p>
            </div>
            
          </Container>

        </Cards>

        <Cards>

          <div>
            <h3>Graphic & Motion design</h3>
          </div>

          <Container>
            <div>
              <img src="./images/design/ps.png" alt="" />
              <p>Photoshop</p>
            </div>
            <div>
              <img src="./images/design/figma.png" alt="" />
              <p>Figma</p>
            </div>
            <div>
              <img src="./images/design/ae.png" alt="" />
              <p>After effects</p>
            </div>
            <div>
              <img src="./images/design/ai.png" alt="" />
              <p>Illustrator</p>
            </div>
            <div>
              <img src="./images/design/blender.png" alt="" />
              <p>Blender</p>
            </div>
            
          </Container>

        </Cards>

      </Left>
    </Main>
  )
}

export default Skills

const Main = styled.div`

    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
    margin-top: 9rem;
    /* margin-bottom: 9rem; */
    /* height: 100vh; */

    display: flex;
    /* justify-content: space-between; */
    width: 100%;

    @media (max-width:700px) {
      flex-direction: column;
      /* margin-bottom: 2rem; */
    }

`

const Right = styled.div`
  width: 45%;

  p{
    font-size: clamp(1.3rem, 1.5vw, 5rem);
    font-family: skr;
    color: var(--black-color);

    
    @media (max-width:700px) {
      padding-bottom: 3rem;
    }
  }

`

const Left = styled.div`
  .border{
    border-bottom: 1px solid black;
  }
`

const Cards = styled.div`
    margin-bottom: 3rem;
  div{
    h3{
      font-size: clamp(1.3rem, 2vw, 8rem);
    }
  }
`

const Container = styled.div`
  display: flex;
  padding: 2rem 0;

  div{

    /* padding: 0 .6rem; */
    padding-right: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width:700px) {
      padding-right: 0.6rem;
    }

    img{
      width: 50px;

    @media (max-width:700px) {
      width: 40px;
    }

    }

    p{
      opacity: 0.5;
      font-size: 9px;
      padding-top: 0.5rem;
    }
  }
`