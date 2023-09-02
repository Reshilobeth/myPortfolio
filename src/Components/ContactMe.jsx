import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'


const ContactMe = () => {
  return (
    <Container>

      <Left>
        <h1>Let's Connect</h1>
        <p>Ask me anything or just say hi...</p>
      </Left>

      <Right>
        <Form>
          <form action="https://formspree.io/f/xzblgead" method='POST'>

            <div className='inputs'>
              <div>
                <p>Your name</p>
                <input name="Your name" required type="text" placeholder='Reshil Obeth' />
              </div>

              <br />
              <br />

              <div>
                <p>Your E-mail</p>
                <input name="Your E-mail" required type="email" placeholder='Your E-mail' />
              </div>
              
            </div>
            
           <div className='textAreaContainer'>
             <p>Your Message</p>
            <textarea required placeholder='Your message' name="Your Message" id="" cols="30" rows="5"></textarea>
           </div>

            <br />
            <button>Submit</button>
          </form>

          
        </Form>

        

      </Right>

    </Container>
  )
}

export default ContactMe

const Container = styled.div`

  padding: 1rem;
  padding-top: 13rem;

  @media (max-width:700px) {
    /* padding: 2rem; */
    padding-top: 6rem;
  }

  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  @media (max-width:700px) {
    flex-direction: column;
  }
  

`

const Left = styled.div`

padding: 1rem;

  h1{
      font-size: clamp(2rem,6vw, 5rem);
    }

  p{
    font-size: clamp(1rem, 1.6vw, 2rem);
  }

`

const Right = styled.div`
  width: 50%;

  @media (max-width:700px) {
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
  }
`

const Form = styled.div`
  form{

    .textAreaContainer{
      border-bottom: 1px #20202031 solid;
    }

    button{
        padding: 1rem 1.5rem;
        border: none;
        background-color: var(--main-color);
        color: var(--cream-color);
        font-size: 1rem;
        border-radius: 20px;
        margin-top: 2rem;
      }

    .inputs{
      display: flex;
      /* gap:10px; */
      justify-content: space-between;
      margin-bottom: 3rem;

      @media (max-width:700px) {
        flex-direction: column;
      }
      div{
        padding-right: 7rem;
        border-bottom: 1px #20202031 solid;
        padding-bottom: 1rem;
      }
    }
    p{
      font-size: clamp(1rem, 3vw, 2rem);
      padding-bottom: 1rem;
    }
    input, textarea {
      background-color: transparent;
      border: none;
      opacity: 1;
      font-size: clamp(1rem, 1vw, 3rem);
    }

    textarea::placeholder {font-family:'skr';; color: #2020206f;}
    input::placeholder {font-family:'skr';; color: #2020206f;}
  }
`