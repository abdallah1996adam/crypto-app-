import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Row, Card, Input, Col } from "antd";
import { useGetCryptosQuery } from "../../services/crypyoApi";

const CryptoCrunnencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [crypto, setCryptos] = useState(cryptoList?.data?.coins);


  if(isFetching) return "loading......."

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto?.map((coin) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
            <Link to={`/crypto/${coin.id}`}>
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={<img className="crypto-image" src={coin.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(coin.price)}</p>
                <p>Market Cap: {millify(coin.marketCap)} </p>
                <p>Daily change: {millify(coin.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCrunnencies;
