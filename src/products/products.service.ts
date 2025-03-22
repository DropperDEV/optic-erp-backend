import { Injectable } from '@nestjs/common';
import { ProductCategory } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async createProduct(data: { name: string, description?: string, price: number, stock: number, category: ProductCategory }) {
        return this.prisma.product.create({ data });
    }

    async getAllProducts() {
        return this.prisma.product.findMany()
    }
}
