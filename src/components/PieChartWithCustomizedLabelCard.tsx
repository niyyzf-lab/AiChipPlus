/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 */

import { Card, CardHeader, Label } from "@fluentui/react-components";
import c from "classnames";
import { BsFillPieChartFill } from "react-icons/bs";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
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
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const PieChartWithCustomizedLabelCard = ({
  className,
  data,
}: {
  className: string;
  data: Array<any>;
}) => {
  data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <Card
      className={c(
        "h-full overflow-visible max-w-[250px] min-w-[180px]",
        className
      )}
    >
      <CardHeader
        header={
          <div className="flex items-center gap-1">
            <BsFillPieChartFill className="text-xl" />
            <Label>PieChart</Label>
          </div>
        }
      />
      <div className="relative flex items-center justify-center overflow-visible">
        <div className="hidden lg:block min-w-fit">
          {data.map((item, index) => (
            <div className="flex items-center gap-1">
              <span
                style={{ backgroundColor: colors[index] }}
                className="w-2 h-2 bg-black rounded-full"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <ResponsiveContainer className="overflow-visible">
          <PieChart className="overflow-visible">
            <Tooltip />
            <Pie
              className="overflow-visible"
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={68}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
export default PieChartWithCustomizedLabelCard;
