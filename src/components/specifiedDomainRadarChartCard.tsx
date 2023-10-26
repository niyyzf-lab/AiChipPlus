import { Card, CardHeader, Label } from "@fluentui/react-components";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { AiOutlineRadarChart } from "react-icons/ai";
import c from "classnames";
const SpecifiedDomainRadarChartCard = ({
  className,
  data,
}: {
  className?: string;
  data: Array<any>;
}) => {
  data = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  return (
    <Card className={c("", className)}>
      <CardHeader
        header={
          <div className="flex items-center ">
            <AiOutlineRadarChart className="text-2xl" />
            <Label className="font-medium ">RadarChart</Label>
          </div>
        }
      />
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
};
export default SpecifiedDomainRadarChartCard;
