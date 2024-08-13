// TypeScript 类型
const bol: boolean = true;
const n: number = 1;
const s: string = 'Hello, TypeScript!';
const u: undefined = void 0;
const nl: null = null;
const o: object = {}; // 对象
const o2: object = []; // 数组也是 object

// 泛型
type AFanxing<t> = t; // 给 t 传的是什么类型 AFanxing 就是什么类型

const fanxing1: AFanxing<string[]> = ['hello', 'world']; // 传了 string[]，所以 fanxing1 就是 string[] 类型

// 使用 Interface 模仿 Array
interface MyArray<T> {
  [key: number]: T;
  length: number;
  pop(): T | undefined;
  push(...items: T[]): number;
}

// extends
interface Person {
  name: string;
  age: number;
}

function getName<T extends Person>(person: T) {
  return person.name;
}

const xiaoming = getName({ name: 'xiaoming', age: 13, no: 1 });

// extends keyof 继承一个对象类型中的某一项
interface MyType {
  id: string;
  name: string;
}

function getTypeInfo<T extends keyof MyType>(type: MyType, key: T) {
  return type[key];
}

// 类
class MyClass {
  constructor(private name: string) {}

  callName() {
    console.log('name: ', this.name);
  }
}

const xiaoGang = new MyClass('xiaoGang');

xiaoGang.callName();

// TypeScript 帮我们规避代码中存在的潜在错误的示例
/* const fn = (v: number) => {
  if (isNaN(v)) return;

  return {
    id: v
  };
};

const { id } = fn(3); // 这里会报错，因为 fn 的返回值可能是一个 undefined，而 undefined 是不能被解构的 */
