import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";

const Seo = ({ description, image, lang, meta, title }) => {

  const metaDescription = description || 'Fart timer';
  const metaImage = image || '';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1, shrink-to-fit=no`
        },
        {
          name: `theme-color`,
          content: `#000000`
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'FartMasterFlex',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: metaImage,
        },
        {
          name: `og:image:secure_url`,
          content: metaImage
        }
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default Seo;
