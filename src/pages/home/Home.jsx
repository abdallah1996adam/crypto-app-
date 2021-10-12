import React from "react";
import millify from "millify";
import { Statistic, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Typography.Title level={5} className="heading">
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5"></Statistic>
        </Col>
      </Row>
    </>
  );
};

export default Home;
