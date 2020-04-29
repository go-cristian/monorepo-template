import React from 'react'
import { Helmet } from 'react-helmet'

export type Props = {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
}

const SEO = (props: Props): JSX.Element => {
  const {
    title,
    description,
    url,
    imageUrl,
  } = props
  return (
    <Helmet title={title}>
      <meta
        name="viewport"
        content="width=device-width, viewport-fit=cover, initial-scale=1, maximum-scale=1, minimum-scale=1"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="image" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default SEO
