export const plus = (a: number, b: number) => a + b;

export const minus = (a: number, b: number): number => {
  return a - b;
};

export const transformUserData = (user: any) => {
  if (user.title === "delectus aut autem") {
    user.title = "Title Test Demo";
  }
  return user;
};
