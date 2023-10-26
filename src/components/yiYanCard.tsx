import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Skeleton,
  SkeletonItem,
} from "@fluentui/react-components";
import { useEffect, useState } from "react";
import c from "classnames";
import { IoMdRefresh } from "react-icons/io";
export type YiYanType = {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;
  from_who: null | string;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
};
import { BsFillBoomboxFill } from "react-icons/bs";
const YiYanCard = ({ className }: { className?: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [yiyan, setYiyan] = useState<YiYanType>();
  const fetchHitokoto = async () => {
    setIsLoading(true);
    const response = await fetch("https://v1.hitokoto.cn");
    await response.json().then((data) => {
      localStorage.setItem("yiyan", JSON.stringify(data));
      //等待1s
      setTimeout(() => setIsLoading(false), 1000);
      setYiyan(data);
    });
  };
  useEffect(() => {
    const yiYanLocation = localStorage.getItem("yiyan");
    if (
      !yiYanLocation ||
      yiYanLocation === "undefined" ||
      yiYanLocation === "[]"
    ) {
      fetchHitokoto();
    } else {
      setYiyan(JSON.parse(yiYanLocation));
    }
  }, []);
  return (
    <Card className={c(" min-w-[200px]", className)}>
      <CardHeader
        header={
          <div className="flex items-center gap-2 ">
            <BsFillBoomboxFill className="text-xl" />
            <span className="font-semibold ">一言</span>
          </div>
        }
        action={
          !isLoading ? (
            <Button
              icon={<IoMdRefresh />}
              appearance="subtle"
              onClick={fetchHitokoto}
            />
          ) : (
            <SkeletonItem shape="circle" size={24} />
          )
        }
      />
      {!isLoading ? (
        <div className="relative flex items-center justify-center h-full max-h-full">
          <p className="absolute top-0 left-0">『</p>
          <p className="m-5 font-semibold lg:text-xl ">{yiyan?.hitokoto}</p>
          <p className="absolute bottom-0 right-0">』</p>
        </div>
      ) : (
        <Skeleton className="flex flex-col gap-1">
          <SkeletonItem size={24} />
          <SkeletonItem size={24} />
          <SkeletonItem size={24} />
        </Skeleton>
      )}
      <CardFooter>
        {!isLoading ? (
          <div className="flex justify-end w-full gap-2">
            <span>
              {"—— "}
              {yiyan?.from_who}
            </span>
            <span>
              {"["}
              {yiyan?.from}
              {"]"}
            </span>
          </div>
        ) : (
          <SkeletonItem size={16} className="w-20 " />
        )}
      </CardFooter>
    </Card>
  );
};
export default YiYanCard;
