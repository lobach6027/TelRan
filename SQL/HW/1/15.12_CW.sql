create database shop;
CREATE TABLE SELLERS(
       SELL_ID    INTEGER, 
       SNAME   CHAR(20), 
       CITY    CHAR(20), 
       COMM    NUMERIC(3, 2),
       BOSS_ID  INTEGER
);
                                            
CREATE TABLE CUSTOMERS(
       CUST_ID    INTEGER, 
       CNAME   CHAR(20), 
       CITY    CHAR(20), 
       RATING  INTEGER
);

CREATE TABLE ORDERS(
       ORDER_ID  INTEGER, 
       AMT     NUMERIC(7,2), 
       ODATE   DATE, 
       CUST_ID    INTEGER,
       SELL_ID    INTEGER 
);

INSERT INTO SELLERS VALUES(201,'Олег','Москва',0.12,202);
INSERT INTO SELLERS VALUES(202,'Лев','Сочи',0.13,204);
INSERT INTO SELLERS VALUES(203,'Арсений','Владимир',0.10,204);
INSERT INTO SELLERS VALUES(204,'Екатерина','Москва',0.11,205);
INSERT INTO SELLERS VALUES(205,'Леонид ','Казань',0.15,NULL);


INSERT INTO CUSTOMERS VALUES(301,'Андрей','Москва',100);
INSERT INTO CUSTOMERS VALUES(302,'Михаил','Тула',200);
INSERT INTO CUSTOMERS VALUES(303,'Иван','Сочи',200);
INSERT INTO CUSTOMERS VALUES(304,'Дмитрий','Ярославль',300);
INSERT INTO CUSTOMERS VALUES(305,'Руслан','Москва',100);
INSERT INTO CUSTOMERS VALUES(306,'Артём','Тула',100);
INSERT INTO CUSTOMERS VALUES(307,'Юлия','Сочи',300);


INSERT INTO ORDERS VALUES(101,18.69,'2022-03-10',308,207);
INSERT INTO ORDERS VALUES(102,5900.1,'2022-03-10',307,204);
INSERT INTO ORDERS VALUES(103,767.19,'2022-03-10',301,201);
INSERT INTO ORDERS VALUES(104,5160.45,'2022-03-10',303,202);
INSERT INTO ORDERS VALUES(105,1098.16,'2022-03-10',308,207);
INSERT INTO ORDERS VALUES(106,75.75,'2022-04-10',304,202); 
INSERT INTO ORDERS VALUES(107,4723,'2022-05-10',306,201);
INSERT INTO ORDERS VALUES(108,1713.23,'2022-04-10',302,203);
INSERT INTO ORDERS VALUES(109,1309.95,'2022-06-10',304,203);
INSERT INTO ORDERS VALUES(110,9891.88,'2022-06-10',306,201);
use shop;


select * from orders;

select
*
from orders
where month(ODATE) = '3';


select
	*
from orders
where monthname(odate) = 'March';


-- 2. Определить, какие покупки были совершены в период с 10 апреля 2022 по 10 мая 2022 (включительно)

select 
*
from orders
where date(ODATE) between '2022/04/10' and  '2022/05/10';

-- Определить сколько покупок было совершено в июле
select
count(*) as count
from orders
where dayname(ODATE) = '6';



select
*
from orders
where dayname(ODATE) = 'tuesday';

select
count(*)
from orders
where dayname(ODATE) = 'tuesday';

 -- January - Січень
-- February - Лютий
-- March - Березень
-- April - Квітень
-- May - Травень
-- June - Червень
-- July - Липень
-- August - Серпень
-- September - Вересень
-- October - Жовтень
-- November - Листопад
-- December - Грудень

-- Monday - Понеділок
-- Tuesday - Вівторок
-- Wednesday - Середа
-- Thursday - Четвер
-- Friday - П'ятниця
-- Saturday - Субота
-- Sunday - Неділя

select * from orders;



create view maxAmount as
select
monthname(ODATE),
count(*) as count
from orders
group by monthname(ODATE);



select
*
from maxAmount
where count  = (select
max(count)
from  maxAmount);

use airport;

 -- Разделите самолеты на три класса по возрасту. 
 -- Если самолет произведен раньше 2000 года, 
-- то отнесите его к классу 'Old'. Если самолет произведен между 2000 и 2010 годами включительно, 
-- то отнесите его к классу 'Mid'. Более новые самолеты отнесите к классу 'New'. Исключите из выборки 
-- дальнемагистральные самолеты с максимальной дальностью полета больше 10000 км. Отсортируйте выборку по классу 
-- возраста в порядке возрастания.
-- В выборке должны присутствовать два атрибута — side_number, age.

select
	side_number,
    case
		when production_year < 2000 then 'Old'
        when production_year between 2000 and 2010 then 'Mid'
        else 'New'
    end as age
from airliners
where range_ <= 10000
order by age;

-- ДЗ:
-- 1. Напишите запрос, который выведет id клиентов, чье значение атрибута name начинается на Daria. В выборке должен присутствовать один атрибут — id.
select
id
from clients
where name like 'Daria%';


-- 2. Определите рейсы с точкой назначения в аэропортах, коды которых PEZ, MMK и VKO. В выборке должен присутствовать
--  один атрибут — id.

select * from trips;
select 
id
from trips
where arrival in ('PEZ', 'MMK', 'VKO');

-- 3. Определите id рейсов, которые должны были вылететь из аэропорта Домодедово (DME), но были отменены.
--  В выборке должен присутствовать один атрибут — id.
select 
id
from trips
where departure in('DME') and status = 'Delayed';

-- 4. Определите имена и фамилии пассажиров, чьи идентификаторы заканчиваются на RCB или FCV, 
-- а номера телефонов не начинаются на +705. В выборке должен присутствовать один атрибут — name.
select 
name
 from clients
where phone not like '+705%' and (id like '%RCB' or id like  '%FCV');



-- 5. Руководство авиакомпании снизило цены на билеты рейсов LL4S1G8PQW, 0SE4S0HRRU и JQF04Q8I9G. 
 -- Скидка на билет экономкласса (Economy) составила 15%,
 -- на билет бизнес-класса (Business) — 10%, 
 -- а на билет комфорт-класса (PremiumEconomy) — 20%.
 -- Определите цену билета в каждом сегменте с учетом скидки.
 -- В выборке должны присутствовать три атрибута — id, trip_id, new_price.

select * from discontFlights;
create view discontFlights as
select
*
from tickets
where trip_id in('LL4S1G8PQW','0SE4S0HRRU','JQF04Q8I9G');


select
id,
trip_id,
    case
		when  service_class = 'Economy' then round(price*0.85) 
        when  service_class = 'Business' then round(price*0.9) 
        else round(price*0.8)
    end as new_price
from discontFlights;




