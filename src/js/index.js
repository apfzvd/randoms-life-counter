import { h, app } from "hyperapp";
import Counter from "./counter";
import Reset from "./reset";
import AddPlayer from "./add";

const state = {
  newPlayername: "",
  players: [
    {
      name: "Player 1",
      life: 20
    },
    {
      name: "Player 2",
      life: 0
    }
  ]
};

const actions = {
  down: ({ value, index }) => state =>
    (state.players[index].life = state.players[index].life - value),
  up: ({ value, index }) => state =>
    (state.players[index].life = state.players[index].life + value),
  reset: () => state => state.players.map(e => (e.life = 20)),
  changeName: name => state => (state.newPlayername = name),
  savePlayer: () => ({ newPlayername, players }) => {
    players.push({
      name:
        newPlayername !== "" ? newPlayername : `Player ${players.length + 1}`,
      life: 20
    });
    return { players, newPlayername: "" };
  }
};

const Title = ({ text }) => <h1>{text}</h1>;

const view = (state, actions) => (
  <div>
    <Title text="Bora jogar magic" />
    {state.players.map((e, i) => (
      <Counter {...state.players[i]} index={i} actions={actions} />
    ))}
    <Reset actions={actions} />
    <AddPlayer actions={actions} />
  </div>
);

const appNode = document.body;
app(state, actions, view, appNode);
