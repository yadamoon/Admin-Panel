
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  // eslint-disable-next-line no-unused-vars
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="hover:opacity-75"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieComponent = () => {
  return (
    <div className="my-3">
      <div>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                className="p-10"
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <br />
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center sm:mx-10">
        {data.map((list, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded bg-white col-span-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 "
          >
            <span>{list.name}</span>
            <div
              className="border w-5 h-4"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieComponent;
