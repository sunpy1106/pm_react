create table if not exist `user` (
  `userId` varchar(10),
  `userName` vachar(20),
  `userNickName` varchar(20),
  `phone` varchar(20),
  `email` varchar(30),
  `createTime` timestamp,
  `lastLoginTime` timestamp,
  primary key(`userId`)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user` (`userId`, `userName`, `userNickName`,`createTime`) VALUES
('20000','张无忌','zhangwuji',now()),
('20001', '韦小宝','weixiaobao', now()),
('20002', '杨过', 'yanguo',now()),
('20003', '赵敏','zhaomin', now()),
