"use client";

import { useEffect, useMemo, useState } from "react";
import { Service, getData } from "./service";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState(null);
  // const service: Service = new Service();

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setErrorMessage(err);
      });

    // service
    //   .getData()
    //   .then((data) => {
    //     setData(data);
    //   })
    //   .catch((err) => {
    //     setErrorMessage(err);
    //   });
  }, []);

  return (
    <>
      <h2>{count}</h2>
      <div>
        <button
          data-testid="plus-btn"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          data-testid="minus-btn"
          type="button"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
      {errorMessage ? (
        <p data-testid="error-message">{`err: ${errorMessage}`}</p>
      ) : (
        <p data-testid="title">{data?.title}</p>
      )}
    </>
  );
}
