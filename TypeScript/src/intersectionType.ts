// 交叉类型，一种将两个或多个类型合并成新的类型的机制，用 & 连接这些类型。

type numberOrString = number | string; // type 后接上的就是类型别名

type AType<T> = T;

interface User {
  id: numberOrString;
  name: string;
}

interface Admin {
  canEditData: boolean;
  manageUsers: boolean;
}

type Employee = User & Admin;

interface MyItem {
  id: numberOrString;
  name: AType<string>;
}
