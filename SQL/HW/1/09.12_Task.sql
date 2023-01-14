use hr;
select
*
from employees
where salary = (select
max(salary) from employees);

select
t1.first_name,
t1.last_name,
t2.salary
from employees t1
inner join (select
department_id,
max(salary) as salary 
from employees
group by department_id) as t2
on t1.department_id = t2.department_id;

select
department_id,
max(salary) 
from employees
group by department_id;