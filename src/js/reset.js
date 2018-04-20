import { h } from "hyperapp";

const Reset = ({ actions }) => (
  <button onclick={() => actions.reset()}>Reset</button>
);

export default Reset;
