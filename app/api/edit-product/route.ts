import { NextRequest, NextResponse } from 'next/server';
import {
  type Product,
  updateProduct,
  updateProductSchema,
} from '../../../database/products';
import { cloudinaryUpload } from '../../../util/cloudinaryUpload';
import { getCookie } from '../../../util/cookies';

export type ProductEditPost =
  | {
      product: Omit<Product, 'sellerId'>;
    }
  | {
      error: string;
    };

//const productId = Number((await searchParams).productid);
export async function PUT(
  request: NextRequest,
): Promise<NextResponse<ProductEditPost>> {
  // 3. Get the token from the cookie

  try {
    const formData = await request.formData();
    // const productId = Number(await searchParams);

    if (!formData) {
      return NextResponse.json({ error: 'Missing required Data' });
    }

    const response = await cloudinaryUpload(formData, 'server-action-images');

    if (!response || !response.imageUrl) {
      return NextResponse.json({ error: 'Image upload failed' });
    }
    console.log('response.imageUrl ', response.imageUrl);
    const body = {
      id: Number(formData.get('productId')),
      name: formData.get('name'),
      price: Number(formData.get('price')),
      imageUrl: response.imageUrl,
      description: formData.get('description'),
      categoryId: Number(formData.get('categoryId')),
    };

    const result = updateProductSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({
        error: JSON.stringify(result.error.issues),
      });
    }
    const sessionTokenCookie = await getCookie('sessionToken');
    console.log('result ', result);

    const newProduct =
      sessionTokenCookie &&
      (await updateProduct(sessionTokenCookie, {
        id: result.data.id,
        name: result.data.name,
        price: result.data.price,
        imageUrl: result.data.imageUrl,
        description: result.data.description,
        categoryId: result.data.categoryId,
        size: null,
        color: null,
      }));

    if (!newProduct) {
      return NextResponse.json({ error: 'Product update failed 2' });
    }

    return NextResponse.json({ product: newProduct });
  } catch (error) {
    console.log('error: ', error);
    return NextResponse.json({
      error: 'Product update failed 1',
    });
  }
}
