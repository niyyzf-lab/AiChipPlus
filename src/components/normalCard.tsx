import { Card, CardFooter, CardHeader } from "@fluentui/react-components";
import { DetailedHTMLProps, HTMLAttributes, ReactPortal } from "react";
import c from "classnames";
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
