/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react'

import SEO, { Props as SEOProps } from '../seo/SEO'
import Module, { Props as ModuleProps } from '../../modules/Modules'

export type Props = {
  seo: SEOProps;
  components: ModuleProps[];
}

const Page = (props: Props): JSX.Element => {
  const {
    seo,
    components,
  } = props
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
