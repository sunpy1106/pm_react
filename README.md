## 项目介绍

搭建一个管理项目成员、项目工作任务的实施管理平台

## 搭建环境
- node v8.1.2
- npm 5.0.3
- React 15.6.1
- Redux 3.7.0
- antd 2.11.1
- express 4.15.3
- mysql
- 其他依赖请查看package.json

## 环境准备
- 搭建数据库环境（server目录）
  - 编辑dbconnection.js,配置数据库连接信息
  - 执行team.sql,teamMember.sql 和user.sql (mysql -u *** -p db < team.sql)
- 下载依赖包
  - 在项目目录下执行 npm install

## 执行方法
- 客户端执行
  - 在项目目录下执行npm start
- 服务器端执行
  - 在server目录下执行 node server.js
