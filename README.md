# node-express-postgres

Type "npm test" to activate test routes

# the endpoint parts

//user part
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/user', db.createUser)
//order part
app.get('/orders', db.getOrders)
app.get('/orders/:id', db.getOrderById)
app.post('/order', db.createOrder)
app.delete('/orders/:id', db.deleteOrder)
app.put('/orders/:id', db.updateOrder)
app.get('/orders/filter/status/:status', db.getOrdersByStatus)
app.get('/orders/filter/user/:id', db.getOrdersByUser)

# database part
## 1 Orders
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

## 2 users
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