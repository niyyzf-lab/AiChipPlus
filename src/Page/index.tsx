import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const page = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return <></>;
};
export default page;
