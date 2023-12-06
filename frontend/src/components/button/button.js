import { react } from "react";
import { button } from "react-bootstrap";

export const button = (props) => {
  return (
    <div>
      <Button as="a" variant="primary">
        Button as link
      </Button>
    </div>
  );
};
