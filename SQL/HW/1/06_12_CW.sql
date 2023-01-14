create database airport;
CREATE TABLE airliners (
  id VARCHAR(128) PRIMARY KEY,
  model_name VARCHAR(128),
  range_ INTEGER,
  production_year INTEGER,
  color VARCHAR(128),
  side_number VARCHAR(128),
  country VARCHAR(128)
);

CREATE TABLE trips (
  id VARCHAR(128) PRIMARY KEY,
  trip_code VARCHAR(128),
  departure VARCHAR(128),
  arrival VARCHAR(128),
  status VARCHAR(128),
  airliner_id VARCHAR(128)
);

CREATE TABLE clients (
  id VARCHAR(128) PRIMARY KEY,
  name VARCHAR(128),
  phone VARCHAR(128),
  age INTEGER
);

CREATE TABLE tickets (
  id VARCHAR(128) PRIMARY KEY,
  trip_id VARCHAR(128),
  service_class VARCHAR(128),
  price INTEGER,
  client_id VARCHAR(128)
);

INSERT INTO airliners VALUES ('00095579', 'Airbus A320-200', 12800, 2016, 'white', '7729', 'Russia');
INSERT INTO airliners VALUES ('00434546', 'Boeing 777-300', 9600, 2008, 'brown', '5693', 'Russia');
INSERT INTO airliners VALUES ('00913835', 'Airbus A320-200', 14200, 2000, 'white', '3919', 'Germany');
INSERT INTO airliners VALUES ('00243371', 'Airbus A320-200', 10100, 2005, 'white', '562', 'Russia');
INSERT INTO airliners VALUES ('00073581', 'Boeing 777-300', 13700, 2018, 'white', '3267', 'Russia');
INSERT INTO airliners VALUES ('00837897', 'Sukhoi Superjet-100', 2800, 2013, 'white', '869', 'Russia');
INSERT INTO airliners VALUES ('00108551', 'Airbus A320-200', 13900, 2017, 'white', '6022', 'Russia');
INSERT INTO airliners VALUES ('00473503', 'Airbus A321-200', 10900, 2012, 'white', '8474', 'France');
INSERT INTO airliners VALUES ('00871029', 'Boeing 777-300', 12700, 2002, 'white', '4070', 'Germany');
INSERT INTO airliners VALUES ('00974590', 'Boeing 777-300', 13200, 2005, 'white', '488', 'Germany');
INSERT INTO airliners VALUES ('00461862', 'Airbus A321-200', 12800, 2020, 'white', '6039', 'France');
INSERT INTO airliners VALUES ('00603813', 'Boeing 777-300', 11700, 2017, 'white', '6001', 'Russia');
INSERT INTO airliners VALUES ('00619341', 'Airbus A321-200', 10600, 2008, 'white', '7561', 'Russia');
INSERT INTO airliners VALUES ('00305881', 'Boeing 777-300', 12300, 2005, 'green', '1426', 'Russia');
INSERT INTO airliners VALUES ('00045877', 'Airbus A321-200', 13800, 1998, 'white', '3879', 'Russia');
INSERT INTO airliners VALUES ('00569299', 'Cessna 172', 1200, 1978, 'white', '8306', 'Russia');


INSERT INTO trips VALUES ('AZLXFEICN9', 'FYKUZEYK', 'RZN', 'PBX', 'Departed', '00073581');
INSERT INTO trips VALUES ('NXL5LGFPDZ', 'FYELLIVY', 'KEJ', 'PYJ', 'Departed', '00045877');
INSERT INTO trips VALUES ('YBCCGNT4FB', 'FYDLCIYR', 'MRV', 'ABA', 'Departed', '00305881');
INSERT INTO trips VALUES ('JKRUCXH7VM', 'FYBFSQHC', 'KJA', 'MQF', 'Scheduled', '00619341');
INSERT INTO trips VALUES ('54GNK8KX0J', 'FYJBLFJF', 'NAL', 'IAR', 'Delayed', '00913835');
INSERT INTO trips VALUES ('YRDP58VH7Z', 'FYQUGTHS', 'LED', 'AAQ', 'Arrived', '00974590');
INSERT INTO trips VALUES ('QQZ8OIWT0I', 'FYBTHJNF', 'SVX', 'PKV', 'Scheduled', '00603813');
INSERT INTO trips VALUES ('1OOOROHFT5', 'FYSIVZCT', 'KYZ', 'NYM', 'Scheduled', '00461862');
INSERT INTO trips VALUES ('Z7I9LOO53W', 'FYXKFNBK', 'IJK', 'KSZ', 'Delayed', '00473503');
INSERT INTO trips VALUES ('BKSVI3TXU0', 'FYNOHGPA', 'BZK', 'NOZ', 'Scheduled', '00837897');
INSERT INTO trips VALUES ('NRE4AOEN0U', 'FYUOENIB', 'RVH', 'DME', 'Arrived', '00473503');
INSERT INTO trips VALUES ('RL6EC4YWB1', 'FYYPDVXX', 'CNN', 'OSW', 'Departed ', '00837897');
INSERT INTO trips VALUES ('P1KMGIH0LB', 'FYQGVPDV', 'PES', 'NSK', 'Departed', '00913835');
INSERT INTO trips VALUES ('DTN6F9SMFY', 'FYIZFTNS', 'MJZ', 'NNM', 'Arrived', '00619341');
INSERT INTO trips VALUES ('I7OL2KZUTM', 'FYENZBWZ', 'KRR', 'PEE', 'Departed', '00619341');
INSERT INTO trips VALUES ('0SE4S0HRRU', 'FYDKIBWN', 'TOX', 'KHV', 'Departed', '00045877');
INSERT INTO trips VALUES ('5I5WU71AWR', 'FYYRTAUP', 'MQF', 'CYX', 'Departed', '00073581');
INSERT INTO trips VALUES ('FIE30ZUHAU', 'FYXQGDKJ', 'NNM', 'MOW', 'Arrived', '00108551');
INSERT INTO trips VALUES ('8RF8OIOVFR', 'FYIHSLAA', 'ABA', 'SCW', 'Delayed', '00434546');
INSERT INTO trips VALUES ('JYYNPD5Q54', 'FYWTXNZF', 'STW', 'KHV', 'Cancelled', '00461862');
INSERT INTO trips VALUES ('A71MZN54ZP', 'FYRGWMOU', 'TOF', 'KZN', 'Departed', '00045877');
INSERT INTO trips VALUES ('DFCFUPV4XB', 'FYCSRAVD', 'AER', 'CSY', 'Departed', '00095579');
INSERT INTO trips VALUES ('HCX33V5QUH', 'FYBHJBFQ', 'NNM', 'KRO', 'Departed', '00045877');
INSERT INTO trips VALUES ('DAA22Y84O7', 'FYVJYQLI', 'ABA', 'KVX', 'Departed', '00619341');
INSERT INTO trips VALUES ('30N25AXHAF', 'FYJLHCLF', 'IJK', 'CYX', 'Cancelled', '00473503');
INSERT INTO trips VALUES ('CNIKNNGF4Z', 'FYUTQQYR', 'DME', 'MMK', 'Departed', '00108551');
INSERT INTO trips VALUES ('HC0MJ162ZZ', 'FYHVSSGY', 'OMS', 'RZN', 'Arrived', '00108551');
INSERT INTO trips VALUES ('SFQ20OEYVR', 'FYKRPIYG', 'ARH', 'IKS', 'Scheduled', '00871029');
INSERT INTO trips VALUES ('VR5SF5YIWN', 'FYCZRFLM', 'ESL', 'GOJ', 'Scheduled', '00461862');
INSERT INTO trips VALUES ('X6FN294I1K', 'FYXLIUNH', 'RTW', 'EGO', 'Scheduled', '00913835');
INSERT INTO trips VALUES ('J3B1J090J0', 'FYGQHJFE', 'BCX', 'KYZ', 'Scheduled', '00434546');
INSERT INTO trips VALUES ('87RVI5T7A2', 'FYMKPDZC', 'OSW', 'STW', 'Arrived', '00603813');
INSERT INTO trips VALUES ('1CZRH40E2L', 'FYIJUHTL', 'MMK', 'MOW', 'Arrived', '00108551');
INSERT INTO trips VALUES ('MMI79V757K', 'FYTORWPK', 'KSZ', 'KLD', 'Arrived', '00108551');
INSERT INTO trips VALUES ('5480GD0GIS', 'FYVXEQJW', 'SVO', 'SVX', 'Departed', '00095579');
INSERT INTO trips VALUES ('Z3BPB534TR', 'FYLQYHXY', 'KHV', 'PKC', 'Arrived', '00619341');
INSERT INTO trips VALUES ('B5L8IUXI1O', 'FYRHRAHE', 'NAL', 'OGZ', 'Departed', '00913835');
INSERT INTO trips VALUES ('OZAO28DLFP', 'FYWTYJDC', 'PKV', 'MQF', 'Scheduled', '00837897');
INSERT INTO trips VALUES ('XOY8HZ1LQ5', 'FYZFNFDC', 'ESL', 'CSY', 'Delayed', '00461862');
INSERT INTO trips VALUES ('CG5B2D3KLA', 'FYAOCJJX', 'MJZ', 'UUS', 'Arrived', '00871029');
INSERT INTO trips VALUES ('5QMWLJ4SOC', 'FYDKXSYX', 'PEE', 'KZN', 'Departed ', '00603813');
INSERT INTO trips VALUES ('8C9GNO8RBM', 'FYSLJUYP', 'PKV', 'BKA', 'Arrived', '00305881');
INSERT INTO trips VALUES ('ZK9M965C68', 'FYXMFCQT', 'BZK', 'CEK', 'Scheduled', '00913835');
INSERT INTO trips VALUES ('2NMMGC6EYC', 'FYCHPOHX', 'CEE', 'CKH', 'Arrived', '00974590');
INSERT INTO trips VALUES ('BODSSG3E82', 'FYEEVFKF', 'KSZ', 'ROV', 'Cancelled', '00871029');
INSERT INTO trips VALUES ('01BWVNX5Y6', 'FYMBJISR', 'UCT', 'AAQ', 'Arrived', '00473503');
INSERT INTO trips VALUES ('1KIUNIRKJ0', 'FYAHGFMW', 'MCX', 'CNN', 'Departed', '00913835');
INSERT INTO trips VALUES ('2O2OOCWMHY', 'FYJJSDGL', 'PVS', 'ROV', 'Arrived', '00243371');
INSERT INTO trips VALUES ('LF1XAF7P9E', 'FYDPMJUK', 'DKS', 'PYJ', 'Departed', '00243371');
INSERT INTO trips VALUES ('WIHYUQL6L4', 'FYKNDOIE', 'BKA', 'ADH', 'Arrived', '00974590');
INSERT INTO trips VALUES ('PNKMZ4CY53', 'FYWAAXAX', 'PKV', 'TOF', 'Scheduled', '00045877');
INSERT INTO trips VALUES ('4QST269XS7', 'FYSVZVTC', 'PKC', 'DME', 'Arrived', '00108551');
INSERT INTO trips VALUES ('48AEBYYWRF', 'FYGOFGGS', 'AMV', 'OGZ', 'Arrived', '00073581');
INSERT INTO trips VALUES ('VCKEGVKWW8', 'FYMQHLLW', 'NUX', 'GOJ', 'Scheduled', '00473503');
INSERT INTO trips VALUES ('FN2S30I60G', 'FYWFBJPL', 'IKS', 'UUD', 'Scheduled', '00434546');
INSERT INTO trips VALUES ('WEY6B7TDE6', 'FYXYBKXK', 'PYJ', 'TOF', 'Arrived', '00243371');
INSERT INTO trips VALUES ('LL4S1G8PQW', 'FYPKNBGN', 'RTW', 'DYR', 'Arrived', '00871029');
INSERT INTO trips VALUES ('JBI60Q2MGP', 'FYSZADHR', 'DME', 'KVX', 'Arrived', '00913835');
INSERT INTO trips VALUES ('7D8SWXQ48V', 'FYYYFUIT', 'NAL', 'NUX', 'Scheduled', '00305881');
INSERT INTO trips VALUES ('DZCBMKI9BU', 'FYGBZBCQ', 'DME', 'NAL', 'Departed', '00603813');
INSERT INTO trips VALUES ('3AML9EO1ZU', 'FYWSRRLT', 'RVH', 'DME', 'Arrived', '00837897');
INSERT INTO trips VALUES ('529DVPG56R', 'FYRJNVDV', 'BCX', 'HTA', 'Arrived', '00913835');
INSERT INTO trips VALUES ('D1VLWQT9GD', 'FYDXJSJR', 'VKO', 'NSK', 'Delayed', '00045877');
INSERT INTO trips VALUES ('8GX4Z63QKE', 'FYLTSDSB', 'KUF', 'PBX', 'Scheduled', '00974590');
INSERT INTO trips VALUES ('3WU3U5YSRV', 'FYBDTVEX', 'CEK', 'KSZ', 'Cancelled', '00974590');
INSERT INTO trips VALUES ('3ZAQ90KNLJ', 'FYUKAZNV', 'HTA', 'KHV', 'Scheduled', '00073581');
INSERT INTO trips VALUES ('Z1ZBYY6OL3', 'FYVADNYC', 'KRO', 'SGC', 'Scheduled', '00619341');
INSERT INTO trips VALUES ('7AYT1ZEL9L', 'FYTSDYQF', 'ACS', 'STW', 'Arrived', '00461862');
INSERT INTO trips VALUES ('MNSKOUBKF9', 'FYECNFGA', 'KHV', 'SVX', 'Arrived', '00108551');
INSERT INTO trips VALUES ('5X1DUI7MXZ', 'FYUGYNWQ', 'BCX', 'RTW', 'Departed', '00473503');
INSERT INTO trips VALUES ('NNNU1G3P7E', 'FYNDDJVU', 'DYR', 'SCW', 'Departed', '00243371');
INSERT INTO trips VALUES ('18DMF6OGN9', 'FYLAZXFB', 'VKT', 'VKO', 'Departed', '00619341');
INSERT INTO trips VALUES ('XYXL53SCQK', 'FYHTHJSQ', 'SGC', 'KGP', 'Delayed', '00461862');
INSERT INTO trips VALUES ('UT37FSBM4O', 'FYMONFVU', 'KEJ', 'PYJ', 'Arrived', '00305881');
INSERT INTO trips VALUES ('6FN3ZKYEVY', 'FYWGBVVX', 'IKS', 'NOZ', 'Scheduled', '00095579');
INSERT INTO trips VALUES ('H27PNTQH4K', 'FYLVNAEX', 'NSK', 'RZN', 'Scheduled', '00603813');
INSERT INTO trips VALUES ('M8L4LI30P2', 'FYBHJCIQ', 'PYJ', 'SGC', 'Arrived', '00305881');
INSERT INTO trips VALUES ('QZV6ZMWWTB', 'FYFKGDGH', 'NSK', 'MMK', 'Cancelled', '00305881');
INSERT INTO trips VALUES ('RQUAPVXU7I', 'FYTLTEYC', 'RTW', 'UUS', 'Scheduled', '00473503');
INSERT INTO trips VALUES ('TRBF4TTDIU', 'FYTQYCMA', 'DME', 'LED', 'Delayed', '00974590');
INSERT INTO trips VALUES ('FL98ACKIH1', 'FYNYHKCT', 'DME', 'VKT', 'Arrived', '00603813');
INSERT INTO trips VALUES ('MSHHF6KLJT', 'FYFKRKVJ', 'TJM', 'KSZ', 'Scheduled', '00619341');
INSERT INTO trips VALUES ('JQF04Q8I9G', 'FYIZWBNV', 'PEZ', 'ROV', 'Arrived', '00073581');
INSERT INTO trips VALUES ('DQJN8Z0910', 'FYJKLZLE', 'NSK', 'CSY', 'Arrived', '00913835');
INSERT INTO trips VALUES ('NWVY6OMNG7', 'FYCLQKGI', 'UCT', 'PEZ', 'Arrived', '00837897');
INSERT INTO trips VALUES ('YJW1ZNCFBS', 'FYZFBTDO', 'KEJ', 'BTK', 'Scheduled', '00619341');
INSERT INTO trips VALUES ('HXCMRFOB6P', 'FYVYYQRC', 'DKS', 'BTK', 'Scheduled', '00871029');
INSERT INTO trips VALUES ('3XE7G7OE4P', 'FYNELFIN', 'UUD', 'NSK', 'Scheduled', '00603813');
INSERT INTO trips VALUES ('8N2KAM9DEC', 'FYSPDVSV', 'ACS', 'IJK', 'Departed', '00603813');
INSERT INTO trips VALUES ('41BVLBDKOH', 'FYYCTKNY', 'KUF', 'EGO', 'Scheduled', '00603813');
INSERT INTO trips VALUES ('35OHWYY8IU', 'FYBVATBF', 'BWO', 'ROV', 'Scheduled', '00619341');
INSERT INTO trips VALUES ('YOH0RM9VQF', 'FYXURBHU', 'ACS', 'OSW', 'Scheduled', '00045877');
INSERT INTO trips VALUES ('YCXO645BFL', 'FYSLXGSG', 'VKO', 'DME', 'Arrived', '00073581');
INSERT INTO trips VALUES ('8ZTSNCGKI5', 'FYOSOJBM', 'BQS', 'MOW', 'Arrived', '00305881');
INSERT INTO trips VALUES ('YPKNDOQ55S', 'FYTSBUNH', 'MQF', 'KYZ', 'Scheduled', '00603813');
INSERT INTO trips VALUES ('VTHTJMYTT0', 'FYCJUWEV', 'UUS', 'AMV', 'Arrived', '00073581');
INSERT INTO trips VALUES ('THCLB4OOC0', 'FYGZIAIP', 'UFA', 'RZN', 'Departed', '00913835');
INSERT INTO trips VALUES ('29RXLVJHVJ', 'FYBSRELS', 'PVS', 'KSZ', 'Departed', '00095579');
INSERT INTO trips VALUES ('N7SRZUAXMM', 'FYVXIVHZ', 'KZN', 'DME', 'Arrived', '00243371');
INSERT INTO trips VALUES ('QMWW87WUE2', 'FYJUOLRJ', 'OVB', 'GDX', 'Departed', '00073581');


INSERT INTO clients VALUES ('LGEBN53X8I1Y', 'Ivan Egorov', '+75544461673', 40);
INSERT INTO clients VALUES ('4NRRAHARBISL', 'Vyacheslav Petrov', '+78774794727', 57);
INSERT INTO clients VALUES ('HKPSZUJQDQVG', 'Victor Volkov', '+72630859116', 21);
INSERT INTO clients VALUES ('M8TLNY8O5UYZ', 'Tatiana Pavlova', '+70265999830', 52);
INSERT INTO clients VALUES ('O0R58CGGIQJD', 'Elizaveta Egorova', '+70124100898', 65);
INSERT INTO clients VALUES ('BSR85GQFNRCB', 'Anna Morozova', '+75198645540', 62);
INSERT INTO clients VALUES ('QO75HHT3YFCV', 'Aleksandra Stepanova', '+78112187274', 71);
INSERT INTO clients VALUES ('L66RT0W5VKCO', 'Ludmila Ivanova', '+77190012242', 41);
INSERT INTO clients VALUES ('3EA2CXG3P3VW', 'Aleksandr Nikolaev', '+71333997867', 36);
INSERT INTO clients VALUES ('4CBL1CSSHTOZ', 'Dmitry Petrov', '+76684550143', 74);
INSERT INTO clients VALUES ('A1FDG6PIV84W', 'Denis Stepanov', '+77140700202', 26);
INSERT INTO clients VALUES ('MAFROHBKRFOF', 'Maria Egorova', '+75763445454', 54);
INSERT INTO clients VALUES ('P4TMWQHK4BPV', 'Angelina Petrova', '+74505025239', 50);
INSERT INTO clients VALUES ('41375QMWKX55', 'Nadezhda Popova', '+72774899565', 74);
INSERT INTO clients VALUES ('6DM0TK59KMP9', 'Boris Sokolov', '+73451751747', 36);
INSERT INTO clients VALUES ('YXBLICL96GXL', 'Nadezhda Ivanova', '+77287237553', 35);
INSERT INTO clients VALUES ('4A9FUE95UMTR', 'Daria Novikova', '+79043659102', 54);
INSERT INTO clients VALUES ('HYS9XO5IUI4K', 'Daria Volkova', '+72900278935', 70);
INSERT INTO clients VALUES ('ZZIA7AEYNC8A', 'Maria Fedorova', '+78932431470', 28);
INSERT INTO clients VALUES ('9EQ0DBEU761J', 'Tatiana Volkova', '+70867367875', 70);


INSERT INTO tickets VALUES ('UE01H8UCJQ8O', 'RL6EC4YWB1', 'Economy', 18280, 'LGEBN53X8I1Y');
INSERT INTO tickets VALUES ('WCADJ8UOTCWD', 'LL4S1G8PQW', 'Economy', 40530, '4NRRAHARBISL');
INSERT INTO tickets VALUES ('MXFLZA9PHHWI', 'JQF04Q8I9G', 'Economy', 9050, '41375QMWKX55');
INSERT INTO tickets VALUES ('WU6KOQZTRH3E', '7D8SWXQ48V', 'Economy', 13330, '3EA2CXG3P3VW');
INSERT INTO tickets VALUES ('OQ83AMHE59DM', '8RF8OIOVFR', 'FirstClass', 257460, '4NRRAHARBISL');
INSERT INTO tickets VALUES ('NKFQ4RNLXYEC', '5QMWLJ4SOC', 'PremiumEconomy', 55550, '4NRRAHARBISL');
INSERT INTO tickets VALUES ('3T9S9R8CRDVY', '8RF8OIOVFR', 'Economy', 25330, 'A1FDG6PIV84W');
INSERT INTO tickets VALUES ('GSIGUCHIESDF', '87RVI5T7A2', 'Economy', 33750, 'L66RT0W5VKCO');
INSERT INTO tickets VALUES ('2YOI2PSODQL3', 'WEY6B7TDE6', 'PremiumEconomy', 22390, '6DM0TK59KMP9');
INSERT INTO tickets VALUES ('JWSMMHW2XMAB', '87RVI5T7A2', 'Economy', 34420, 'MAFROHBKRFOF');
INSERT INTO tickets VALUES ('TQBQR0IMN32H', '3ZAQ90KNLJ', 'PremiumEconomy', 31340, 'HKPSZUJQDQVG');
INSERT INTO tickets VALUES ('8NSZ3Y13W04A', 'OZAO28DLFP', 'Economy', 10450, 'BSR85GQFNRCB');
INSERT INTO tickets VALUES ('ZA39AID06OZN', 'XOY8HZ1LQ5', 'FirstClass', 437660, 'O0R58CGGIQJD');
INSERT INTO tickets VALUES ('WVXFO0DFSW73', 'H27PNTQH4K', 'Economy', 23370, 'QO75HHT3YFCV');
INSERT INTO tickets VALUES ('ZCQ7UFXD2I3K', 'HC0MJ162ZZ', 'Economy', 41920, 'HKPSZUJQDQVG');
INSERT INTO tickets VALUES ('H4GNE6O3CJ82', '3XE7G7OE4P', 'Economy', 18940, 'YXBLICL96GXL');
INSERT INTO tickets VALUES ('E5TKAEGCMZ7W', '35OHWYY8IU', 'PremiumEconomy', 53580, '6DM0TK59KMP9');
INSERT INTO tickets VALUES ('3DGXUL6T9E8B', 'Z3BPB534TR', 'Economy', 14170, 'P4TMWQHK4BPV');
INSERT INTO tickets VALUES ('702ADQNIS69Z', '87RVI5T7A2', 'Economy', 23170, '4NRRAHARBISL');
INSERT INTO tickets VALUES ('IR71NM41MRLM', 'B5L8IUXI1O', 'Economy', 36120, 'A1FDG6PIV84W');
INSERT INTO tickets VALUES ('ZLN3ZYL2E7UD', 'LL4S1G8PQW', 'PremiumEconomy', 78240, '4CBL1CSSHTOZ');
INSERT INTO tickets VALUES ('JJZ1LAYOR40K', 'NWVY6OMNG7', 'Economy', 30380, '4A9FUE95UMTR');
INSERT INTO tickets VALUES ('02L9TNINKTTY', 'BODSSG3E82', 'PremiumEconomy', 57370, 'A1FDG6PIV84W');
INSERT INTO tickets VALUES ('5RJ9VEVLTIRR', 'P1KMGIH0LB', 'PremiumEconomy', 33820, 'QO75HHT3YFCV');
INSERT INTO tickets VALUES ('TVEHF8S5D1KL', '41BVLBDKOH', 'Economy', 32380, '41375QMWKX55');
INSERT INTO tickets VALUES ('18IWPW434XAU', 'JQF04Q8I9G', 'Economy', 22490, 'HYS9XO5IUI4K');
INSERT INTO tickets VALUES ('PQQH44EIOUNQ', 'UT37FSBM4O', 'Business', 149810, '9EQ0DBEU761J');
INSERT INTO tickets VALUES ('WNO7QWHNQ1X6', 'DFCFUPV4XB', 'FirstClass', 280240, 'MAFROHBKRFOF');
INSERT INTO tickets VALUES ('PO3F39IYONF4', 'I7OL2KZUTM', 'Economy', 36080, 'MAFROHBKRFOF');
INSERT INTO tickets VALUES ('MZH0D5052IEQ', '29RXLVJHVJ', 'Economy', 24200, '4NRRAHARBISL');
INSERT INTO tickets VALUES ('8NN75L120I5Q', 'ZK9M965C68', 'PremiumEconomy', 68630, 'ZZIA7AEYNC8A');
INSERT INTO tickets VALUES ('HCCVSTRLNGJV', '1OOOROHFT5', 'Economy', 26290, 'YXBLICL96GXL');
INSERT INTO tickets VALUES ('86274XSOSNJ6', 'OZAO28DLFP', 'Economy', 39470, '9EQ0DBEU761J');
INSERT INTO tickets VALUES ('9Y93S7E4Q145', 'DTN6F9SMFY', 'Economy', 46400, 'O0R58CGGIQJD');
INSERT INTO tickets VALUES ('B7BH71HM23J7', 'WEY6B7TDE6', 'Economy', 6950, 'L66RT0W5VKCO');
INSERT INTO tickets VALUES ('OCNIND8J6YD7', '6FN3ZKYEVY', 'Economy', 46870, 'HYS9XO5IUI4K');
INSERT INTO tickets VALUES ('A6LRS128V10I', 'YRDP58VH7Z', 'Economy', 19400, 'MAFROHBKRFOF');
INSERT INTO tickets VALUES ('CXSABAOA2CS2', 'WIHYUQL6L4', 'Economy', 18470, 'ZZIA7AEYNC8A');
INSERT INTO tickets VALUES ('Z2VWROS7T4IR', 'OZAO28DLFP', 'Economy', 9610, 'A1FDG6PIV84W');
INSERT INTO tickets VALUES ('7P4K971958IX', 'WEY6B7TDE6', 'Economy', 7590, 'HKPSZUJQDQVG');
INSERT INTO tickets VALUES ('VR9P4MQ6HJ8M', 'I7OL2KZUTM', 'Economy', 45730, 'L66RT0W5VKCO');
INSERT INTO tickets VALUES ('VJT08F5YKP7D', '87RVI5T7A2', 'Economy', 17500, '6DM0TK59KMP9');
INSERT INTO tickets VALUES ('ID17JOA1HZJL', 'DAA22Y84O7', 'Economy', 39850, 'QO75HHT3YFCV');
INSERT INTO tickets VALUES ('AA0MZV3QASIE', 'VR5SF5YIWN', 'Economy', 35860, 'MAFROHBKRFOF');
INSERT INTO tickets VALUES ('8UVQROLPPF2E', '01BWVNX5Y6', 'PremiumEconomy', 48900, '4CBL1CSSHTOZ');
INSERT INTO tickets VALUES ('UDE15B2QXYR5', 'DZCBMKI9BU', 'Economy', 47900, 'YXBLICL96GXL');
INSERT INTO tickets VALUES ('05XGD0C3SD0A', '41BVLBDKOH', 'Economy', 46310, 'HYS9XO5IUI4K');
INSERT INTO tickets VALUES ('3Z45EW0ESQSR', '0SE4S0HRRU', 'Business', 92310, 'HYS9XO5IUI4K');
INSERT INTO tickets VALUES ('2OUQ2N9GNF4A', 'DAA22Y84O7', 'Economy', 48760, 'BSR85GQFNRCB');
INSERT INTO tickets VALUES ('WI1OKUNNVU6D', 'VCKEGVKWW8', 'Economy', 47110, '4NRRAHARBISL');
 use airport;
 Select * from trips;
 
 -- Клиент ищет билеты из точки А в точку Б. Однако есть важное условие — стоимость билета не должна превышать 13200.
-- Напишите запрос, который выведет id билетов, стоимость которых меньше или равна 13200.
-- В выборке должен присутствовать один атрибут — id.

select 
id
from tickets
where price<=13200;

-- 1. Выведите коды всех рейсов, в рамках которых воздушные судна вылетели из Москвы и в данный момент находятся в воздухе (статус таких рейсов —  departed). 
-- Коды аэропортов Москвы: SVO, VKO, DME.
-- В выборке должен присутствовать один атрибут — trip_code.
select
*
from trips;
select
trip_code
from trips
where departure in ('SVO','VKO', 'DME') and status in('departed');

select
side_number,
range_
from airliners 
where (range_>1000 and range_<=2500) or range_>=6000;
-- 3. Выведите идентификаторы билетов бизнес-класса дешевле 65 000 и экономкласса дороже 15 000. 
-- Исключите из выборки билеты рейсов VR5SF5YIWN, OZAO28DLFP и LL4S1G8PQW, так как для них ценовая политика не меняется.
-- В выборке должен присутствовать один атрибут — id.
select
count(id) as count
from tickets
where ((service_class = 'Business' and price<65000) or (service_class = 'Economy' and price>15000))
and trip_id not in( 'VR5SF5YIWN','OZAO28DLFP','LL4S1G8PQW');
-- 5. Для каждого самолета модели Cessna 172 выведите дальность полета. 
-- Имя столбца с результатом должно быть max_distance.
-- В выборке должен присутствовать один атрибут — max_distance.

select
range_ as max_distance
from airliners
where model_name = 'Cessna 172';

-- 6. Разделите самолеты на ближне-, средне- и дальнемагистральные. 
-- Ближнемагистральными будем считать самолеты, дальность полета которых > 1000 км и <= 2500 км. 
-- Среднемагистральными — с дальностью полета > 2500 км и <= 6000 км. 
-- Дальнемагистральными — с дальностью полета > 6000 км. 
-- В выборке должно быть два столбца, где в первом указана модель самолета. 
-- Во втором, category, — категория, со значениями short-haul, medium-haul, long-haul (ближне-, средне- и дальнемагистральные соответственно). 
-- Каждый самолет точно попадает ровно в одну категорию.
-- В выборке должны присутствовать два атрибута — model_name, category.

select
model_name,
CASE 
when range_ > 1000 and range_ <= 2500 then 'a'
when range_ > 2500 and range_ <= 6000 then 'b'
when range_ <6000 then 'с'
else 'undefined'
end as category
from airliners;

select
	model_name,
    case
		when range_ > 1000 and range_ <= 2500 then 'short-haul'
        when range_ > 2500 and range_ <= 6000 then 'medium-haul'
        when range_ > 6000 then 'long-haul'
        else 'undefined'
    end as category
from airliners;
-- ДЗ
-- 1. Отсортируйте данные о билетах в зависимости от цены по возрастанию. В выборке должны присутствовать 
-- три атрибута — id, trip_id, price.
select 
id,
trip_id,
price
 from tickets
 order by price;


-- 2. Менеджеры авиакомпании потребовали выяснить количество различных моделей самолетов. Выведите все доступные
-- модели, исключая дубликаты. В выборке должен присутствовать один атрибут — model_name.


select distinct
model_name
from airliners;




-- 3. Посчитайте кол-во моделей из прошлой задачи.
select 
count(model_name)
from (select distinct
model_name
from airliners) as t1;

-- 4. Аналитическое подразделение решило уточнить у авиакомпании количество билетов не бизнес-класса. 
-- Напишите запрос, который выведет id билетов, класс обслуживания в которых отличен от бизнес-класса (Business). 
-- В выборке должен присутствовать один атрибут —  id.

select
id
from tickets
where service_class != 'Business';



-- 5. Посчитайте кол-во билетов из прошлой задачи.
select
count(id)
from(select
id
from tickets
where service_class != 'Business') as t1;
-- 6. Определите модели самолетов, максимальная дальность полета которых находится в диапазоне от 4200 до 7900 включительно.
-- В выборке должен присутствовать один атрибут —  model_name.


select
model_name
from airliners
where range_ between 4200 and 7900;

use airport;

select date('2022-12-13 13:23:16');
select year()('2022-12-13 13:23:16');
