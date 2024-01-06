import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "P.A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "P.B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "P.C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const Chart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
      <div className="flex ">
        <LineChart
          width={window.innerWidth > 1000 ? 1000 : window.innerWidth - 20}
          height={400}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          className="flex"
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            name="pv of pages"
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
          />
          <Line
            name="uv of pages"
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
          />
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;
