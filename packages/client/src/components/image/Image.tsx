import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

type Props = {
  name: string
}

export const query = graphql`
  query ImgQuery {
    allFile {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const toFind = (path: string) => (edge: any) => edge.node.relativePath === path

const Image = (props: Props): JSX.Element => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const found = data
          .allFile
          .edges
          .find(toFind(props.name))
          .node
          .childImageSharp
          .fluid
        return <Img
          fluid={found}
          alt=""
        />
      }}
    />
  )
}

export default Image
