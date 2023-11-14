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

import { Label } from "@fluentui/react-components";
import { MacScrollbar } from "mac-scrollbar";
import "mac-scrollbar/dist/mac-scrollbar.css";
import { AiOutlinePercentage } from "react-icons/ai";
import {
  BiSolidDownArrow,
  BiSolidErrorCircle,
  BiSolidUpArrow,
} from "react-icons/bi";
import { GoNumber } from "react-icons/go";
import { VscPassFilled } from "react-icons/vsc";
import PieChartWithCustomizedLabelCard from "../../../components/PieChartWithCustomizedLabelCard";
import ArrowInfoCard from "../../../components/arrowInfoCard";
import CavesCard from "../../../components/cavesCard";
import ChangeCard from "../../../components/changeCard";
import NormalCard from "../../../components/normalCard";
import YiYanCard from "../../../components/yiYanCard";
const MonitorPage = () => {
  return (
    <MacScrollbar className="flex flex-col w-full gap-4 p-10 pt-5 overflow-y-auto">
      <div className="flex w-full h-48 gap-2 ">
        {/**总量展示组件 传入data*/}
        <ChangeCard data={[]} className="flex-1 " />
        <div className="flex min-w-[200px] flex-col gap-2 ">
          {/**残次率展示组件 传入data*/}
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
          {/**合格率展示组件 传入data*/}
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
        {/**饼图控件 传入data */}
        <PieChartWithCustomizedLabelCard className="flex-1 " data={[]} />
        {/**一言*/}
        <YiYanCard className="flex-1 " />
      </div>
      <div className="flex flex-1 min-h-[400px] gap-2">
        {/**监视控件 */}
        <CavesCard className="flex-1 " />
        {/*引脚列表展示控件 传入data */}
        <ArrowInfoCard />
      </div>
    </MacScrollbar>
  );
};
export default MonitorPage;
