//LIBRARIES
import React, { useState } from 'react';
import MotionHoc from "../motion";
import styled from "styled-components";

import { PortfolioData } from '../../../data/portfolios';

import PortfolioCard from '../../../components/card/portfolio/index';
import Separator from '../../../components/common/separator/index';
import FilterPortfolio from '../../../components/filter/portfolio/index';

import Footer from '../../../components/footer/index';

const PortfolioPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SectionTitle = styled.label`
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 600;
`;

const Desc = styled.div`
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const PortfolioComponent = () => {

  const [data] = useState(PortfolioData);
  const [filterData, filterSetData] = useState(PortfolioData);
  
  return (
    <div>
      <PortfolioPage>
        <Separator />
        <SectionTitle>Projects</SectionTitle>

        <FilterPortfolio data={data} filterSetData={filterSetData} />

        <div>
          {filterData.length < 1 && <Desc>Hasil tidak ditemukan</Desc> }
          {filterData && filterData.map((portfolio, id)=>{
            return (
              <PortfolioCard portfolio={portfolio} key={id} />
            )
          })}
        </div>
      </PortfolioPage>
      <Footer />

    </div>
  );
};

const Portfolio = MotionHoc(PortfolioComponent);

export default Portfolio;