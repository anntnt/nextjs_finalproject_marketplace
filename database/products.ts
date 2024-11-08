import { cache } from 'react';
import { sql } from './connect';

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  sellerId: string;
  categoryId: number;
};

export type ProductWithSeller = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  sellerId: string;
  sellerName: string;
  categoryId: number;
};
export const getProductsInsecure = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;

  return products;
});

export const getProductInsecure = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;

  return product;
});

export const getCategoryProductsInsecure = cache(async (categoryId: number) => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      category_id = ${categoryId}
  `;

  return products;
});

export const getCategoryProductsWithSellerInsecure = cache(
  async (categoryId: number) => {
    const products = await sql<ProductWithSeller[]>`
      SELECT
        products.* products
      FROM
        products,
        users
      WHERE
        products.category_id = ${categoryId}
        AND products.seller_id = users.id
    `;

    return products;
  },
);
