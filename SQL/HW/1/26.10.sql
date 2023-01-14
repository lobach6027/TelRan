create table students(
id integer primary key auto_increment,
first_name varchar(128) not null,
last_name varchar(128)  not null,
class integer check(class between 1 and 10),
subjects varchar(128) not null,
mark integer check(mark between 1 and 12)
);
create database Task;
drop database Task;
use Task;
show databases;
drop table students;
select*from students;
insert into students(first_name,last_name,class,subjects,mark)value("Bob","Levinski",1,"math",7);
insert into students(first_name,last_name,class,subjects,mark)value("Luka","Ruren",6,"chemical",3);
insert into students(first_name,last_name,class,subjects,mark)value("Anna","Omello",8,"english",7);
insert into students(first_name,last_name,class,subjects,mark)value("Ron","Stom",6,"math",5);
insert into students(first_name,last_name,class,subjects,mark)value("Stefan","Salin",8,"math",9);
insert into students(first_name,last_name,class,subjects,mark)value("Mina","Janner",7,"english",7);
insert into students(first_name,last_name,class,subjects,mark)value("Lika","Snoper",8,"sport",4);
insert into students(first_name,last_name,class,subjects,mark)value("Ella","Loster",7,"biologi",8);
insert into students(first_name,last_name,class,subjects,mark)value("Denn","Poser",8,"english",7);
insert into students(first_name,last_name,class,subjects,mark)value("Felix","Moller",5,"math",7);
insert into students(first_name,last_name,class,subjects,mark)value("Anton","Lerrun",5,"math",10);
insert into students(first_name,last_name,class,subjects,mark)value("Rut","Kenri",8,"biologi",7);
insert into students(first_name,last_name,class,subjects,mark)value("Ben","Levinski",4,"english",5);
insert into students(first_name,last_name,class,subjects,mark)value("Sara","Lenavon",3,"biologi",11);
insert into students(first_name,last_name,class,subjects,mark)value("Canna","Antolem",2,"math",7);
delete from students where mark = 3;
set sql_safe_updates = 0;
select first_name,
last_name,
mark
from students
where mark>6;
delete from students where mark<3 and class = 3;
select first_name
from students
where length(first_name)>=4;

