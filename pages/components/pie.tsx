import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useStore } from "../store/store";

type Props = {};

const Pie = (props: Props) => {
  const pie = useStore((state) => state.pie);
  return (
    <div>
      <PieChart
        style={{ marginBottom: "1em" }}
        data={[
          { title: "cheese", value: pie.numOfCheese, color: "#AFF8D8" },
          { title: "wine", value: pie.numOfWine, color: "#A79AFF" },
        ]}
      />
    </div>
  );
};

export default Pie;
