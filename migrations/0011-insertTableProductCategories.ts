import type { Sql } from 'postgres';

const product_categories = [
  {
    id: 1,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730211468/samples/food/fish-vegetables.jpg',
    name: 'Food & Grocery',
  },
  {
    id: 2,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917186/pexels-punttim-139764_o7mxjx.jpg',
    name: 'Pictures',
  },
  {
    id: 3,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917317/pexels-pixabay-220749_hu5oni.jpg',
    name: 'Furniture',
  },
  {
    id: 4,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_pad,w_500,h_375,ar_4:3,e_improve,e_sharpen/v1730211476/samples/balloons.jpg',
    name: 'Lorem Ipsum',
  },
  {
    id: 5,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_pad,w_500,h_375,ar_4:3,e_improve,e_sharpen/v1730211473/samples/two-ladies.jpg',
    name: 'Lorem Ipsum',
  },
  {
    id: 6,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_pad,w_500,h_375,ar_4:3,e_improve,e_sharpen/v1730211477/samples/man-on-a-street.jpg',
    name: 'Lorem Ipsum',
  },
  {
    id: 7,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_pad,w_500,h_375,ar_4:3,e_improve,e_sharpen/v1730211470/samples/ecommerce/accessories-bag.jpg',
    name: 'Lorem Ipsum',
  },
  {
    id: 8,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_pad,w_500,h_375,ar_4:3,e_improve,e_sharpen/v1730211476/samples/balloons.jpg',
    name: 'Lorem Ipsum',
  },
  {
    id: 9,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917317/pexels-pixabay-220749_hu5oni.jpg',
    name: 'Lorem Ipsum',
  },
  {
    id: 10,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730211468/samples/food/fish-vegetables.jpg',
    name: 'Food & Grocery',
  },
  {
    id: 11,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917186/pexels-punttim-139764_o7mxjx.jpg',
    name: 'Pictures',
  },
  {
    id: 12,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917317/pexels-pixabay-220749_hu5oni.jpg',
    name: 'Furniture',
  },
  {
    id: 13,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730211468/samples/food/fish-vegetables.jpg',
    name: 'Food & Grocery',
  },
  {
    id: 14,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917186/pexels-punttim-139764_o7mxjx.jpg',
    name: 'Pictures',
  },
  {
    id: 15,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917317/pexels-pixabay-220749_hu5oni.jpg',
    name: 'Furniture',
  },
  {
    id: 16,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730211468/samples/food/fish-vegetables.jpg',
    name: 'Food & Grocery',
  },
  {
    id: 17,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917186/pexels-punttim-139764_o7mxjx.jpg',
    name: 'Pictures',
  },
  {
    id: 18,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917317/pexels-pixabay-220749_hu5oni.jpg',
    name: 'Furniture',
  },
  {
    id: 19,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730211468/samples/food/fish-vegetables.jpg',
    name: 'Food & Grocery',
  },
  {
    id: 20,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917186/pexels-punttim-139764_o7mxjx.jpg',
    name: 'Pictures',
  },
  {
    id: 21,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917317/pexels-pixabay-220749_hu5oni.jpg',
    name: 'Furniture',
  },
  {
    id: 22,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730211468/samples/food/fish-vegetables.jpg',
    name: 'Food & Grocery',
  },
  {
    id: 23,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917186/pexels-punttim-139764_o7mxjx.jpg',
    name: 'Pictures',
  },
  {
    id: 24,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917317/pexels-pixabay-220749_hu5oni.jpg',
    name: 'Furniture',
  },
  {
    id: 25,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730211468/samples/food/fish-vegetables.jpg',
    name: 'Food & Grocery',
  },
  {
    id: 26,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_fill,w_500,h_375,ar_4:3,g_auto,e_improve,e_sharpen/v1730917186/pexels-punttim-139764_o7mxjx.jpg',
    name: 'Pictures',
  },
  {
    id: 27,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_pad,w_500,h_375,ar_4:3,e_improve,e_sharpen/v1730211468/samples/animals/cat.jpg',
    name: 'Furniture',
  },
  {
    id: 28,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_pad,w_500,h_375,ar_4:3,e_improve,e_sharpen/v1730211468/samples/animals/cat.jpg',
    name: 'Food & Grocery',
  },
  {
    id: 29,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_pad,w_500,h_375,ar_4:3,e_improve,e_sharpen/v1730211466/sample.jpg',
    name: 'Pictures',
  },
  {
    id: 30,
    image_url:
      'https://res.cloudinary.com/dnglmyclj/image/upload/c_pad,w_500,h_375,ar_4:3,e_improve,e_sharpen/v1730211468/samples/ecommerce/analog-classic.jpg',
    name: 'Furniture',
  },
];

export async function up(sql: Sql) {
  for (const product_category of product_categories) {
    await sql`
      INSERT INTO
        product_categories (category_name, image_url)
      VALUES
        (
          ${product_category.name},
          ${product_category.image_url}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product_category of product_categories) {
    await sql`
      DELETE FROM product_categories
      WHERE
        id = ${product_category.id}
    `;
  }
}
