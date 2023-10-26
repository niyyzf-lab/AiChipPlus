import { Card, CardHeader, Button, Label } from "@fluentui/react-components";
import { VscDebugStart, VscDebugRestart, VscDebugStop } from "react-icons/vsc";
import { AiFillVideoCamera } from "react-icons/ai";
import c from "classnames";
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
      <canvas id="canvas" className="h-20 bg-black rounded " />
    </Card>
  );
};
export default CavesCard;
