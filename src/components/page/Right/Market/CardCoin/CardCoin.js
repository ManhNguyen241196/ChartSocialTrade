import React from "react";
import "./cardcoin.css";
import { Col, Row } from "antd";
import TradingView_Card from "./CardChartView/CardChart";

export default function CardCoin({ itemdata }) {
  return (
    <div className="container_card">
      <Row>
        <Col className="container_card-symbol col" span={7}>
          <div className="title"> {itemdata} </div>
          <div className="sourceData">Chỉ số từ Binance</div>
        </Col>
        <Col className="container_card-chart col" span={10}>
          <TradingView_Card itemdata={itemdata} key={itemdata} />
        </Col>
        {/* phan này fetch từ console.log(await client.dailyStats({ symbol: 'ETHBTC' })) */}
        <Col className="container_card-price col" span={7}>
          <span className="price_value"> 123.50 </span>
          <span className="price_raito up">-0.1/-3.15%</span>
        </Col>
      </Row>
    </div>
  );
}
