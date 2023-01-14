
create table goods2 (
	id integer primary key,
  	title varchar(30),
  	quantity integer check(quantity > 0),
  	price integer,
  	in_stock char(1) check(in_stock in ('Y', 'N'))
);

show databases;
create database Group_35_36_2;
show databases;
use Group_35_36_2;
select * from goods;
drop database Group_35_36_2;
insert into goods2 (id, title, quantity, price, in_stock) value(1, 'Apple', 3, 300, 'Y');
insert into goods2 (id, title, quantity, price, in_stock) value(2, 'Lime', 5, 300, 'Y');

select*from goods;