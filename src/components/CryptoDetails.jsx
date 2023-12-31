import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [TimePeriod, setTimePeriod] = useState('7d')
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const cryptoDetails = data?.data?.coin;

  // const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  // const status = [
  //   { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
  //   { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
  //   { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <ThunderboltOutlined /> },
  //   { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
  //   { title: 'All-time-high(dailt.svg)', value: `$ ${millify(CryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
  // ];

  // const genericStaus = [
  //   { title: 'Number of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
  //   { title: 'Number of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
  //   { title: 'Approved Supply', value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
  //   { title: 'Total Supply', value: `$ ${millify(cryptoDetails.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
  //   { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
  // ];

  return (
    <Col className="coin-detail-container">
    <Col className="coin-heading-container">
      <Title level={2} className="cion-name">
        {cryptoDetails.name} ({cryptoDetails.slug}) price
      </Title>
    </Col>
    </Col>
  );
}

export default CryptoDetails
