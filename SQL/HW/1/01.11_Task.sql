
  use Group_35_36_2;
  create table employees(
  employee_id  integer primary key auto_increment,
  fname varchar(128) not null,
  last_name varchar(128) not null,
  email varchar(128) not null,
  phone varchar(128) not null,
  salary numeric(9, 2)
  ) auto_increment = 100;
  select*from employees;
  
  drop table employees;
  
  set sql_safe_updates  = 0;
  
  alter table employees
  drop column salary;
  
  -- Ой, забыли про зарплату)) Добавить поле salary numeric(9, 2),
   alter table employees
  add column salary numeric(9, 2);
  
   -- Ойййй, нет, зарплата должна быть целым числом. Изменить тип salary на integer.
   alter table employees
   modify column salary integer;
   
  -- Переименовать поле name на first_name 
  alter table employees
   change fname first_name varchar(128);
   
  -- Удалить поле phone 
  alter table employees
   drop column phone ;
  
  -- Добавить поле department строка не null 
  alter table employees
   add column department varchar(128) not null ;
   
   -- Заполнить таблицу (employees.txt)
   
  insert into employees(first_name, last_name, email, salary, department) values("Steven","King",	"SKING", 24000, "Sales");
insert into employees(first_name, last_name, email, salary, department) values("Neena" , "Kochhar" , "NKOCHHAR" , 17000 , "Sales");
insert into employees(first_name, last_name, email, salary, department) values("Lex" , "De Haan" , "LDEHAAN" , 17000 , "Sales");
insert into employees(first_name, last_name, email, salary, department) values("Alexander" , "Hunold" , "AHUNOLD" , 9000 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Bruce" , "Ernst" , "BERNST" , 6000 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Valli" , "Pataballa" , "VPATABAL" , 4800 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Diana" , "Lorentz" , "DIANALO" , 8800 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Nancy" , "Greenberg" , "NGREENBE" , 12008 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Daniel" , "Faviet" , "DFAVIET" , 9000 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Jose Manuel" , "Urman" , "JMURMAN" , 7800 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Luis" , "Popp" , "LPOPP" , 6900 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Den" , "Raphaely" , "DRAPHEAL" , 11000 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Alexander" , "Khoo" , "AKHOO" , 3100 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Shelli" , "Baida" , "SBAIDA" , 2900 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Sigal" , "Tobias" , "STOBIAS" , 2800 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Matthew" , "Weiss" , "MWEISS" , 8000 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Adam" , "Fripp" , "AFRIPP" , 8200 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Payam" , "Kaufling" , "PKAUFLIN" , 7900 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Shanta" , "Vollman" , "SVOLLMAN" , 6500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Kevin" , "Mourgos" , "KMOURGOS" , 5800 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Julia" , "Nayer" , "JNAYER" , 3200 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Adam" , "Markle" , "SMARKLE" , 2200 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Laura" , "Bissot" , "LBISSOT" , 3300 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Mozhe" , "Atkinson" , "MATKINSO" , 2800 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Joshua" , "Patel" , "JPATEL" , 2500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Trenna" , "Rajs" , "TRAJS" , 3500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("John" , "Russell" , "JRUSSEL" , 14000 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Karen" , "Partners" , "KPARTNER" , 13500 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Alberto" , "Errazuriz" , "AERRAZUR" , 12000 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Gerald" , "Cambrault" , "GCAMBRAU" , 11000 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Eleni" , "Zlotkey" , "EZLOTKEY" , 10500 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Adam" , "Vargas" , "PVARGAS" , 2500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Laura" , "Errazuriz" , "AERRAZUR" , 12000 , "IT");
  
 -- Найти всех ИТ работников с зарплатой выше 12000 
 select 
 first_name,
 last_name
 from employees
 where salary>12000;
  
  -- Повысить зарплату работников отдела Human Resources в 5 раз 
 
 update employees
 set salary = salary*5
 where department = "Human Resources";
 
 -- Найти работников отдела Marketing с зарплатой ниже 2850. 
 select 
 first_name,
 last_name
 from employees
 where salary<2850 and department = "Marketing" ;
 
-- У руководителя родились близнецы Лаура и Адам, в честь праздника он решил повысить 
-- зарплату работников с именами Лаура и Адам в 10 раз
  
  update employees
 set salary = salary*10
 where first_name = "Лаура" or first_name = "Адам";
  
-- Diana Lorentz вышла замуж и поменяла фамилию на King. Поменяйте у Diana Lorentz фамилию 
 -- на King. 
 update employees
 set  last_name = "King"
 where last_name = "Lorentz" and  first_name = "Diana";
 
 -- Всех работников отдела sales уволили. Удалите работников sales из таблицы.
 
 delete from employees
 where department = "sales"
 
 -- John Russell перевели в отдел Marketing и повысили зарплату на 5000. Измените данные для 
-- работника John Russell. 

update employees
 set  department = "Marketing" and salary = salary +5000
 where last_name = "Russell" and  first_name = "John";
 
 -- После праздника руководитель протрезвел и уменьшил зарплаты работников с именами 
-- Лаура и Адам в 10 раз. 
   update employees
 set salary = salary/10
 where first_name = "Лаура" or first_name = "Адам";
 
 -- Laura Bissot поменяла свой мейл на BISSOTLAURA. Измените данные для работника Laura 
-- Bissot. 
 update employees
  set email = "BISSOTLAURA"
  where  last_name = "Bissot" and  first_name = "Laura"
 

-- Diana King развелась и поменяла фамилию обратно на Lorentz. И в честь развода руководитель 
-- повысил ее зарплату на 2000.  Измените данные для работника Diana King. 

update employees
  set last_name = "Lorentz" and salary = salary + 2000
  where  last_name = "King" and  first_name = "Diana";
   select*from employees;
   
   
   
  