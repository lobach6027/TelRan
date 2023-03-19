import React from "react";
import { useParams } from "react-router-dom";

export default function About() {
  const { name } = useParams();
  return (
    <div>
      <h1> Hello,{name??' nice to see you'}!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt
        laborum, dolor dolore ut illo velit doloremque saepe quibusdam assumenda
        aut sint earum obcaecati adipisci numquam ratione possimus, error vero.
      </p>
    </div>
  );
}
