import {z} from 'zod';

//schema for inserting products
export const insertProductSchema = z.object({
    name: z.string().min(3, 'name must be minimum 3 characters'),
    slug: z.string().min(3, 'slug must be minimum 3 characters'),
    category: z.string().min(3, 'category must be minimum 3 characters'),
    brand: z.string().min(3, 'brand must be minimum 3 characters'),
    description: z.string().min(3, 'name must be minimum 3 characters'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'product must have one image'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: z.number().min(3)
});