"use client";

import { useEffect, useState } from "react";
import { getUser } from "./service";

export const DemoComponent = () => {
  const [user, setUser] = useState<any>(null);

  const getUserData = async () => {
    const user = await getUser();
    // TODO: logic data transformer
    const _user = transformUserData(user);
    setUser(_user);
  };

  const transformUserData = (user: any) => {
    if (user.title === "delectus aut autem") {
      user.title = "Title Test Demo";
    }
    return user;
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <p data-testid="title">Demo</p>
      <p data-testid="title1">Demo1</p>
      <p data-testid="name">{`${user?.title}`}</p>
    </div>
  );
};
