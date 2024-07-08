import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function Estoque() {
  return (
    <> 

    <BarChart
      series={[
        { data: [35, 44, 24, 34] },
      ]}
      height={290}
      xAxis={[{ data: ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />

    </>
   
  );
}

export default Estoque;
