/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Counter from "./counter";
import { DataRepository, DataService } from "./service";
import userRes from "./__mocks__/user.json";

it("App Router: Works with Client Components (React State) and getData success", async () => {

  jest.spyOn(DataRepository.prototype, "getData").mockImplementation(() => {
    return Promise.resolve({userId: 2, title: "Mod"});
  });

  render(<Counter />);

  const counterEle = screen.getByRole("heading")
  console.log("init: ", counterEle.style.color)
  expect(counterEle.style.color).toEqual("red")

  expect(screen.getByRole("heading")).toHaveTextContent("0");
  fireEvent.click(screen.getByTestId("plus-btn"));
  fireEvent.click(screen.getByTestId("plus-btn"));
  console.log("before: ", counterEle.style.color)
  expect(counterEle.style.color).toEqual("red")
  expect(screen.getByRole("heading")).toHaveTextContent("2");
  fireEvent.click(screen.getByTestId("minus-btn"));
  console.log("after: ", counterEle.style.color)
  expect(counterEle.style.color).toEqual("green")
  expect(screen.getByRole("heading")).toHaveTextContent("1");

  await waitFor(() => {
    expect(screen.getByTestId("title")).toHaveTextContent("Mod");
  });
});

// it("App Router: Works with Client Components (React State) and getData failed", async () => {
//   // (getData as jest.Mock).mockReturnValue(Promise.reject("Not Found"));

//   jest.spyOn(DataService.prototype, "getData").mockImplementation(() => {
//     return Promise.reject("Not Found");
//   });

//   render(<Counter />);
//   expect(screen.getByRole("heading")).toHaveTextContent("0");
//   fireEvent.click(screen.getByTestId("plus-btn"));
//   expect(screen.getByRole("heading")).toHaveTextContent("1");

//   await waitFor(() => {
//     expect(screen.getByTestId("error-message")).toHaveTextContent("Not Found");
//   });
// });
