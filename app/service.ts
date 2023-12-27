import axios from "axios";

export interface IDataRepository {
  getData(): Promise<any>;
}

export class DataRepository implements IDataRepository {
  getData(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export class DataService {
  private dataRepository: IDataRepository;

  constructor(repo: IDataRepository) {
    this.dataRepository = repo;
  }

  getData(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.dataRepository
        .getData()
        .then((data) => {
          console.log("data", data);
          if (data.userId === 1) {
            resolve({
              title: "Hi there, I am a mock",
            });
          } else {
            resolve({
              title: data.title,
            });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export const getData = () => {
  return new Promise<any>((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
