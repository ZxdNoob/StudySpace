## 简介
这是一个用来学习 `TypeScript` 的项目。

## 笔记

### 认识 TypeScript

- 由**微软**的 Anders Hejlsberg（安德斯·海尔斯伯格）于 `2012 年`领导团队开发，于 `2014 年` 正式在 GitHub 上开源。
- JavaScript 的超集。
  ![TypeScript 与 JS 的关系](https://camo.githubusercontent.com/60467864f7e734142cb6146e19ed7ddaa2bc37d36222985a0f7cab23838c82dc/68747470733a2f2f7332312e617831782e636f6d2f323032342f30382f30382f706b7a597957392e706e67)
- TypeScript 的特点和优势
  - 静态类型检查： 它让 JavaScript 由动态类型变为静态类型。这能避免类型变化带来的错误，比如数字变成字符串后运算方式会不一样。
  - 面向对象编程特性：支持完全的类（class）和类的继承（extends），不同于 ES6 中的 class 和 extends 只是一个语法糖。拓展出了 interface 类型，方便操作对象。class 配合 `implements` 关键字可以让类遵循接口定义。使用 `private` 关键字让类的某种属性或方法只能在类的内部进行访问。用 `abstract` 关键字用来定义抽象类和抽象类内部的方法。
  - TypeScript 具有良好的模块管理机制，方便组织和复用代码。支持命名空间（Namespace），将相关功能分为一组，在提供更好的代码组织方式的同时避免了全局命名冲突。
  - 有强大的工具支持。首先在 VS Code 上就能得到极大支持，有智能提示。很多开源库都是用 `TypeScript` 写的。
  - 可扩展性强。我们可以对类型进行多种多样的组合和操作。

- TypeScript 的强大和伟大之处就在于它的类型系统。
- 严谨又不失灵活。
- 它不是强类型语言，因为它允许隐式转换的存在，而强类型语言是不允许隐式转换的存在的。

### 开发环境
- **node 版本**最好大于 8.0，推荐当前最新的稳定版本；
- 需要有包管理工具，如 npm、pnpm、yarn 等等。
- 文本编辑器，推荐 VS Code。
- 初始化项目：

  ``` shell
  npm init
  ```

- 安装 TypeScript：

  ``` shell
  # 开发环境下安装
  npm i TypeScript -D
  # 项目正式依赖包
  npm i TypeScript -S
  # 全局安装
  npm i TypeScript -g
  ```

- 创建项目相关文件。
- 运行 ```tsc init``` 命令可以自动生成 `tsconfig.json` 文件。

### 关于配置文件 tsconfig.json

- `tsconfig.json` 是 `TypeScript` 编译配置文件。
- `tsconfig.json` 常见配置项：
  - "compilerOptions"：这是一个对象，里面有多个属性，用于指定编译规则。
    -  `target` 是用来指定编译后的文件所采用的 ES 标准，默认值为 `ES3`。
    -  `outDir` 用来指定编译文件所在目录。
    -  `module` 指模块规范，默认值是 `CommonJS`。
  - "include": 它的值是一个数组，每个数组元素表示编译的 ts 文件所在路径，用于指定编译的 `ts 文件`。一个“\*”表示文件匹配，两个“\*”表示忽略深度问题。
  - "exclude": 它的值同样是一个数组，表示`忽略编译的 ts 文件`所在路径。
- 要想让 `tsconfig.json` 生效，需要利用 “-p” 或 “--project” 命令后缀指定 `tsconfig.json` 文件路径。
  ![指定 tsconfig.json 文件路径截图](https://camo.githubusercontent.com/17b248257fbf96c7745309448e0f7ebac42ffb31f683fda29a300335d43e80a4/68747470733a2f2f7332312e617831782e636f6d2f323032342f30382f30382f706b7a59734a4a2e706e67)

### 关于泛型（Generics）
- 概念：可以将其视为需要传参数的类型。
- 它的类型由`传递的值`决定。
- 以一对尖括号（<>）作为标识，跟在函数名（function fn<T>）、接口名（interface MyProps<T>）、常/变量名（const/let a<T>）甚至类型名（Type MyType<T>）之后。
- 泛型能帮助我们有效**组合类型**。
- 它给开发者带来了**灵活**、**可重用代码**的能力。