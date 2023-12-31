import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImge = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return 'Loading...';

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="seletc-news"
            placeholder="Select a news Crypto"
            optionFilterprop="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().index(input.toLowerCase())}
          >
            <Option value="Crytocurrency">Crytocurrency</Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href="news.url" target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImge} alt="news" />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description
                }
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImge} alt="news" />
                  <Text className="provide-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News
