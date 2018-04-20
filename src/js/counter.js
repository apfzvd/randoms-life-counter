import { h } from "hyperapp";

const Counter = ({ name, life, index, actions }) => (
  <div>
    <button onclick={() => actions.down({ value: 5, index })}>-5</button>
    <button onclick={() => actions.down({ value: 1, index })}>-1</button>
    <span>
      {name}: {life}
    </span>
    <button onclick={() => actions.up({ value: 1, index })}>+1</button>
    <button onclick={() => actions.up({ value: 5, index })}>+5</button>
  </div>
);

export default Counter;
