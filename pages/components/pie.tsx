import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useStore } from "../../lib/store/store";

type Props = {};

const Pie = (props: Props) => {
  const pie = useStore((state) => state.pie);
  return (
    <div>
      <PieChart
        style={{ marginBottom: "1em" }}
        data={[
          { title: "cheese", value: pie.numOfCheese, color: "#FDFD96" },
          { title: "wine", value: pie.numOfWine, color: "#FF6961" },
        ]}
      />
    </div>
  );
};

export default Pie;
