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
          { title: "suggestion", value: pie.num0fSuggestion, color: "#85E3FF" },
        ]}
      />
    </div>
  );
};

export default Pie;
