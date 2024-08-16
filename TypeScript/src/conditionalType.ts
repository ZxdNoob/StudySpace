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

// 条件类型让函数重载（Function Overloading）的语法更加简练
// 函数重载：在 TypeScript 中，函数重载（Function Overloading）是一种特性，允许你定义多个具有相同名称但参数列表不同的函数
// 函数重载的作用：提高代码的可读性和可维护性：通过为不同的参数类型提供明确的函数定义，可以使代码更易于理解。例如：一个用于处理数字和字符串的函数，通过函数重载，能清楚看出不同参数类型下函数的具体行为。

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

/* function createLabel(k: string): NameLabel;
function createLabel(k: number): IdLabel;
function createLabel(
  key: number | string
): IdLabel | NameLabel {
  if (typeof key === 'string') {
    return { name: key };
  }

  return { id: key };
}

const label1 = createLabel('xiaohong'); // 函数重载情况下才能推断出 label1 的最终类型为 NameLabel
const lable2 = createLabel(123); // 函数重载情况下才能推断出 label2 的最终类型为 IdLabel */

// 使用条件类型来简化上面的函数重载代码

type IdOrNameLabel<T> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(
  k: T
): IdOrNameLabel<T>;

function createLabel(
  k: string | number
): IdLabel | NameLabel {
  if (typeof k === 'string') {
    return {
      name: k,
    };
  }

  return { id: k };
}

const label3 = createLabel(666); // 被推断为 IdLabel 类型
const label4 = createLabel('Go go go'); // 被推断为 NameLabel 类型

// 条件类型的其他场景

type TypeOfMessage<T> = T extends { message: unknown } ? T['message'] : never;

type TestType<T extends { message: unknown }> = T['message']
