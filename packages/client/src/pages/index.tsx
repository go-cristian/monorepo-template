/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { graphql } from 'gatsby'
import Page, { Props as PageProps } from '../components/page/Page'

type Props = {
  data: {
    contenfulPage: {
      id: string
      slug: string
      title: string
    }
  }
}

const map = (props: Props): PageProps => {
  const data = {
    seo: {
      title: '',
      description: '',
      url: '',
      imageUrl: '',
    },
    components: [{
      type: 'FirstModule',
      labels: {
        ...props.contentfulPage,
      },
    }],
  }
  return data
}

const TemplatePage = ({ data }: Props): JSX.Element => {
  const {
    seo,
    components,
  } = map(data)
  return (
    <Page
      seo={seo}
      components={components}
    />
  )
}

export const query = graphql`
  query IndexQuery {
    contentfulPage {
      id
      title
      slug
    }
  }
`

export default TemplatePage
