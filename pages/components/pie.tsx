import React from "react";
import { PieChart } from "react-minimal-pie-chart";

type Props = {};

const Pie = (props: Props) => {
  return (
    <div>
      <PieChart
        data={[
          { title: "cheese", value: 1, color: "#AFF8D8" },
          { title: "wine", value: 2, color: "#A79AFF" },
        ]}
      />
    </div>
  );
};

export default Pie;
