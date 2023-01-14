
-- Добавьте 10 строк
-- Проверьте содержимое таблицы
-- Найдите товары дешевле 1000
-- Найдите товары, начинающиеся на А
-- Удалите товары дороже 1000 *
-- Очистите всю таблицу */
create table goods3(
id integer primary key,
title varchar(128),
quantity integer,
price integer
);
create database hw_23_10;
use hw_23_10;
select * from goods3;
insert into goods3 (id, title,quantity,price) value(1, "apple", 26, 15);
insert into goods3 (id, title,quantity,price) value(2, "orange", 59, 25);
insert into goods3 (id, title,quantity,price) value(3, "plum", 56, 18);
insert into goods3 (id, title,quantity,price) value(4, "pear", 25, 15);
insert into goods3 (id, title,quantity,price) value(5, "lime", 89, 65);
insert into goods3 (id, title,quantity,price) value(6, "lemon", 63, 150);
insert into goods3 (id, title,quantity,price) value(7, "kiwi", 23, 75);
insert into goods3 (id, title,quantity,price) value(8, "mango", 56, 135);
insert into goods3 (id, title,quantity,price) value(9, "coconuss", 2, 315);
insert into goods3 (id, title,quantity,price) value(10, "melone", 125, 165);
insert into goods3 (id, title,quantity,price) value(11, "greaps", 599, 125);
select 
title,price
from goods3
where price<100;
delete from goods3
where price>100;