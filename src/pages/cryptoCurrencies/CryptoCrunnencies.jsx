import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Row, Card, Input, Col } from "antd";
import { useGetCryptosQuery } from "../../services/crypyoApi";
import { Loader } from "../../components";

const CryptoCrunnencies = ({ simplified }) => {
  const count = simplified ? 1 : 100;
  const [searchCoin, setSearchCoin] = useState("");
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [crypto, setCryptos] = useState([]);

  useEffect(() => {
    const filtredCoin = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchCoin.toLowerCase())
    );

    setCryptos(filtredCoin);
  }, [searchCoin, cryptoList]);

  if (isFetching) return <Loader/>;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search for coins"
            onChange={(e) => setSearchCoin(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto?.map((coin) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
            <Link to={`/crypto/${coin.id}`}>
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={<img className="crypto-image" alt="crypto" src={coin.iconUrl} />}
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
