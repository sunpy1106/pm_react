create table if not exists `user` (
  `userId` varchar(10),
  `userName` varchar(20),
  `userNickName` varchar(20),
  `phone` varchar(20),
  `email` varchar(30),
  `createTime` timestamp,
  primary key(`userId`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `user` (`userId`, `userName`, `userNickName`,`createTime`) VALUES
('20000','zhangwuji','张无忌',now()),
('20001', 'weixiaobao','韦小宝', now()),
('20002', 'yanguo', '杨过',now()),
('20003', 'zhaomin','赵敏', now())
