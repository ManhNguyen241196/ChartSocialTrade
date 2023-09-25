import React from "react";
import TradingViewWidget from "./ChartView/ChartView";

export default function TradingView() {
  return (
    <div className="TradingView_container item">
      <header>
        <p>
          <b>Header technical chart</b>
        </p>
      </header>
      <body>
        <div className="chartview">
          {" "}
          <TradingViewWidget />
        </div>
      </body>
    </div>
  );
}
