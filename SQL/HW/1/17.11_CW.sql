
use hr;
select * from countries;
select * from departments;
select * from employees;
select * from jobs;
select * from locations;
select * from regions;

-- 1. Найти самую высокую зарплату в компании

select
max(salary) as max_salary
from employees;

-- 2. Найти количество сотрудников в компании 
select
count(last_name) as quantity_of_emloyees
from employees;

-- 3. Найти количество сотрудников в каждом департаменте. Вывести поля department_id и employees_cnt
select 
department_id,
count(last_name) as employees_cnt
from employees
group by department_id;

-- 4. Найти количество сотрудников в каждом департаменте. Вывести поля department_name и employees_cnt

select 
t1.department_name,
count(last_name) as employees_cnt
from employees t2
inner join departments t1
on t1.department_id=t2.department_id
group by t1.department_name;



-- 2. Найти количество сотрудников у каждого менеджера. Вывести поля first_name, last_name и employees_cnt

select
	t2.first_name,
    t2.last_name,
    count(*) as employees_cnt
from employees t1
inner join employees t2
on t1.manager_id = t2.employee_id
group by t1.manager_id;

SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));



-- 3. Разобраться в подзапросах. Найти сотрудников, у которых зарплата меньше средней. *
select
first_name,
last_name,
salary
from employees
where salary< (select avg(salary) from employees);

-- 1. Найти сотрудников, у которых наибольшая зарплата в их департаменте

SELECT 
	first_name,
    last_name,
    MAX(salary) 
FROM employees
GROUP BY department_id;

select
	t1.first_name,
    t1.last_name,
    t1.salary,
    t1.department_id,
    t2.max_salary
from employees t1
inner join (
	select
		department_id,
		max(salary) as max_salary
	from employees
	group by department_id
) t2
on t1.department_id = t2.department_id
where t1.salary = t2.max_salary;

-- Найти названия департаментов (department_name), в которых больше 10 сотрудников

select 
t1.department_name,
count(last_name) as employees_cnt
from employees t2
inner join departments t1
on t1.department_id=t2.department_id
group by t1.department_name
having employees_cnt>10;

select
	t1.department_name
from departments t1
	inner join (
		select
		department_id
	from employees
	group by department_id
	having count(*) > 10
) t2
on t1.department_id = t2.department_id;
-- ДЗ:
-- 1. Вывести название отделов с кол-вом сотрудников больше среднего
-- 2. Найти департамент с наибольшим кол-вом сотрудников

SELECT 
department_id,
	count(*) as cnt
FROM employees
GROUP BY department_id
having department_id is not null;



select
avg(cnt) as avg_cnt
from (SELECT 
department_id,
	count(*) as cnt
FROM employees
GROUP BY department_id
having department_id is not null
) t1;

SELECT 
department_id
FROM employees
GROUP BY department_id
having count(*)> (select
avg(cnt) as avg_cnt
from (SELECT 
department_id,
	count(*) as cnt
FROM employees
GROUP BY department_id
having department_id is not null
) t1);


select 
department_name,
department_id
from departments
where department_id in (SELECT 
department_id
FROM employees
GROUP BY department_id
having count(*)> (select
avg(cnt) as avg_cnt
from (SELECT 
department_id,
	count(*) as cnt
FROM employees
GROUP BY department_id
having department_id is not null
) t1));



