import { react } from "react";
import { Button } from "react-bootstrap";
import "../../style/button.css";
// import "bootstrap/dist/css/bootstrap.min.css"; //delete to restore charlie's work
export const ReactButton = ({ name }) => {
  return (
    <div>
      <Button className="button">{name}</Button>
    </div>
  );
};
