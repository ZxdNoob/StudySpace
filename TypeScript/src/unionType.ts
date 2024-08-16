// 联合类型
/*
 * 表示多种类型中的一种类型。以“|”为标识。
 */

// 一个盒子
interface Box {
  name: string;
  width: number;
  height: number;
}

type Size = 'L' | 'M' | 'S'; // Size 就属于联合类型，属于常量联合类型，它可以是 L、M 或者 S。

// 一个袋子
interface Bag {
  material: string; // 材质
  size: Size; // 尺寸
}

type Tool = Box | Bag; // Tool 可以是 Box 类型也可以是 Bag 类型

const aTool: Tool = {
  size: 'L',
  material: '塑料',
};
