import React from 'react'
import styled from '@emotion/styled'
import {
  Hero,
  Navbar,
  Grid,
  Content,
  Carousel,
  Card,
  Backstage,
} from '@msco/ui'

import BackgroundImage from '../components/image/BackgroundImage'

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
    <Hero id="hero">
      <Backstage>
        <Carousel>
          <BackgroundImage name="hero.jpg" />
          <BackgroundImage name="hero2.jpg" />
        </Carousel>
      </Backstage>
      <p>
        Hello 2as dasd
        {JSON.stringify(props)}
      </p>
    </Hero>
    <Content>
      <Grid>
        {[...Array(12)].map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={index}>
            <h1>Title</h1>
            <p>Lorem something</p>
          </Card>
        ))}
      </Grid>
    </Content>
  </>
)
export default FirstComponent
