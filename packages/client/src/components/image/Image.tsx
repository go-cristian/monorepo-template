import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

type Props = {
  name: string
}

const Wrapped = styled(Img)`

`

export const query = graphql`
  query ImgQuery {
    allFile {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toFind = (path: string) => (edge: any) => edge.node.relativePath === path

const Image = (props: Props): JSX.Element => (
  <StaticQuery
    query={query}
    render={(data) => {
      const found = data
        .allFile
        .edges
        .find(toFind(props.name))
        .node
        .childImageSharp
        .fluid
      return (
        <Wrapped
          fluid={found}
          alt=""
          objectFit="contain"
          style={{ height: '100%' }}
          imgStyle={{ objectFit: 'contain', height: '100%' }}
        />
      )
    }}
  />
)

export default Image
