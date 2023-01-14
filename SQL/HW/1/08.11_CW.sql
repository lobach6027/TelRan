-- Практическая работа
create database UNI;
drop database UNI;
use UNI;
/*Создание таблиц

1) создать таблицу Students
с полями:
- id целое число первичный ключ автоинкремент
- name строка 128 не null
- age целое число

2) создать таблицу Teachers
с полями:
- id целое число первичный ключ автоинкремент
- name строка 128 не null
- age целое число

3) создать таблицу Competencies
с полями:
- id целое число первичный ключ автоинкремент
- title строка 128 не null

4) создать таблицу Teachers2Competencies
с полями:
- id целое число первичный ключ автоинкремент
- teacher_id целое число
- competencies_id целое число

5) создать таблицу Courses
- id целое число первичный ключ автоинкремент
- teacher_id целое число
- title строка 128 не null
- headman_id целое число

6) создать таблицу Students2Courses
- id целое число первичный ключ автоинкремент
- student_id целое число
- course_id целое число

*/

/*1) создать таблицу Students
с полями:
- id целое число первичный ключ автоинкремент
- name строка 128 не null
- age целое число*/
create table Students(
id integer primary key auto_increment,
name varchar(128) not null,
age integer
);
select * from Students;


create table Teachers(
id integer primary key auto_increment,
name varchar(128) not null,
age integer
);
select * from Teachers;


create table Competencies(
id integer primary key auto_increment,
title varchar(128) not null
);
select * from  Competencies;

create table Teachers2Competencies(
id integer primary key auto_increment,
teacher_id integer,
competencies_id integer
);
select * from  Teachers2Competencies;


create table Courses(
id integer primary key auto_increment,
teacher_id integer,
title varchar(128) not null,
headman_id integer
);
select * from  Courses;

drop table Students2Courses;
create table Students2Courses(
id integer primary key auto_increment,
student_id integer,
course_id integer
);
select * from  Students2Courses;

show tables;

insert into Students( name, age) values("Анатолий",29);
insert into Students( name, age) values("Олег",25);
insert into Students( name, age) values("Семен",27);
insert into Students( name, age) values("Олеся",28);
insert into Students( name, age) values("Ольга",31);
insert into Students( name, age) values("Иван",22);


insert into Teachers( name, age) values("Петр",39);
insert into Teachers( name, age) values("Максим",35);
insert into Teachers( name, age) values("Антон",37);
insert into Teachers( name, age) values("Всеволод",38);
insert into Teachers( name, age) values("Егор",41);
insert into Teachers( name, age) values("Светлана",32);

insert into Competencies (title) values ('Математика');
insert into Competencies (title) values ('Информатика');
insert into Competencies (title) values ('Программирование');
insert into Competencies (title) values ('Графика');


insert into Teachers2Competencies (teacher_id, competencies_id) values (1, 1);
insert into Teachers2Competencies (teacher_id, competencies_id) values (2, 1);
insert into Teachers2Competencies (teacher_id, competencies_id) values (2, 3);
insert into Teachers2Competencies (teacher_id, competencies_id) values (3, 2);
insert into Teachers2Competencies (teacher_id, competencies_id) values (4, 1);
insert into Teachers2Competencies (teacher_id, competencies_id) values (5, 3);

insert into courses (teacher_id, title, headman_id) values (1, 'Алгебра логики', 2);
insert into courses (teacher_id, title, headman_id) values (2, 'Математическая статистика', 3);
insert into courses (teacher_id, title, headman_id) values (4, 'Высшая математика', 5);
insert into courses (teacher_id, title, headman_id) values (5, 'Javascript', 1);
insert into courses (teacher_id, title, headman_id) values (5, 'Базовый Python', 1);


insert into students2courses (student_id, course_id) values (1, 1);
insert into students2courses (student_id, course_id) values (2, 1);
insert into students2courses (student_id, course_id) values (3, 2);
insert into students2courses (student_id, course_id) values (3, 3);
insert into students2courses (student_id, course_id) values (4, 5);

select 
t1.name,
t3.title
from Students  t1
inner join  students2courses t2
on t1.id = t2.student_id
inner join courses t3
on t2.course_id = t3.id;

/*
ДЗ:
1. Вывести всех преподавателей с их компетенциями
2. Найти преподавателей без компетенций
3. Найти имена студентов, которые не проходят ни один курс
4. Найти курсы, которые не посещает ни один студент
*/

-- Вывести всех преподавателей с их компетенциями
select
t1.name,
t3.title
from teachers t1
left join Teachers2Competencies t2
on t1.id = t2.teacher_id
left join Competencies t3
on t2.competencies_id = t3.id;

-- Найти преподавателей без компетенций

select 
t1.name
from teachers t1
left join Teachers2Competencies t2
on t1.id = t2.teacher_id
where competencies_id is null;

-- Найти имена студентов, которые не проходят ни один курс

select 
t1.name
from Students t1
left join students2courses t2
on t1.id = t2.student_id
where course_id is null;

-- Найти курсы, которые не посещает ни один студент
select
t1.title
from Courses t1
left join students2courses t2
on t1.id = t2.course_id 
left join Students t3
on t2.student_id = t3.id
where name is null;

-- Найти компетенции, которых нет ни у одного преподавателя
select
t1.title,
t2.name
from Competencies t1
left join Teachers2Competencies t2
on t1.id = t2.competencies_id
where t2.id is null;

--  Вывести название курса и имя старосты

select
t1.title,
t2.name
from courses t1
left join students t2
on t1.headman_id = t2.id; 


select
t1.name,
t4.name 
from Students t1
inner join students2courses t2
on t1.id = t2.student_id
inner join Courses t3
on t2.course_id = t3.id
inner join students t4
on t3.headman_id = t4.id;



