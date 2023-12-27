import Counter from "./counter";
import { DemoComponent } from "./demo";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <div>
      <h1>App Router</h1>
      <Counter />
      <DemoComponent />
    </div>
  );
}
