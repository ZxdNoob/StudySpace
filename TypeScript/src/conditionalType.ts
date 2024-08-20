// 条件类型：根据条件来确定类型。
// 形式：T extends U ? X : Y，有点像三目运算，关键字是 extends
// Tips: 需要注意的是 T 可以看成是 U 的子类型，不要求

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

// 条件类型的一个应用场景例子，可以帮助我们避免重复定义类型

interface Email {
  to: string;
  from: string;
  message: string;
}

type TypeOfMessage<T> = T extends { message: unknown }
  ? T['message']
  : never;

const email: TypeOfMessage<Email> = 'xxx@xx.com'; // 传入 Email 后，email 最终被断言为 string 类型

// 配合 infer 关键字的例子。infer 是工具类型和底层库中非常常用的关键字，表示在 extends 条件语句（即配合条件类型使用）中待推断的类型变量（一般用在函数类型中返回值类型身上）
type GetReturnType<T> = T extends (
  ...args: never[]
) => infer R
  ? R
  : never;

type AString = GetReturnType<() => string>;
type ANever = GetReturnType<number>;

// 条件类型其他例子
type ToArrayType<T> = T extends any ? T[] : never;
type ToArrayType2<T> = [T] extends [any] ? T[] : never;

type StringOrNumberArray = ToArrayType<string | number>; // 这里 StringOrNumberArray 被推断成了 string[] | number[]
type StringOrNumberArray2 = ToArrayType2<string | number>; // 这里 StringOrNumberArray2 被推断成了 (string | number)[]

// string[] | number[] 与 (string | number)[] 的区别，前者要求要么是纯字符串数组要么是纯数字数组，后者意为数组元素可以是数字也可以是字符串的数组
type StringArrOrNumberArrType = string[] | number[];
type StringOrNumberArrType = (string | number)[];

const stringOrNumberArr: StringArrOrNumberArrType = [
  1, 2, 3,
];

const stringOrNumberArr2: StringOrNumberArrType = [
  1,
  'one',
  'two',
  3,
];

// ReturnType，语法：ReturnType<T>，其中 T 是一个函数类型
function add(a: number, b: number) {
  return a + b;
}

type ANumber = ReturnType<typeof add>; // typeof 用于推断 add 的类型，add 类型为 (a: number, b: number) => number
type AString2 = ReturnType<() => string>; // 给 ReturnType 直接传一个返回值是一个 string 的函数类型
