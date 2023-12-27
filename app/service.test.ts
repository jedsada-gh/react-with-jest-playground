import { DataRepository, DataService } from "./service";
import { mock } from "jest-mock-extended";

it("DataService calls", async () => {
  const mockRepository = mock<DataRepository>();
  mockRepository.getData.mockResolvedValue({ userId: 2, title: "here" });
  const dataService = new DataService(mockRepository);
  const data = await dataService.getData();
  expect(mockRepository.getData).toHaveBeenCalledTimes(1);
  expect(data.title).toBe("Hi there, I am a mock");
});
