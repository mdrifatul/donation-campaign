
import { Cell, Pie, PieChart } from "recharts";


const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 200 },

];

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      data={data}
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default function Statistics() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
    <PieChart width={350} height={350}>
      <Pie
        data={data}
        cx={170}
        cy={160}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      
    </PieChart>
    </div>
    <div className="md:flex justify-center items-center mb-20">
     <div className="flex justify-center items-center text-lg">Your Donation <p className="h-3 bg-[#FF444A] w-24 rounded-sm ml-3 mr-10
     "></p></div>
     <div className="flex justify-center items-center text-lg">Total Donation <p className="h-3 bg-[#00C49F] w-24 rounded-sm ml-3 mr-10 "></p></div>
    </div>
    </>
  );
}
