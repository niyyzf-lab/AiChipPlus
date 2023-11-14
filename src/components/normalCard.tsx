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

import { Card, CardFooter, CardHeader } from "@fluentui/react-components";
import c from "classnames";
import { DetailedHTMLProps, HTMLAttributes, ReactPortal } from "react";
const NormalCard = ({
  className,
  header,
  children,
  footer,
}: {
  className?: string;
  header: Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "ref"
  >;
  children: ReactPortal | string | Element | any;
  footer?: any;
}) => {
  return (
    <Card className={c("min-w-fit", className)}>
      <CardHeader header={header} />
      {children}
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};
export default NormalCard;
