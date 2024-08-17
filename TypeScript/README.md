## 简介

这是一个用来学习 `TypeScript` 的项目。

## `markdown-formatter` VS Code 插件

* 点击 VS Code 插件选项，搜索 `markdown-formatter` 插件，列表第一项就是，点进去安装即可。
* 在 VS Code 配置文件 `settings.json` 中给所有 **md 文件**配置格式化方案，让它们使用 `markdown-formatter` 插件进行格式化，配置项如下：

```json
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.quickSuggestions": {
      "other": true,
      "comments": true,
      "strings": true
    },
    "editor.defaultFormatter": "mervin.markdown-formatter"
  }
```

## .prettier 文件

### 优先级

  项目目录下的 .prettierrc 文件的配置 > .editorconfig 文件的配置 > VS Code 配置文件（.vscode/settings.json）

### 配置方式

  + 首先要下载 `Prettier` 插件，然后在 VS Code 配置文件（.vscode/settings.json）中配置与 `Prettier` 插件相关配置，示例如下：

```json
  {
    "prettier.useEditorConfig": false, // 不使用 editorConfig 配置文件的情况下才让 prettier 插件配置生效
    "prettier.semi": false, // 句尾不自动添加分号“;”
    "prettier.singleQuote": true, // 使用单引号
    "prettier.trailingComma": "none" // 禁止随时（自动）添加逗号，一般指数组的最后一个元素后面或对象最后一个属性后面
  }
```

  + 安装 `prettier` 依赖包，再创建 `.prettierrc` 文件，在 `.prettierrc` 文件中配置格式化文件的规则。

### 常见配置项

  + printWidth: 设置一行最多多少个字符（不会强制）
  + tabWidth: tab 缩进大小，默认为 2
  + useTabs: 是否使用 tab 缩进，默认为 false
  + semi: 是否自动给末尾添加分号“; ”，默认为 true
  + singleQuote: 是否使用单引号，默认 false
  + trailingComma: 是否在语句末尾（一般指数组的最后一个元素后面或对象最后一个属性后面）自动添加逗号，默认是 none，可以选择 none | es5 | all，如果配置“es5”代表给 ES5 中的数组和对象的末尾自动添加逗号，如果配置“all”则表示给包括函数对象在内的语句末尾添加逗号
  + bracketSpacing: 是否给对象添加空格，默认 true，有空格则是 `{ key: value }` 格式，没有空格则是 `{key: value}` 格式。

## 笔记

### 认识 TypeScript

* 由**微软**的 [Anders Hejlsberg（安德斯·海尔斯伯格）](https://baike.baidu.com/item/%E5%AE%89%E5%BE%B7%E6%96%AF%C2%B7%E6%B5%B7%E5%B0%94%E6%96%AF%E4%BC%AF%E6%A0%BC/2152925)于 `2012 年`领导团队开发，于 `2014 年` 正式在 GitHub 上开源。
* JavaScript 的超集。

![TypeScript 与 JS 的关系](https://camo.githubusercontent.com/60467864f7e734142cb6146e19ed7ddaa2bc37d36222985a0f7cab23838c82dc/68747470733a2f2f7332312e617831782e636f6d2f323032342f30382f30382f706b7a597957392e706e67)

* TypeScript 的特点和优势

  + 静态类型检查： 它让 JavaScript 由动态类型变为静态类型。这能避免类型变化带来的错误，比如数字变成字符串后运算方式会不一样。
  + 面向对象编程特性：支持完全的类（class）和类的继承（extends），不同于 ES6 中的 class 和 extends 只是一个语法糖。拓展出了 interface 类型，方便操作对象。class 配合 `implements` 关键字可以让类遵循接口定义。使用 `private` 关键字让类的某种属性或方法只能在类的内部进行访问。用 `abstract` 关键字用来定义抽象类和抽象类内部的方法。
  + TypeScript 具有良好的模块管理机制，方便组织和复用代码。支持命名空间（Namespace），将相关功能分为一组，在提供更好的代码组织方式的同时避免了全局命名冲突。
  + 有强大的工具支持。首先在 VS Code 上就能得到极大支持，有智能提示。很多开源库都是用 `TypeScript` 写的。
  + 可扩展性强。我们可以对类型进行多种多样的组合和操作。

* TypeScript 的强大和伟大之处就在于它的类型系统。
* 严谨又不失灵活。
* 它不是强类型语言，因为它允许隐式转换的存在，而强类型语言是不允许隐式转换的存在的。
* TypeScript 的**主要作用**
  + 在代码中显示标注类型，可以让代码更易读；
  + 在开发和编译的时候，通过类型推断和静态类型检查可以显著提高代码质量，帮助我们规避潜在的错误。
* TypeScript 的两种主要用法
  1. 编译指定文件（例如 `tsc MyTest.ts`）；
  2. 创建和编译 TS 项目（例如用 `tsc --init ...`）。

### 开发环境

* **node 版本**最好大于 8.0，推荐当前最新的稳定版本；
* 需要有包管理工具，如 npm、pnpm、yarn 等等。
* 文本编辑器，推荐 VS Code。
* 初始化项目：

```shell
  npm init
```

* 安装 TypeScript：

```shell
  # 开发环境下安装
  npm i TypeScript -D
  # 项目正式依赖包
  npm i TypeScript -S
  # 全局安装
  npm i TypeScript -g
```

* 创建项目相关文件。
* 运行 `tsc init` 命令可以自动生成 `tsconfig.json` 文件。
* 在设置中找到 `TypeScript` 中 `javascript.validate.enable` 配置项，将其关闭（即设为 false）, 以关闭 JavaScript 的一些验证。这样可以避免出现警告，减少干扰的同时节省系统资源。
* 推荐安装 VS Code 的一个插件 —— “Reload”，在某些插件出问题时摁一下底部“Reload”按钮一般都能解决。

![运行 Reload 插件](https://s21.ax1x.com/2024/08/09/pASKT3V.png)

* 安装 `@types/node` 依赖包，让 `TypeScript` 支持 `node.js`。

```shell
    npm i @types/node -D
```

### 关于配置文件 tsconfig.json

* `tsconfig.json` 是 `TypeScript` 编译配置文件。
* `tsconfig.json` 常见配置项：
  + "compilerOptions"：这是一个对象，里面有多个属性，用于指定编译规则。
    - `target` 是用来指定编译后的文件所采用的 ES 标准，默认值为 `ES3`。
    - `outDir` 用来指定编译文件所在目录。
    - `module` 指模块规范，默认值是 `CommonJS`。
  + "include": 它的值是一个数组，每个数组元素表示编译的 ts 文件所在路径，用于指定编译的 `ts 文件`。一个“\*”表示文件匹配，两个“\*”表示忽略深度问题。
  + "exclude": 它的值同样是一个数组，表示`忽略编译的 ts 文件`所在路径。
* 要想让 `tsconfig.json` 生效，需要利用 “-p” 或 “--project” 命令后缀指定 `tsconfig.json` 文件路径。
  

![指定 tsconfig.json 文件路径截图](https://camo.githubusercontent.com/17b248257fbf96c7745309448e0f7ebac42ffb31f683fda29a300335d43e80a4/68747470733a2f2f7332312e617831782e636f6d2f323032342f30382f30382f706b7a59734a4a2e706e67)

### 类型标注（或称之为“类型注解”，Type annotation）

TypeScript 的类型标注是它的**一种特性**，它允许程序员为变量、函数参数、返回值等**指定预期的数据类型**。这样做的目的：

* **声明类型**：通过在变量声明前添加冒号和对应的数据类型，如 `let myNumber: number = 6;`，告诉编译器这个变量应该存储数值。
* **类型推断**：虽然不是强制的，但在许多情况下 TypeScript 可以自动推断类型（涉及到**类型断言**的概念），当你初始化一个变量时，类型系统可以**根据赋值自动确定类型**。
* **强类型检查**： 类型标注使得编译器可以在编译阶段检测出**潜在的类型错误**，比如试图将字符串赋给期望是数字的变量，这种错误在运行时不会发生，提高了**代码质量和稳定性**。
* **接口和类的类型**： 对于对象和复杂类型，可以使用接口（**interface**）和类（**class**）来描述它们的结构和期望的行为，使得类型更为清晰。
* **泛型（Generics）**： TypeScript 提供了泛型（下面有介绍）功能，允许编写高度**模块化的函数或类**，其中的类型参数**可以在任何地方使用**。

### 关于泛型（Generics）

* 概念：可以将其视为需要传参数的类型。
* 它的类型由`传递的值`决定。
* 以一对尖括号（<>）作为标识，跟在函数名（function fn<T>）、接口名（interface MyProps<T>）、常/变量名（const/let a<T>）甚至类型名（Type MyType<T>）之后。
* 泛型能帮助我们有效**组合类型**。
* 它给开发者带来了**灵活**、**可重用代码**的能力。

### 关于交叉类型（Intersection Type）

* 概念：它是一种由两个或者更多类型合并成新类型的机制。

* 标识符：&。

* 示例

```typescript
  type Gender = '男' | '女'; // Gender 是一个联合类型，用竖线“|”作为标识符
  interface Person {
    name: string;
    age: number;
    gender: Gender;
  }

  interface Animal {
    height: number;
  }

  type Employee = Person & Animal; // Empoyee 这个类型既要有 Person 类型里的所有属性，也要有 Animal 类型里的所有属性
```

### 联合类型（Union Type）

* 概念：表示一个值可以是多种类型的一种。以“|”为标识。
* 示例：

```typescript
  type TypeA = number | string; // TypeA 可以是 number，也可以是 string
  type TypeB = 'A' | 'B' | 'C' | 'D'; // TypeB 可以是 A、B、C 或 D
```

* 特性：
  + 可访问**共同的属性和方法**。一个类型是联合类型时，访问时联合类型中的任一类型的属性和方法都能访问。
  如：

```typescript
  interface Bird {
    fly(): void // 飞翔
  }

  interface Fish {
    swim(): void // 游泳
  }

  function move (animal: Bird | Fish) {
    if ('fly' in animal) {
      animal.fly(); // 可以访问 Bird 的 fly 方法
    } else {
      animal.swim(); // 也可以访问 Fish 的 swim 方法
    }
  }
```

  + 类型缩小，即缩小类型的范围。
    通过 `类型守卫` 可以在**运行时**确定联合类型的具体类型，从而进行更精确的类型操作。
    例如：

```typescript
  function processValue(v: string | number) {
    if (typeof v === 'string') {
      v.upperCase(); // 这里的 v 被缩小为 string 类型，支持将所有字符转化成大写形式的 upperCase 方法
    } else {
      v * 2; // 这里的 v 被缩小为 number 类型
    }
  }
```

* 实际应用场景
  + 函数参数类型。当函数的参数需要支持不同的参数类型时，可以使用联合类型来定义参数类型。

```typescript
  function getValue(v: string | number | boolean) { // 参数类型可以是 string、number 或 boolean
    console.log(v);
  }
```

  + 接口的扩展。使用联合类型来扩展接口，让接口接受不同类型的实现。

```typescript
  interface Shape {
    area(): number
  }

  interface Circle {
    radios: number
  }

  interface Rectangle {
    width: number
    height: number
  }

  type MyShape = Shape | Circle | Rectangle; // MyType 支持 Shape、Circle 和 Retangle 三种类型

  function calculateArea(shape: MyShape): number { // 计算一个图形的面积
    let result = 0;

    if ('radios' in shape) {
      result = Math.PI * shape.radios * shape.radios;
    } else if ('width' in shape && 'height' in shape) {
      result = shape.width * shape.height;
    } else {
      result = shape.area();
    }

    return result;
  }
```

* 作用：联合类型为 TypeScript 提供了更大的**灵活性**，使你可以处理多种不同类型的值，同时保持**类型安全**。

### 条件类型（Conditionnal Type）

* 概念：它是一种`高级类型系统特性`，它允许根据条件表达式（**extends** 配合**三目运算**）来选择不同类型，或者说它根据条件来确定类型。
* 基本语法：`T extends U ？X ：Y`。这段代码意思是如果类型 T 可以分配给类型 U，则结果类型为 X，否则结果类型为 Y。

例如：

```TypeScript
    type IsString<T> = T extends string ? true : false;

    type A = IsString<string>; // A 类型为 true
    type B = IsString<number>; // B 类型为 false
```
