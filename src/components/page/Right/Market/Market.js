import React from "react";
import "./market.css";
import Fillter from "./Fillter/Fillter";
import CardCoin from "./CardCoin/CardCoin";

export default function Market() {
  //dummy data se dk luc sau khi fetch từ binance về từ Home.js
  const DummyDatas = ["BTCUSDT", "BNBUSDT", "ETHUSDT", "ETHUSD", "STMXUSDT"];

  // sẽ sử dụng console.log(await client.dailyStats({ symbol: 'ETHBTC' }))  để fetch data để lọc ra array market .
  //  Tất nhiên cái này chỉ cập nhật 1 lần duy nhất khi được load lại trang
  return (
    <div className="item container_market">
      <header>Market</header>
      <div>
        <div className="body_tool">
          <Fillter />
        </div>
        <div className="body_show">
          {DummyDatas.map((itemdata) => {
            return <CardCoin itemdata={itemdata} key={`market${itemdata}`} />;
          })}
        </div>
      </div>
      <footer>
        <a href="#">Show more</a>
      </footer>
    </div>
  );
}
