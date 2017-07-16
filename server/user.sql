create table if not exists `user` (
  `userId` varchar(10),
  `userName` varchar(20),
  `password` varchar(20),
  `userNickName` varchar(20),
  `phone` varchar(20),
  `email` varchar(30),
  `createTime` timestamp,
  primary key(`userId`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `user` (`userId`, `userName`,`password`, `userNickName`,`createTime`) VALUES
('20000','000000','zhangwuji','张无忌',now()),
('20001', '000000','weixiaobao','韦小宝', now()),
('20002', '000000','yanguo', '杨过',now()),
('20003', '000000','zhaomin','赵敏', now())
