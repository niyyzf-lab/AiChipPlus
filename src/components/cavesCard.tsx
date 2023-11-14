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

import { Button, Card, CardHeader, Label } from "@fluentui/react-components";
import c from "classnames";
import { AiFillVideoCamera } from "react-icons/ai";
import { VscDebugRestart, VscDebugStart, VscDebugStop } from "react-icons/vsc";
const CavesCard = ({ className }: { className?: string }) => {
  return (
    <Card className={c("", className)}>
      <CardHeader
        header={
          <div className="flex items-center gap-1 ">
            <AiFillVideoCamera className="text-2xl" />
            <Label className="font-medium">Came</Label>
          </div>
        }
        action={
          <div className="flex">
            <Button
              appearance="transparent"
              icon={<VscDebugStart />}
              aria-label="More options"
            />
            <Button
              appearance="transparent"
              icon={<VscDebugStop />}
              aria-label="More options"
            />
            <Button
              appearance="transparent"
              icon={<VscDebugRestart />}
              aria-label="More options"
            />
          </div>
        }
      />
      {/**canvas */}
      <canvas id="canvas" className="h-20 bg-black rounded " />
    </Card>
  );
};
export default CavesCard;
