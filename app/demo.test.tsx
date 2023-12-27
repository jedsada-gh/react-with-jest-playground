import { DemoComponent } from "./demo";
import { render, screen, waitFor } from "@testing-library/react";
import Link from "next/link";
import renderer from 'react-test-renderer';

jest.mock("./service", () => ({
  getUser: () => Promise.resolve({ title: "delectus aut autem" }),
}));

it("DemoComponent render", async () => {
  render(<DemoComponent />);
  expect(screen.getByTestId("title")).toHaveTextContent("Demo");
  await waitFor(() => {
    expect(screen.getByTestId("name")).toHaveTextContent("Title Test Demo");
  })
});

it('renders correctly', () => {
  const tree = renderer
    .create(<DemoComponent/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
