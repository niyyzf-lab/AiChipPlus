import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  });
  return (
    <>
      <h1>Hello world!</h1>
    </>
  );
};

export default Root;
