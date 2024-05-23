import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const ItemsScalarFieldEnumSchema = z.enum(['value']);

export const ProductScalarFieldEnumSchema = z.enum(['name','isActive','createdAt','updatedAt','deletedAt','description','price','image','id']);

export const ProductsScalarFieldEnumSchema = z.enum(['value']);

export const ProductsesScalarFieldEnumSchema = z.enum(['value']);

export const ProductssScalarFieldEnumSchema = z.enum(['value']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ITEMS SCHEMA
/////////////////////////////////////////

export const ItemsSchema = z.object({
  value: z.string(),
})

export type Items = z.infer<typeof ItemsSchema>

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  name: z.string(),
  isActive: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  description: z.string(),
  price: z.number().int().gte(-2147483648).lte(2147483647),
  image: z.string(),
  id: z.number().int().gte(-2147483648).lte(2147483647),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// PRODUCTS SCHEMA
/////////////////////////////////////////

export const ProductsSchema = z.object({
  value: z.string(),
})

export type Products = z.infer<typeof ProductsSchema>

/////////////////////////////////////////
// PRODUCTSES SCHEMA
/////////////////////////////////////////

export const ProductsesSchema = z.object({
  value: z.string(),
})

export type Productses = z.infer<typeof ProductsesSchema>

/////////////////////////////////////////
// PRODUCTSS SCHEMA
/////////////////////////////////////////

export const ProductssSchema = z.object({
  value: z.string(),
})

export type Productss = z.infer<typeof ProductssSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ITEMS
//------------------------------------------------------

export const ItemsSelectSchema: z.ZodType<Prisma.ItemsSelect> = z.object({
  value: z.boolean().optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  image: z.boolean().optional(),
  id: z.boolean().optional(),
}).strict()

// PRODUCTS
//------------------------------------------------------

export const ProductsSelectSchema: z.ZodType<Prisma.ProductsSelect> = z.object({
  value: z.boolean().optional(),
}).strict()

// PRODUCTSES
//------------------------------------------------------

export const ProductsesSelectSchema: z.ZodType<Prisma.ProductsesSelect> = z.object({
  value: z.boolean().optional(),
}).strict()

// PRODUCTSS
//------------------------------------------------------

export const ProductssSelectSchema: z.ZodType<Prisma.ProductssSelect> = z.object({
  value: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ItemsWhereInputSchema: z.ZodType<Prisma.ItemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ItemsWhereInputSchema),z.lazy(() => ItemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ItemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ItemsWhereInputSchema),z.lazy(() => ItemsWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ItemsOrderByWithRelationInputSchema: z.ZodType<Prisma.ItemsOrderByWithRelationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsWhereUniqueInputSchema: z.ZodType<Prisma.ItemsWhereUniqueInput> = z.object({
  value: z.string().optional()
}).strict();

export const ItemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ItemsOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ItemsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ItemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ItemsMinOrderByAggregateInputSchema).optional()
}).strict();

export const ItemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ItemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.number().int().gte(-2147483648).lte(2147483647).optional()
}).strict();

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ProductsWhereInputSchema: z.ZodType<Prisma.ProductsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductsWhereInputSchema),z.lazy(() => ProductsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductsWhereInputSchema),z.lazy(() => ProductsWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductsOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductsOrderByWithRelationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsWhereUniqueInputSchema: z.ZodType<Prisma.ProductsWhereUniqueInput> = z.object({
  value: z.string().optional()
}).strict();

export const ProductsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductsOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductsMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProductsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductsScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductsScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductsesWhereInputSchema: z.ZodType<Prisma.ProductsesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductsesWhereInputSchema),z.lazy(() => ProductsesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductsesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductsesWhereInputSchema),z.lazy(() => ProductsesWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductsesOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductsesOrderByWithRelationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsesWhereUniqueInputSchema: z.ZodType<Prisma.ProductsesWhereUniqueInput> = z.object({
  value: z.string().optional()
}).strict();

export const ProductsesOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductsesOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductsesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductsesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductsesMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProductsesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductsesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductsesScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductsesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductsesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductsesScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductsesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductssWhereInputSchema: z.ZodType<Prisma.ProductssWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductssWhereInputSchema),z.lazy(() => ProductssWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductssWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductssWhereInputSchema),z.lazy(() => ProductssWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductssOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductssOrderByWithRelationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductssWhereUniqueInputSchema: z.ZodType<Prisma.ProductssWhereUniqueInput> = z.object({
  value: z.string().optional()
}).strict();

export const ProductssOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductssOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductssCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductssMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductssMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProductssScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductssScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductssScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductssScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductssScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductssScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductssScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ItemsCreateInputSchema: z.ZodType<Prisma.ItemsCreateInput> = z.object({
  value: z.string()
}).strict();

export const ItemsUncheckedCreateInputSchema: z.ZodType<Prisma.ItemsUncheckedCreateInput> = z.object({
  value: z.string()
}).strict();

export const ItemsUpdateInputSchema: z.ZodType<Prisma.ItemsUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsUncheckedUpdateInputSchema: z.ZodType<Prisma.ItemsUncheckedUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsCreateManyInputSchema: z.ZodType<Prisma.ItemsCreateManyInput> = z.object({
  value: z.string()
}).strict();

export const ItemsUpdateManyMutationInputSchema: z.ZodType<Prisma.ItemsUpdateManyMutationInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ItemsUncheckedUpdateManyInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  name: z.string(),
  isActive: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().optional().nullable(),
  description: z.string(),
  price: z.number().int().gte(-2147483648).lte(2147483647),
  image: z.string(),
  id: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  name: z.string(),
  isActive: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().optional().nullable(),
  description: z.string(),
  price: z.number().int().gte(-2147483648).lte(2147483647),
  image: z.string(),
  id: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  name: z.string(),
  isActive: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().optional().nullable(),
  description: z.string(),
  price: z.number().int().gte(-2147483648).lte(2147483647),
  image: z.string(),
  id: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsCreateInputSchema: z.ZodType<Prisma.ProductsCreateInput> = z.object({
  value: z.string()
}).strict();

export const ProductsUncheckedCreateInputSchema: z.ZodType<Prisma.ProductsUncheckedCreateInput> = z.object({
  value: z.string()
}).strict();

export const ProductsUpdateInputSchema: z.ZodType<Prisma.ProductsUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductsUncheckedUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsCreateManyInputSchema: z.ZodType<Prisma.ProductsCreateManyInput> = z.object({
  value: z.string()
}).strict();

export const ProductsUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductsUpdateManyMutationInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductsUncheckedUpdateManyInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsesCreateInputSchema: z.ZodType<Prisma.ProductsesCreateInput> = z.object({
  value: z.string()
}).strict();

export const ProductsesUncheckedCreateInputSchema: z.ZodType<Prisma.ProductsesUncheckedCreateInput> = z.object({
  value: z.string()
}).strict();

export const ProductsesUpdateInputSchema: z.ZodType<Prisma.ProductsesUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsesUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductsesUncheckedUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsesCreateManyInputSchema: z.ZodType<Prisma.ProductsesCreateManyInput> = z.object({
  value: z.string()
}).strict();

export const ProductsesUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductsesUpdateManyMutationInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductsesUncheckedUpdateManyInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductssCreateInputSchema: z.ZodType<Prisma.ProductssCreateInput> = z.object({
  value: z.string()
}).strict();

export const ProductssUncheckedCreateInputSchema: z.ZodType<Prisma.ProductssUncheckedCreateInput> = z.object({
  value: z.string()
}).strict();

export const ProductssUpdateInputSchema: z.ZodType<Prisma.ProductssUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductssUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductssUncheckedUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductssCreateManyInputSchema: z.ZodType<Prisma.ProductssCreateManyInput> = z.object({
  value: z.string()
}).strict();

export const ProductssUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductssUpdateManyMutationInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductssUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductssUncheckedUpdateManyInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const ItemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsCountOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsMaxOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsMinOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const ProductsCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsCountOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsMaxOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsMinOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsesCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsesCountOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsesMaxOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsesMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsesMinOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductssCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductssCountOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductssMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductssMaxOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductssMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductssMinOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ItemsFindFirstArgsSchema: z.ZodType<Prisma.ItemsFindFirstArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ItemsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ItemsFindFirstOrThrowArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ItemsFindManyArgsSchema: z.ZodType<Prisma.ItemsFindManyArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ItemsAggregateArgsSchema: z.ZodType<Prisma.ItemsAggregateArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ItemsGroupByArgsSchema: z.ZodType<Prisma.ItemsGroupByArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithAggregationInputSchema.array(),ItemsOrderByWithAggregationInputSchema ]).optional(),
  by: ItemsScalarFieldEnumSchema.array(),
  having: ItemsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ItemsFindUniqueArgsSchema: z.ZodType<Prisma.ItemsFindUniqueArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const ItemsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ItemsFindUniqueOrThrowArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(),ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() 

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() 

export const ProductsFindFirstArgsSchema: z.ZodType<Prisma.ProductsFindFirstArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  where: ProductsWhereInputSchema.optional(),
  orderBy: z.union([ ProductsOrderByWithRelationInputSchema.array(),ProductsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductsFindFirstOrThrowArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  where: ProductsWhereInputSchema.optional(),
  orderBy: z.union([ ProductsOrderByWithRelationInputSchema.array(),ProductsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductsFindManyArgsSchema: z.ZodType<Prisma.ProductsFindManyArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  where: ProductsWhereInputSchema.optional(),
  orderBy: z.union([ ProductsOrderByWithRelationInputSchema.array(),ProductsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductsAggregateArgsSchema: z.ZodType<Prisma.ProductsAggregateArgs> = z.object({
  where: ProductsWhereInputSchema.optional(),
  orderBy: z.union([ ProductsOrderByWithRelationInputSchema.array(),ProductsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ProductsGroupByArgsSchema: z.ZodType<Prisma.ProductsGroupByArgs> = z.object({
  where: ProductsWhereInputSchema.optional(),
  orderBy: z.union([ ProductsOrderByWithAggregationInputSchema.array(),ProductsOrderByWithAggregationInputSchema ]).optional(),
  by: ProductsScalarFieldEnumSchema.array(),
  having: ProductsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ProductsFindUniqueArgsSchema: z.ZodType<Prisma.ProductsFindUniqueArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  where: ProductsWhereUniqueInputSchema,
}).strict() 

export const ProductsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductsFindUniqueOrThrowArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  where: ProductsWhereUniqueInputSchema,
}).strict() 

export const ProductsesFindFirstArgsSchema: z.ZodType<Prisma.ProductsesFindFirstArgs> = z.object({
  select: ProductsesSelectSchema.optional(),
  where: ProductsesWhereInputSchema.optional(),
  orderBy: z.union([ ProductsesOrderByWithRelationInputSchema.array(),ProductsesOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductsesScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductsesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductsesFindFirstOrThrowArgs> = z.object({
  select: ProductsesSelectSchema.optional(),
  where: ProductsesWhereInputSchema.optional(),
  orderBy: z.union([ ProductsesOrderByWithRelationInputSchema.array(),ProductsesOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductsesScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductsesFindManyArgsSchema: z.ZodType<Prisma.ProductsesFindManyArgs> = z.object({
  select: ProductsesSelectSchema.optional(),
  where: ProductsesWhereInputSchema.optional(),
  orderBy: z.union([ ProductsesOrderByWithRelationInputSchema.array(),ProductsesOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductsesScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductsesAggregateArgsSchema: z.ZodType<Prisma.ProductsesAggregateArgs> = z.object({
  where: ProductsesWhereInputSchema.optional(),
  orderBy: z.union([ ProductsesOrderByWithRelationInputSchema.array(),ProductsesOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ProductsesGroupByArgsSchema: z.ZodType<Prisma.ProductsesGroupByArgs> = z.object({
  where: ProductsesWhereInputSchema.optional(),
  orderBy: z.union([ ProductsesOrderByWithAggregationInputSchema.array(),ProductsesOrderByWithAggregationInputSchema ]).optional(),
  by: ProductsesScalarFieldEnumSchema.array(),
  having: ProductsesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ProductsesFindUniqueArgsSchema: z.ZodType<Prisma.ProductsesFindUniqueArgs> = z.object({
  select: ProductsesSelectSchema.optional(),
  where: ProductsesWhereUniqueInputSchema,
}).strict() 

export const ProductsesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductsesFindUniqueOrThrowArgs> = z.object({
  select: ProductsesSelectSchema.optional(),
  where: ProductsesWhereUniqueInputSchema,
}).strict() 

export const ProductssFindFirstArgsSchema: z.ZodType<Prisma.ProductssFindFirstArgs> = z.object({
  select: ProductssSelectSchema.optional(),
  where: ProductssWhereInputSchema.optional(),
  orderBy: z.union([ ProductssOrderByWithRelationInputSchema.array(),ProductssOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductssWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductssScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductssFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductssFindFirstOrThrowArgs> = z.object({
  select: ProductssSelectSchema.optional(),
  where: ProductssWhereInputSchema.optional(),
  orderBy: z.union([ ProductssOrderByWithRelationInputSchema.array(),ProductssOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductssWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductssScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductssFindManyArgsSchema: z.ZodType<Prisma.ProductssFindManyArgs> = z.object({
  select: ProductssSelectSchema.optional(),
  where: ProductssWhereInputSchema.optional(),
  orderBy: z.union([ ProductssOrderByWithRelationInputSchema.array(),ProductssOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductssWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductssScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ProductssAggregateArgsSchema: z.ZodType<Prisma.ProductssAggregateArgs> = z.object({
  where: ProductssWhereInputSchema.optional(),
  orderBy: z.union([ ProductssOrderByWithRelationInputSchema.array(),ProductssOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductssWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ProductssGroupByArgsSchema: z.ZodType<Prisma.ProductssGroupByArgs> = z.object({
  where: ProductssWhereInputSchema.optional(),
  orderBy: z.union([ ProductssOrderByWithAggregationInputSchema.array(),ProductssOrderByWithAggregationInputSchema ]).optional(),
  by: ProductssScalarFieldEnumSchema.array(),
  having: ProductssScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ProductssFindUniqueArgsSchema: z.ZodType<Prisma.ProductssFindUniqueArgs> = z.object({
  select: ProductssSelectSchema.optional(),
  where: ProductssWhereUniqueInputSchema,
}).strict() 

export const ProductssFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductssFindUniqueOrThrowArgs> = z.object({
  select: ProductssSelectSchema.optional(),
  where: ProductssWhereUniqueInputSchema,
}).strict() 

export const ItemsCreateArgsSchema: z.ZodType<Prisma.ItemsCreateArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  data: z.union([ ItemsCreateInputSchema,ItemsUncheckedCreateInputSchema ]),
}).strict() 

export const ItemsUpsertArgsSchema: z.ZodType<Prisma.ItemsUpsertArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
  create: z.union([ ItemsCreateInputSchema,ItemsUncheckedCreateInputSchema ]),
  update: z.union([ ItemsUpdateInputSchema,ItemsUncheckedUpdateInputSchema ]),
}).strict() 

export const ItemsCreateManyArgsSchema: z.ZodType<Prisma.ItemsCreateManyArgs> = z.object({
  data: ItemsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const ItemsDeleteArgsSchema: z.ZodType<Prisma.ItemsDeleteArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const ItemsUpdateArgsSchema: z.ZodType<Prisma.ItemsUpdateArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  data: z.union([ ItemsUpdateInputSchema,ItemsUncheckedUpdateInputSchema ]),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const ItemsUpdateManyArgsSchema: z.ZodType<Prisma.ItemsUpdateManyArgs> = z.object({
  data: z.union([ ItemsUpdateManyMutationInputSchema,ItemsUncheckedUpdateManyInputSchema ]),
  where: ItemsWhereInputSchema.optional(),
}).strict() 

export const ItemsDeleteManyArgsSchema: z.ZodType<Prisma.ItemsDeleteManyArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
}).strict() 

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict() 

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict() 

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: ProductCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() 

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict() 

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
}).strict() 

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
}).strict() 

export const ProductsCreateArgsSchema: z.ZodType<Prisma.ProductsCreateArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  data: z.union([ ProductsCreateInputSchema,ProductsUncheckedCreateInputSchema ]),
}).strict() 

export const ProductsUpsertArgsSchema: z.ZodType<Prisma.ProductsUpsertArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  where: ProductsWhereUniqueInputSchema,
  create: z.union([ ProductsCreateInputSchema,ProductsUncheckedCreateInputSchema ]),
  update: z.union([ ProductsUpdateInputSchema,ProductsUncheckedUpdateInputSchema ]),
}).strict() 

export const ProductsCreateManyArgsSchema: z.ZodType<Prisma.ProductsCreateManyArgs> = z.object({
  data: ProductsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const ProductsDeleteArgsSchema: z.ZodType<Prisma.ProductsDeleteArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  where: ProductsWhereUniqueInputSchema,
}).strict() 

export const ProductsUpdateArgsSchema: z.ZodType<Prisma.ProductsUpdateArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  data: z.union([ ProductsUpdateInputSchema,ProductsUncheckedUpdateInputSchema ]),
  where: ProductsWhereUniqueInputSchema,
}).strict() 

export const ProductsUpdateManyArgsSchema: z.ZodType<Prisma.ProductsUpdateManyArgs> = z.object({
  data: z.union([ ProductsUpdateManyMutationInputSchema,ProductsUncheckedUpdateManyInputSchema ]),
  where: ProductsWhereInputSchema.optional(),
}).strict() 

export const ProductsDeleteManyArgsSchema: z.ZodType<Prisma.ProductsDeleteManyArgs> = z.object({
  where: ProductsWhereInputSchema.optional(),
}).strict() 

export const ProductsesCreateArgsSchema: z.ZodType<Prisma.ProductsesCreateArgs> = z.object({
  select: ProductsesSelectSchema.optional(),
  data: z.union([ ProductsesCreateInputSchema,ProductsesUncheckedCreateInputSchema ]),
}).strict() 

export const ProductsesUpsertArgsSchema: z.ZodType<Prisma.ProductsesUpsertArgs> = z.object({
  select: ProductsesSelectSchema.optional(),
  where: ProductsesWhereUniqueInputSchema,
  create: z.union([ ProductsesCreateInputSchema,ProductsesUncheckedCreateInputSchema ]),
  update: z.union([ ProductsesUpdateInputSchema,ProductsesUncheckedUpdateInputSchema ]),
}).strict() 

export const ProductsesCreateManyArgsSchema: z.ZodType<Prisma.ProductsesCreateManyArgs> = z.object({
  data: ProductsesCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const ProductsesDeleteArgsSchema: z.ZodType<Prisma.ProductsesDeleteArgs> = z.object({
  select: ProductsesSelectSchema.optional(),
  where: ProductsesWhereUniqueInputSchema,
}).strict() 

export const ProductsesUpdateArgsSchema: z.ZodType<Prisma.ProductsesUpdateArgs> = z.object({
  select: ProductsesSelectSchema.optional(),
  data: z.union([ ProductsesUpdateInputSchema,ProductsesUncheckedUpdateInputSchema ]),
  where: ProductsesWhereUniqueInputSchema,
}).strict() 

export const ProductsesUpdateManyArgsSchema: z.ZodType<Prisma.ProductsesUpdateManyArgs> = z.object({
  data: z.union([ ProductsesUpdateManyMutationInputSchema,ProductsesUncheckedUpdateManyInputSchema ]),
  where: ProductsesWhereInputSchema.optional(),
}).strict() 

export const ProductsesDeleteManyArgsSchema: z.ZodType<Prisma.ProductsesDeleteManyArgs> = z.object({
  where: ProductsesWhereInputSchema.optional(),
}).strict() 

export const ProductssCreateArgsSchema: z.ZodType<Prisma.ProductssCreateArgs> = z.object({
  select: ProductssSelectSchema.optional(),
  data: z.union([ ProductssCreateInputSchema,ProductssUncheckedCreateInputSchema ]),
}).strict() 

export const ProductssUpsertArgsSchema: z.ZodType<Prisma.ProductssUpsertArgs> = z.object({
  select: ProductssSelectSchema.optional(),
  where: ProductssWhereUniqueInputSchema,
  create: z.union([ ProductssCreateInputSchema,ProductssUncheckedCreateInputSchema ]),
  update: z.union([ ProductssUpdateInputSchema,ProductssUncheckedUpdateInputSchema ]),
}).strict() 

export const ProductssCreateManyArgsSchema: z.ZodType<Prisma.ProductssCreateManyArgs> = z.object({
  data: ProductssCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const ProductssDeleteArgsSchema: z.ZodType<Prisma.ProductssDeleteArgs> = z.object({
  select: ProductssSelectSchema.optional(),
  where: ProductssWhereUniqueInputSchema,
}).strict() 

export const ProductssUpdateArgsSchema: z.ZodType<Prisma.ProductssUpdateArgs> = z.object({
  select: ProductssSelectSchema.optional(),
  data: z.union([ ProductssUpdateInputSchema,ProductssUncheckedUpdateInputSchema ]),
  where: ProductssWhereUniqueInputSchema,
}).strict() 

export const ProductssUpdateManyArgsSchema: z.ZodType<Prisma.ProductssUpdateManyArgs> = z.object({
  data: z.union([ ProductssUpdateManyMutationInputSchema,ProductssUncheckedUpdateManyInputSchema ]),
  where: ProductssWhereInputSchema.optional(),
}).strict() 

export const ProductssDeleteManyArgsSchema: z.ZodType<Prisma.ProductssDeleteManyArgs> = z.object({
  where: ProductssWhereInputSchema.optional(),
}).strict() 

interface ItemsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ItemsArgs
  readonly type: Omit<Prisma.ItemsGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface ProductGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ProductArgs
  readonly type: Omit<Prisma.ProductGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface ProductsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ProductsArgs
  readonly type: Omit<Prisma.ProductsGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface ProductsesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ProductsesArgs
  readonly type: Omit<Prisma.ProductsesGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface ProductssGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ProductssArgs
  readonly type: Omit<Prisma.ProductssGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

export const tableSchemas = {
  items: {
    fields: new Map([
      [
        "value",
        "TEXT"
      ]
    ]),
    relations: [
    ],
    modelSchema: (ItemsCreateInputSchema as any)
      .partial()
      .or((ItemsUncheckedCreateInputSchema as any).partial()),
    createSchema: ItemsCreateArgsSchema,
    createManySchema: ItemsCreateManyArgsSchema,
    findUniqueSchema: ItemsFindUniqueArgsSchema,
    findSchema: ItemsFindFirstArgsSchema,
    updateSchema: ItemsUpdateArgsSchema,
    updateManySchema: ItemsUpdateManyArgsSchema,
    upsertSchema: ItemsUpsertArgsSchema,
    deleteSchema: ItemsDeleteArgsSchema,
    deleteManySchema: ItemsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ItemsUncheckedCreateInputSchema>,
    Prisma.ItemsCreateArgs['data'],
    Prisma.ItemsUpdateArgs['data'],
    Prisma.ItemsFindFirstArgs['select'],
    Prisma.ItemsFindFirstArgs['where'],
    Prisma.ItemsFindUniqueArgs['where'],
    never,
    Prisma.ItemsFindFirstArgs['orderBy'],
    Prisma.ItemsScalarFieldEnum,
    ItemsGetPayload
  >,
  product: {
    fields: new Map([
      [
        "name",
        "VARCHAR"
      ],
      [
        "isActive",
        "BOOL"
      ],
      [
        "createdAt",
        "TIMESTAMPTZ"
      ],
      [
        "updatedAt",
        "TIMESTAMPTZ"
      ],
      [
        "deletedAt",
        "TIMESTAMP"
      ],
      [
        "description",
        "VARCHAR"
      ],
      [
        "price",
        "INT4"
      ],
      [
        "image",
        "TEXT"
      ],
      [
        "id",
        "INT4"
      ]
    ]),
    relations: [
    ],
    modelSchema: (ProductCreateInputSchema as any)
      .partial()
      .or((ProductUncheckedCreateInputSchema as any).partial()),
    createSchema: ProductCreateArgsSchema,
    createManySchema: ProductCreateManyArgsSchema,
    findUniqueSchema: ProductFindUniqueArgsSchema,
    findSchema: ProductFindFirstArgsSchema,
    updateSchema: ProductUpdateArgsSchema,
    updateManySchema: ProductUpdateManyArgsSchema,
    upsertSchema: ProductUpsertArgsSchema,
    deleteSchema: ProductDeleteArgsSchema,
    deleteManySchema: ProductDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ProductUncheckedCreateInputSchema>,
    Prisma.ProductCreateArgs['data'],
    Prisma.ProductUpdateArgs['data'],
    Prisma.ProductFindFirstArgs['select'],
    Prisma.ProductFindFirstArgs['where'],
    Prisma.ProductFindUniqueArgs['where'],
    never,
    Prisma.ProductFindFirstArgs['orderBy'],
    Prisma.ProductScalarFieldEnum,
    ProductGetPayload
  >,
  products: {
    fields: new Map([
      [
        "value",
        "TEXT"
      ]
    ]),
    relations: [
    ],
    modelSchema: (ProductsCreateInputSchema as any)
      .partial()
      .or((ProductsUncheckedCreateInputSchema as any).partial()),
    createSchema: ProductsCreateArgsSchema,
    createManySchema: ProductsCreateManyArgsSchema,
    findUniqueSchema: ProductsFindUniqueArgsSchema,
    findSchema: ProductsFindFirstArgsSchema,
    updateSchema: ProductsUpdateArgsSchema,
    updateManySchema: ProductsUpdateManyArgsSchema,
    upsertSchema: ProductsUpsertArgsSchema,
    deleteSchema: ProductsDeleteArgsSchema,
    deleteManySchema: ProductsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ProductsUncheckedCreateInputSchema>,
    Prisma.ProductsCreateArgs['data'],
    Prisma.ProductsUpdateArgs['data'],
    Prisma.ProductsFindFirstArgs['select'],
    Prisma.ProductsFindFirstArgs['where'],
    Prisma.ProductsFindUniqueArgs['where'],
    never,
    Prisma.ProductsFindFirstArgs['orderBy'],
    Prisma.ProductsScalarFieldEnum,
    ProductsGetPayload
  >,
  productses: {
    fields: new Map([
      [
        "value",
        "TEXT"
      ]
    ]),
    relations: [
    ],
    modelSchema: (ProductsesCreateInputSchema as any)
      .partial()
      .or((ProductsesUncheckedCreateInputSchema as any).partial()),
    createSchema: ProductsesCreateArgsSchema,
    createManySchema: ProductsesCreateManyArgsSchema,
    findUniqueSchema: ProductsesFindUniqueArgsSchema,
    findSchema: ProductsesFindFirstArgsSchema,
    updateSchema: ProductsesUpdateArgsSchema,
    updateManySchema: ProductsesUpdateManyArgsSchema,
    upsertSchema: ProductsesUpsertArgsSchema,
    deleteSchema: ProductsesDeleteArgsSchema,
    deleteManySchema: ProductsesDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ProductsesUncheckedCreateInputSchema>,
    Prisma.ProductsesCreateArgs['data'],
    Prisma.ProductsesUpdateArgs['data'],
    Prisma.ProductsesFindFirstArgs['select'],
    Prisma.ProductsesFindFirstArgs['where'],
    Prisma.ProductsesFindUniqueArgs['where'],
    never,
    Prisma.ProductsesFindFirstArgs['orderBy'],
    Prisma.ProductsesScalarFieldEnum,
    ProductsesGetPayload
  >,
  productss: {
    fields: new Map([
      [
        "value",
        "TEXT"
      ]
    ]),
    relations: [
    ],
    modelSchema: (ProductssCreateInputSchema as any)
      .partial()
      .or((ProductssUncheckedCreateInputSchema as any).partial()),
    createSchema: ProductssCreateArgsSchema,
    createManySchema: ProductssCreateManyArgsSchema,
    findUniqueSchema: ProductssFindUniqueArgsSchema,
    findSchema: ProductssFindFirstArgsSchema,
    updateSchema: ProductssUpdateArgsSchema,
    updateManySchema: ProductssUpdateManyArgsSchema,
    upsertSchema: ProductssUpsertArgsSchema,
    deleteSchema: ProductssDeleteArgsSchema,
    deleteManySchema: ProductssDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ProductssUncheckedCreateInputSchema>,
    Prisma.ProductssCreateArgs['data'],
    Prisma.ProductssUpdateArgs['data'],
    Prisma.ProductssFindFirstArgs['select'],
    Prisma.ProductssFindFirstArgs['where'],
    Prisma.ProductssFindUniqueArgs['where'],
    never,
    Prisma.ProductssFindFirstArgs['orderBy'],
    Prisma.ProductssScalarFieldEnum,
    ProductssGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
