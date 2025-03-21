import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE reviews (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      star int NOT NULL,
      content text,
      product_id integer NOT NULL REFERENCES products (id) ON DELETE cascade,
      user_id integer NOT NULL REFERENCES users (id)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE reviews`;
}
