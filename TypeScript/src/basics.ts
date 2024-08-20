// TypeScript 基础示例代码
// 类型标注（注解），Type anotation
// 形式 1. name: type = value  2. name: type  3. expression as type

// 1. name: type = value
const num: number = 123; // 声明一个数字类型的常量 num，并赋值给 123

// 2. name: type
let str: string; // 声明 str 是一个 string 类型
str = 'hello world';

// 3. expression as type
let aString: any = 'a string.'; // 声明并赋值 aString，它是一个 any 类型
let len = (aString as string).length; // 类型断言，将 aString 断言为一个 string 类型的值，让它肯定能调用 length 方法
