import Counter from "../../islands/Counter.island.tsx";
import KebabCaseFileNameTest from "../../islands/kebab-case-counter-test.island.tsx";
import Test from "../../islands/Test.island.tsx";

export default function Home() {
  return (
    <div>
      <Counter id="counter1" start={3} />
      <Counter id="counter2" start={10} />
      <KebabCaseFileNameTest id="kebab-case-file-counter" start={5} />
      <Test message="" />
      <Test message={`</script><script>alert('test')</script>`} />
    </div>
  );
}
