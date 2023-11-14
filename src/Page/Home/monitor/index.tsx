import CavesCard from "../../../components/cavesCard";
import ChangeCard from "../../../components/changeCard";
import YiYanCard from "../../../components/yiYanCard";
import NormalCard from "../../../components/normalCard";
import "mac-scrollbar/dist/mac-scrollbar.css";
import { MacScrollbar } from "mac-scrollbar";
import {
  BiSolidErrorCircle,
  BiSolidUpArrow,
  BiSolidDownArrow,
} from "react-icons/bi";
import { GoNumber } from "react-icons/go";
import { Label } from "@fluentui/react-components";
import { VscPassFilled } from "react-icons/vsc";
import { AiOutlinePercentage } from "react-icons/ai";
import PieChartWithCustomizedLabelCard from "../../../components/PieChartWithCustomizedLabelCard";
import ArrowInfoCard from "../../../components/arrowInfoCard";
const MonitorPage = () => {
  return (
    <MacScrollbar className="flex flex-col w-full gap-4 p-10 pt-5 overflow-y-auto">
      <div className="flex w-full h-48 gap-2 ">
        <ChangeCard data={[]} className="flex-1 " />
        <div className="flex min-w-[200px] flex-col gap-2 ">
          <NormalCard
            className="flex-1 "
            header={
              <div className="flex items-center gap-1 ">
                <BiSolidErrorCircle className="text-2xl" />
                <Label>残次率</Label>
              </div>
            }
          >
            <div className="flex items-center justify-center gap-2 ">
              <div className="flex items-center gap-1">
                <GoNumber className="text-2xl" />
                <span className="text-lg ">13213</span>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlinePercentage className="text-xl" />
                <span className="text-lg ">90%</span>
              </div>
              <div className="flex items-center gap-1">
                <BiSolidUpArrow className="text-xl text-red-500" />
                <span className="text-lg ">90%</span>
              </div>
            </div>
          </NormalCard>
          <NormalCard
            className="flex-1 "
            header={
              <div className="flex items-center gap-1 ">
                <VscPassFilled className="text-2xl" />
                <Label>成品率</Label>
              </div>
            }
          >
            <div className="flex items-center justify-center gap-2 ">
              <div className="flex items-center gap-1">
                <GoNumber className="text-2xl" />
                <span className="text-lg ">13213</span>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlinePercentage className="text-xl" />
                <span className="text-lg ">11%</span>
              </div>
              <div className="flex items-center gap-1">
                <BiSolidDownArrow className="text-xl text-green-500" />
                <span className="text-lg ">11%</span>
              </div>
            </div>
          </NormalCard>
        </div>
        <PieChartWithCustomizedLabelCard className="flex-1 " data={[]} />
        <YiYanCard className="flex-1 " />
      </div>
      <div className="flex flex-1 min-h-[400px] gap-2">
        <CavesCard className="flex-1 " />
        <ArrowInfoCard />
        asdasd
      </div>
    </MacScrollbar>
  );
};
export default MonitorPage;
