import { IS_BROWSER } from "$fresh/runtime.ts";
import Test from "../islands/Test.island.tsx";

export default function Home() {
  return (
    <div>
      <Test message="Hello!" />
      <p>{IS_BROWSER ? "Viewing browser render." : "Viewing JIT render."}</p>
    </div>
  );
}
