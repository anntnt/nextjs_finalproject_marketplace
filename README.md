# Next.js E-Commerce Marketplace

The Marketplace eStores is a project where I used Next.js to build a full-stack web application. This project is still in progress and being continuously improved.

- A full-stack marketplace for buying and selling products.
- Features user authentication and user authorization, product and category listings, product search, shopping cart, checkout, payment gateway, and separate buyer/seller areas.
- Uses a database to store information and relationships between users, products, categories, sessions, carts, orders, etc., including user-generated content.
- A REST API for frontend-backend communication.
- Zod server-side validation of data entered by the user.
- Cloudinary API for image processing and hosting.
- Frontend and backend validations for security and data integrity.

### [The marketplace eStores](https://estores.fly.dev/)

![alt text](./public/images/eStores.jpg)

### [Category listings](https://estores.fly.dev/marketplace)

![alt text](./public/images/marketplace.jpg)

### [Database diagram](https://drawsql.app/teams/myteam-1161/diagrams/estores)

![alt text](./public/images/drawsql_2.jpg)

## Technologies

- Next.js
- React
- Typescript
- Node.js
- PostgreSQL
- REST API
- Zod authentication
- Cookies
- Tailwind CSS & Flowbite UI
- Cloudinary
- Stripe

## Project Setup

_The instructions will be updated. Please check back later!_

### Database Setup

If you don't have PostgreSQL installed yet, follow the instructions from the PostgreSQL step in [UpLeveled's System Setup Instructions](https://github.com/upleveled/system-setup/blob/master/readme.md).

Copy the `.env.example` file to a new file called `.env` (ignored from Git) and fill in the necessary information.

Then, connect to the built-in `postgres` database as administrator in order to create the database:

#### Windows

If it asks for a password, use `postgres`.

```bash
psql -U postgres
```

#### macOS

```bash
psql postgres
```

#### Linux

```bash
sudo -u postgres psql
```

Once you have connected, run the following to create the database:

```sql
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
\connect <database name>
CREATE SCHEMA <schema name> AUTHORIZATION <user name>;
```

Quit `psql` using the following command:

```bash
\q
```

On Linux, it is [best practice to create an operating system user for each database](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/configuring_and_using_database_servers/using-postgresql_configuring-and-using-database-servers#con_postgresql-users_using-postgresql), to ensure that the operating system user can only access the single database and no other system resources. A different password is needed on Linux because [passwords of operating system users cannot contain the user name](https://github.com/upleveled/system-setup/issues/74). First, generate a random password and copy it:

```bash
openssl rand -hex 16
```

Then create the user, using the database user name from the previous section above. When you are prompted to create a password for the user, paste in the generated password.

```bash
sudo adduser <user name>
```

Once you're ready to use the new user, reconnect using the following command.

**Windows and macOS:**

```bash
psql -U <user name> <database name>
```

**Linux:**

```bash
sudo -u <user name> psql -U <user name> <database name>
```

## Deployment

- Fly.io
- Docker
