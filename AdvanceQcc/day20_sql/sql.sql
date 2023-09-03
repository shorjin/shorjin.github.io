-- CREATE TABLE userOrder(
-- 	id serial PRIMARY KEY,
-- 	quantity INT NOT NULL,
-- 	item VARCHAR(255) NOT NULL,
-- 	totalPrice INT NOT NULL
-- );
-- select * from userOrder

-- CREATE TABLE userLogin (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(128) NOT NULL UNIQUE,
--     password VARCHAR(128) NOT NULL,
-- 	userShippingAddress_id INT,
-- 	userOrder_id INT,
-- 	userInfo_id  INT,
-- 	FOREIGN KEY (userInfo_id)  REFERENCES userInfo(id),
--     FOREIGN KEY (userShippingAddress_id)  REFERENCES userShippingAddress(id),
--     FOREIGN KEY (userOrder_id)  REFERENCES userOrder(id)
-- );
-- CREATE TABLE userInfo (
--     id SERIAL PRIMARY KEY,
--     last_name VARCHAR(50) NOT NULL,
--     first_name VARCHAR(50) NOT NULL,
-- 	userShippingAddress_id INT,
-- 	userOrder_id INT,
--     FOREIGN KEY (userShippingAddress_id)  REFERENCES userShippingAddress(id),
--     FOREIGN KEY (userOrder_id)  REFERENCES userOrder(id)
-- );


-- INSERT INTO userShippingAddress 
-- 	(id, address, state, zip_code)
-- VALUES
-- 	(1, '800 follow st.', 'NY', '10001'),
-- 	(2, '320 water st.', 'CT', '12005'),
-- 	(3, '9 Gotham st.', 'GC', '15200');
	



-- INSERT INTO UserOrder 
-- 	(id, quantity, item, totalprice)
-- VALUES
-- 	(1, 2, 'Wooden Boat', 120),
-- 	(2, 1, 'Rabbit', 25),
-- 	(3, 5, 'Cars', 180),
-- 	(4, 3, 'Bubbles', 36);

-- INSERT INTO userInfo 
-- 	(id, last_name, first_name, userShippingAddress_id, userOrder_id)
-- VALUES
-- 	(1, 'Pan', 'Peter', 1, 1),
-- 	(2, 'Key', 'Alice', 2, 2),
-- 	(3, 'Wayne', 'Bruce', 3, 3),
-- 	(4, 'Li', 'Xiaojin', NULL, 4);



-- INSERT INTO userLogin 
-- 	(id, username, password, userShippingAddress_id, userOrder_id,userInfo_id)
-- VALUES
-- 	(1, 'Peterpan', 'Peter123', 1, 1,1),
-- 	(2, 'Alicekey', 'Key123', 2, 2,2),
-- 	(3, 'Batman', 'Guess123', 3, 3,3);

-- select username,totalprice
-- FROM userLogin
-- inner join UserOrder
-- on userLogin.userOrder_id=UserOrder.id


select last_name,state,item
from userInfo
left join UserOrder
on userInfo.userOrder_id=UserOrder.id
left join userShippingAddress
on userInfo.userShippingAddress_id=userShippingAddress.id

-- select first_name,address,zip_code,quantity,item,totalprice
-- from userInfo
-- left join UserOrder
-- on userInfo.userOrder_id=UserOrder.id
-- left join userShippingAddress
-- on userInfo.userShippingAddress_id=userShippingAddress.id
	