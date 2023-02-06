/** @jsx h */
import { h } from "preact";
import Island from "../islands/Island.island.tsx";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Island />
    </div>
  );
}
