import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../src/components/Templates/Layout';
import ProductsSection from '../src/components/Templates/ProductsSection';
import RoadmapSection from '../src/components/Templates/RoadmapSection';
import ArticlesSection from '../src/components/Templates/ArticlesSection';
import AboutSection from '../src/components/Templates/AboutSection';
import Landing from '../src/components/Templates/Landing';

import { HYDRANET_MEDIUM_FETCH_URL } from '../src/constants';
import { IArticle } from '../src/interfaces';
import MetaTags from '../src/components/Atoms/MetaTags';

export async function getStaticProps() {
  let hasErrorFetchingArticles = false;
  let articles: Array<IArticle> = [];

  try {
    const response = await fetch(HYDRANET_MEDIUM_FETCH_URL);
    const { items } = await response.json();
    articles = items;
  } catch (err) {
    hasErrorFetchingArticles = true;
  }

  return {
    props: {
      articles,
      hasErrorFetchingArticles,
    },
  };
}

type HomeProps = {
  articles: Array<IArticle>;
  hasErrorFetchingArticles: boolean;
};

const Home: NextPage<HomeProps> = ({
  articles,
  hasErrorFetchingArticles,
}: HomeProps) => {
  return (
    <>
      <Head title={'The first Layer 3 native asset multichain DEX'}>
        <MetaTags />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Landing />

        <AboutSection id={'about'} />

        <ProductsSection id={'products'} />

        <RoadmapSection id={'roadmap'} />

        <ArticlesSection
          id={'articles'}
          articles={articles}
          hasErrorFetchingArticles={hasErrorFetchingArticles}
        />
      </Layout>
    </>
  );
};

export default Home;
