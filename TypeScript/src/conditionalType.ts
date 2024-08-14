// 条件类型：根据条件来确定类型。

interface A {
  name: string;
}

interface B {
  id: number;
}

interface Class extends A {
  description: string;
}

type MyType2 = Class extends A ? string : number; // 显然 Class 是继承 A 的，所以 MyType 被标注为了 string
