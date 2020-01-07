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
CREATE TABLE public.orders
(
    id integer NOT NULL DEFAULT nextval('orders_id_seq'::regclass),
    naming character varying(150) COLLATE pg_catalog."default" NOT NULL,
    sizes character varying(355) COLLATE pg_catalog."default" NOT NULL,
    statuses character varying COLLATE pg_catalog."default",
    quantity integer,
    custid integer,
    CONSTRAINT orders_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.orders
    OWNER to postgres;

## 2 Create Users Table
CREATE TABLE public.users
(
    address character varying COLLATE pg_catalog."default",
    name character varying COLLATE pg_catalog."default",
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;