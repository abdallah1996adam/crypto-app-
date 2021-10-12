import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
//pages
import {
  CryptoCurrencies,
  Home,
  Exchanges,
  CryptoDetails,
  News,
} from "./pages";

//components
import { NavBar } from "./components";
//css
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/exchanges" component={Exchanges} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  component={CryptoCurrencies}
                />
                <Route exact path="/crypto/:coinId" component={CryptoDetails} />
                <Route exact path="/news" component={News} />
              </Switch>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Crypto News <br />
              All Right Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home </Link>
              <Link to="/news">News </Link>
              <Link to="/exchanges">Exchanges</Link>
            </Space>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
