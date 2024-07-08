import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";

function Estoque() {
  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <BarChart
        series={[{ data: [35, 44, 24, 34] }]}
        height={290}
        xAxis={[
          {
            data: ["Produto 1", "Produto 2", "Produto 3", "Produto 4"],
            scaleType: "band",
          },
        ]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </Paper>
  );
}

export default Estoque;
