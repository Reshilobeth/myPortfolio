import React from 'react'
import styled from 'styled-components'

const Quotes = () => {
  return (
    <Container>

        <h2> 
          '' There are three responses to a piece of design - yes, no, 
            and WOW! <span>Wow is the one that I aim for ''</span>
        </h2>

        <p>- Milton Glaser</p>

    </Container>
  )
}

export default Quotes

const Container = styled.div`

    width: 100%;
    padding: 4rem;
    padding-top: 9rem;

    h2{
         width: 80%;
         font-size: clamp(1.6rem, 5vw,3.5rem);
         font-family: skr;

         span{
            color: var(--main-color);
            font-family: skb;
         }

         @media (max-width: 900px) {
          width:100% ;
         }
      }
      

    p{
        padding: 2rem 0;
        opacity: .6;
        letter-spacing: 2px;
        font-size: clamp(.8rem, 1vw, 1rem);
        max-width: 1500px;
    }

     @media (max-width: 900px) {
       padding: 1rem 2em;
    }
`