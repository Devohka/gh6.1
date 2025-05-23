import Joke from "../Joke/Joke";
import { useEffect, useState } from "react";

export type JokeSchema = {
  id: number;
  type?: string;
  setup: string;
  punchline: string;
};

interface JokesListData {
  data: {
    id: number;
    setup: string;
    punchline: string;
    type: string;
  };
}

const JokesList = () => {
  const [jokes, setJokes] = useState<JokeSchema[]>([]);
  useEffect(() => {
    const cb = async () => {
      try {
        const resp: Response = await fetch(
          "https://official-joke-api.appspot.com/jokes/random/20"
        );
        const data: JokeSchema[] = await resp.json();
        setJokes(data);
      } catch (err) {
        console.log("Error!", err);
      }
    };
    cb();
  }, []);
  return (
    <>
    <h1>Funny jokes</h1>
      <ul>
        {jokes.length !== 0 &&
          jokes.map((joke) => <Joke {...joke} key={joke.id} />)}
      </ul>
    </>
  );
};

export default JokesList;
