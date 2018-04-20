import { h } from "hyperapp";

const AddPlayer = ({ actions }) => (
  <div>
    <input oninput={e => actions.changeName(e.target.value)} />
    <button onclick={() => actions.savePlayer()}>Add Player</button>
  </div>
);

export default AddPlayer;
