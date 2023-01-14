
-- Добавьте 10 строк
-- Проверьте содержимое таблицы
-- Найдите товары дешевле 1000
-- Найдите товары, начинающиеся на А
-- Удалите товары дороже 1000 *
-- Очистите всю таблицу */
create table goods3(
id integer primary key auto_increment,
title varchar(128),
quantity integer,
price integer
);
create database cw_23_10;
use cw_23_10;
select * from goods3;
insert into goods3 (title,quantity,price) value( "apple", 26, 15);
insert into goods3 ( title,quantity,price) value( "orange", 59, 25);
insert into goods3 (title,quantity,price) value( "plum", 56, 18);
insert into goods3 (title,quantity,price) value( "pear", 25, 15);
insert into goods3 ( title,quantity,price) value( "lime", 89, 65);
insert into goods3 ( title,quantity,price) value( "lemon", 63, 150);
insert into goods3 ( title,quantity,price) value( "kiwi", 23, 75);
insert into goods3 ( title,quantity,price) value( "mango", 56, 135);
insert into goods3 ( title,quantity,price) value("coconuss", 2, 315);
insert into goods3 ( title,quantity,price) value( "melone", 125, 165);
insert into goods3 ( title,quantity,price) value( "greaps", 599, 125);
select 
title,price
from goods3
where price<100;
delete from goods3
where price>100;
set sql_safe_updates = 0;
delete from goods3;

drop table goods3;
truncate goods3;


create table users1(
id integer primary key auto_increment,
first_name varchar(128),
second_name varchar(128),
age integer check(age>=18) default 20,
gender char(1) check(gender in ('m', 'f'))
);
insert into users1(first_name,second_name,age,gender)value("anna", "petrova", 33, "f");
insert into users1(first_name,second_name,gender)value("Ron", "petrov", "m");
select*from users1;


create table students(
id integer primary key auto_increment,
first_name varchar(128) not null,
second_name varchar(128)  not null,
age integer check(age>=20) default 20,
group1 varchar(128),
avg_mark numeric(2,1) check(avg_mark between 1 and 5 ) default 3.0
);
select*from students;

insert into students (first_name,second_name,age,group1,avg_mark)values("Fon","Dubinski",29,"RM", 2.0);
insert into students (first_name,second_name,age,group1)values("Karl","Rubinski",21,"RM");
insert into students (first_name,second_name,age,group1)values("Lon","Subinski",45,"RM");
insert into students (first_name,second_name,age,group1,avg_mark)values("Ton","Zubinski",25,"RM", 2.0);