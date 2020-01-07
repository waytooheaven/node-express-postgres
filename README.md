# node-express-postgres

Type "npm test" to activate test routes

# The endpoint parts

//user part
app.get('/users', db.getUsers)<br/>
app.get('/users/:id', db.getUserById)<br/>
app.post('/user', db.createUser)<br/>
//order part<br/>
app.get('/orders', db.getOrders)<br/>
app.get('/orders/:id', db.getOrderById)<br/>
app.post('/order', db.createOrder)<br/>
app.delete('/orders/:id', db.deleteOrder)<br/>
app.put('/orders/:id', db.updateOrder)<br/>
app.get('/orders/filter/status/:status', db.getOrdersByStatus)<br/>
app.get('/orders/filter/user/:id', db.getOrdersByUser)<br/>
app.get('/orders/track/:status', db.trackOrder)<br/>

# Database part

## 1 Create Orders Table
CREATE TABLE public.orders <br/>
(<br/>
    id integer NOT NULL DEFAULT nextval('orders_id_seq'::regclass), <br/>
    naming character varying(150) COLLATE pg_catalog."default" NOT NULL, <br/>
    sizes character varying(355) COLLATE pg_catalog."default" NOT NULL, <br/>
    statuses character varying COLLATE pg_catalog."default", <br/>
    quantity integer, <br/>
    custid integer, <br/>
    CONSTRAINT orders_pkey PRIMARY KEY (id) <br/>
)<br/>

TABLESPACE pg_default;<br/>

ALTER TABLE public.orders<br/>
    OWNER to postgres;<br/>

## 2 Create Users Table
CREATE TABLE public.users<br/>
(<br/>
    address character varying COLLATE pg_catalog."default",<br/>
    name character varying COLLATE pg_catalog."default",<br/>
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),<br/>
    CONSTRAINT users_pkey PRIMARY KEY (id)<br/>
)<br/>

TABLESPACE pg_default;<br/>

ALTER TABLE public.users<br/>
    OWNER to postgres;<br/>