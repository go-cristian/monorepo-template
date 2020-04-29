/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react'

import SEO, { Props as SEOProps } from '../seo/SEO'
import Module, { Props as ModuleProps } from '../../modules/Modules'

type Data = {
  seo: SEOProps;
  components: ModuleProps[];
}

type Props = {
  path: string;
}

const map = (_props: Props): Data => {
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
        icon: '/logo.svg',
      },
    }],
  }
  return data
}

const Page = (props: Props): JSX.Element => {
  const data = map(props)
  const {
    seo,
    components,
  } = data
  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url={seo.url}
        imageUrl={seo.imageUrl}
      />
      {components.map((component) => (
        <Module
          key={component.type}
          type={component.type}
          labels={component.labels}
        />
      ))}
    </>
  )
}

export default Page
