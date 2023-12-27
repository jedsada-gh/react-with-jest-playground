/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import Page from "./page";
import { getData } from "./service";

jest.mock("./service", () => ({
  getData: jest.fn(),
}));

it("App Router: Works with Server Components", async () => {
  (getData as jest.Mock).mockReturnValue(
    Promise.resolve({ title: "delectus aut autem" })
  );
  render(<Page />);
  
  // screen.getByRole("heading", {level: 1})
  // const element = screen.getAllByText(/App Router/i);
  // expect(element[0]).toBeInTheDocument();
  // expect(element).not.toBeNull();
  // expect(element).not.toBeUndefined();

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "App Router"
  );

  await waitFor(() => {
    expect(screen.getByTestId("title")).toHaveTextContent("delectus aut autem");
  });
});
