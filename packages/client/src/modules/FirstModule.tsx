import React from 'react'
import {
  Hero,
  Grid,
  Navbar,
  Backstage,
} from '@msco/ui'
import styled from '@emotion/styled'
import Image from '../components/image/Image'

type Props = {

}

const NavContent = styled.div`
  position: relative;
  display: block;
  height: 4rem;
  width: 100%;
  background: red;
`

const FirstComponent = (props: Props): JSX.Element => (
  <>
    <Navbar type="SCROLL" contentId="hero">
      <NavContent />
    </Navbar>
    <div id="hero">
      <Hero>
        <Backstage>
          <Image name="hero.jpg" />
        </Backstage>
        <p>
          Hello
          {JSON.stringify(props)}
        </p>
      </Hero>
    </div>
    <Grid>
      {[1, 2, 3, 4, 5, 6, 7].map((index) => (
        <div key={index}>
          <h1>
            Hello
            {index}
          </h1>
        </div>
      ))}
    </Grid>
  </>
)
export default FirstComponent
