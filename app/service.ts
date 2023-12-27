import axios from "axios";

export class Service {
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
