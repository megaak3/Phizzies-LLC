import React from 'react';
import styled from 'styled-components';
import { getProductsFromCollection } from "../util";

import PageWrapper from './ui/PageWrapper';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ProductList from './product/ProductList';

const Hero = styled.div `
  height: 300px;
  background: #f574d5;
  background-image: url('https://media.istockphoto.com/photos/colorful-bath-bombs-on-a-pastel-orange-background-picture-id1176846059?b=1&k=6&m=1176846059&s=170667a&w=0&h=LSyHLi9gefEGN8zPWEPQljTHQnVLInf8fKvEbl9NVjw=');
  background-size: cover;
  color: black;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -40px -40px 60px;
`;

const Landing = ({ config }) => {
  const featuredProducts = getProductsFromCollection(config, "featured-products");

  return (
    <PageWrapper>
      <Paper style={{ padding: "40px" }}>
        <Hero>
          <div style={{ display: "inline-block", maxWidth: "80%"}}>
            <p>Welcome to Phizzies!</p>
          </div>
        </Hero>
        <Divider style={{ margin: "40px 0" }}/>
        <ProductList products={featuredProducts} />
      </Paper>
    </PageWrapper>
  );
};

export default Landing;