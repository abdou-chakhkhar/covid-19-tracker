import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2>{cases}</h2>
        <Typography>{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
