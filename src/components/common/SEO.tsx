import Head from 'next/head';
import { FC } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SEO: FC<SEOProps> = ({ title, description, canonical }) => {
  return (
    <Head>
      <title>{title} | Better Clone</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default SEO; 