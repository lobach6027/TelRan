-- ДЗ:
/*
6) выборки
​
- найти учеников, у которых оценка больше 4
- найти учеников, у которых не входит в диапазон от 3 до 4
- найти учеников, у которых имя начинается на И
- найти учеников, у которых оценка 2.2 или 3.1 или 4.7 
*/
​
-- 7)  Найти набор уникальных оценок
-- 8)  Увеличить всем учащимся оценку в 10 раз
-- 9) Поменяйте у Олега Петрова фамилию на Сидоров
-- 10) Для всех учеников, у которых оценка не больше 31 увеличить на 10
use Group_35_36_2;
create table students (
	name varchar(128) not null,
    lastname varchar(128) not null,
    avg_mark numeric(2, 1) check (avg_mark between 0 and 5),
    gender varchar(128) check (gender in('M', 'F'))
);
insert into students (name, lastname, avg_mark, gender) values ('Олег', 'Петров', 4.3, 'M'),
																('Семен', 'Степанов', 3.1, 'M'),
                                                                ('Ольга', 'Семенова', 4.7, 'F'),
                                                                ('Игорь', 'Романов', 3.1, 'M'),
                                                                ('Ирина', 'Иванова', 2.2, 'F');
select * from students;

select * from students 
where avg_mark>4;

select * from students 
where avg_mark not between 3 and 4;

set sql_safe_updates = 0;

update students
set avg_mark = avg_mark*10;

alter table students
drop check students_chk_1;

-- 7)  Найти набор уникальных оценок 
select distinct 
avg_mark
from students;


-- 8)  Увеличить всем учащимся оценку в 10 раз
alter table students
modify column avg_mark numeric(6, 2);

-- 9) Поменяйте у Олега Петрова фамилию на Сидоров
update students
set lastname = 'Сидоров'
where name = 'Олег';

-- 10) Для всех учеников, у которых оценка не больше 31 увеличить на 10
update students
set avg_mark = avg_mark*10
where avg_mark>31;