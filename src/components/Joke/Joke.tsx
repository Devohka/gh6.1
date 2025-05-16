import { FC } from "react";
import { JokeSchema } from "../JokeList/JokeList";

// interface JokeItemData {
//   id: number;
//   setup: string;
//   punchline: string;
// }

const Joke: FC<JokeSchema> = ({ id, setup, punchline }) => {
  return (
    <li id={id.toString()}>
      <h2>{setup}</h2>
      <p>{punchline}</p>
      <span>{id}</span>
    </li>
  );
};
export default Joke;
