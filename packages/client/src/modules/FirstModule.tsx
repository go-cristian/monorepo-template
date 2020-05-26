import React from 'react'

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
    <div id="hero">

      <p>
        Hello
        {JSON.stringify(props)}
      </p>
    </div>
  </>
)
export default FirstComponent
