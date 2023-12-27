"use client";

import { useEffect, useMemo, useState } from "react";
import { DataRepository, DataService } from "./service";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const service: DataService = useMemo(() => {
    return new DataService(new DataRepository());
  }, []);

  const [color, setColor] = useState("red")

  useEffect(() => {
    service
      .getData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  }, []);

  return (
    <>
      <h2 style={{ color: `${color}` }}>{count}</h2>
      <div>
        <button
          data-testid="plus-btn"
          type="button"
          onClick={() => {
            setColor("red")
            setCount(count + 1)
          }}
        >
          +
        </button>
        <button
          data-testid="minus-btn"
          type="button"
          onClick={() => {
            setColor("green")
            setCount(count - 1)
          }}
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
