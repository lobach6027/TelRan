use Group_35_36_2;
drop table if exists goods;
create table goods(
id integer primary key auto_increment,
title varchar(128),
price integer,
quantity integer check (quantity between 5 and 10)
);
insert into goods (title,price,quantity)values('apple',500,5);
insert into goods (title,price,quantity)values('pineapple',1500,7);
insert into goods (title,price,quantity)values('lemon',700,6);
insert into goods (title,price,quantity)values('lime',300,9);
insert into goods (title,price,quantity)values('plum',600,8);

insert into goods (title,item_price,quantity)values('plum',600,4);
select*from goods;


alter table goods
add country varchar(128);
alter table goods
add city varchar(128) default 'Berlin';

alter table goods
drop column country;
alter table goods
drop column city;

alter table goods
modify column quantity integer check(quantity between 4 and 10);

alter table goods
modify column price numeric(6,2);

alter table goods
change price item_price numeric;

alter table goods
drop check goods_chk_1;

set sql_safe_updates = 0;

update goods 
set item_price = 2500
where title = 'apple';

update goods 
set item_price = 700
where title like 'p%';

 update goods 
set item_price = item_price*2
where title like 'p%';            

drop table if exists students;
create table studends(
name varchar(128) not null,
lastname varchar(128) not null,
avg_mark integer check(avg_mark between 1 and 5 ),
gender varchar(128) check(gender = "M" or gender = "F" )
);
select*from studends;

insert into studends (name,lastname,avg_mark, gender)values("Fon","Dubinski",4, 'M');
insert into studends (name,lastname,avg_mark, gender)values("Karl","Rubinski",2,"M");
insert into studends (name,lastname,avg_mark, gender)values("Lon","Subinski",5,"M");
insert into studends (name,lastname,avg_mark, gender)values("Ton","Zubinski",3,"M");
insert into studends (name,lastname,avg_mark, gender)values("Tiny","Kubinski",3,"F");

alter table studends
add id integer primary key auto_increment;

alter table studends
modify column gender char(1) ;

alter table studends
change name firstname varchar(128);



