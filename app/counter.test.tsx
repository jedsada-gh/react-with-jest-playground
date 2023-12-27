/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Counter from "./counter";
import { getData } from "./service";

jest.mock("./service", () => ({
  getData: jest.fn(),
}));

it("App Router: Works with Client Components (React State) and getData success", async () => {
  (getData as jest.Mock).mockReturnValue(
    Promise.resolve({ title: "delectus aut autem 1" })
  );
  // jest.spyOn(Service.prototype, "getData").mockImplementation(() => {
  //   return Promise.resolve({ title: "delectus aut autem" });
  // });

  render(<Counter />);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  fireEvent.click(screen.getByTestId("plus-btn"));
  expect(screen.getByRole("heading")).toHaveTextContent("1");
  fireEvent.click(screen.getByTestId("minus-btn"));
  expect(screen.getByRole("heading")).toHaveTextContent("0");

  await waitFor(() => {
    expect(screen.getByTestId("title")).toHaveTextContent("delectus aut autem");
  });
});

it("App Router: Works with Client Components (React State) and getData failed", async () => {
  (getData as jest.Mock).mockReturnValue(Promise.reject("Not Found"));
  // jest.spyOn(Service.prototype, "getData").mockImplementation(() => {
  //   return Promise.reject("Not Found");
  // });

  render(<Counter />);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  fireEvent.click(screen.getByTestId("plus-btn"));
  expect(screen.getByRole("heading")).toHaveTextContent("1");

  await waitFor(() => {
    expect(screen.getByTestId("error-message")).toHaveTextContent("Not Found");
  });
});
