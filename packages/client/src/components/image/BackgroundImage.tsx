import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

type Props = {
  name: string
}

const Wrapped = styled(Img)`
  width: 100%;
  height: 100%;
`

export const query = graphql`
  query BackgroundImgQuery {
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
        />
      )
    }}
  />
)

export default Image
