import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

function Highlight({ report }) {
  // const data = report && report.lenght ? report[report.length - 1] : []
  const data = report[report.length - 1];


  const summary = [
    {
      title: 'Số ca nhiễm',
      number: data?.Confirmed,
      type: 'confirmed'
    },
    {
      title: 'Số ca khỏi',
      number: data?.Recovered,
      type: 'recovered'
    },
    {
      title: 'Số ca tử vong',
      number: data?.Deaths,
      type: 'deaths'
    },
  ]


  return (
    <Grid container spacing={3}>
      {
        summary.map((item, index) =>
          <Grid item sm={4} xs={12}>
            <HighlightCard key={index} title={item.title} number={item.number} type={item.type} />
          </Grid>
        )
      }
    </Grid>
  );
}

export default Highlight;
