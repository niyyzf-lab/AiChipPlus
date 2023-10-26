import { Button, Card, CardHeader, Label } from "@fluentui/react-components";
import { BiChip } from "react-icons/bi";
import c from "classnames";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { IoMdRefresh } from "react-icons/io";
import { GoNumber } from "react-icons/go";
const ChangeCard = ({
  className,
  data,
}: {
  className?: string;
  data: Array<any>;
}) => {
  data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <Card className={c(" min-w-[255px]", className)}>
      <CardHeader
        header={
          <div className="flex items-center gap-1">
            <BiChip className="text-2xl " />
            <Label className="font-semibold ">芯片总数</Label>
          </div>
        }
        action={<Button icon={<IoMdRefresh />} appearance="subtle" />}
      />
      <div className="flex flex-col w-full h-full ">
        <div className="absolute flex items-center gap-1 right-5 top-10">
          <GoNumber className="text-3xl" />
          <span className="text-2xl font-semibold ">131231231</span>
        </div>

        <ResponsiveContainer>
          <LineChart data={data}>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#8412d5"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
export default ChangeCard;
