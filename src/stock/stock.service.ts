import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class StockService {
    constructor(private prisma: PrismaService) { }

    async updateStock(data: { productId: string, quantity: number }) {
        return this.prisma.stock.upsert({
            where: { productId: data.productId },
            update: { quantity: data.quantity },
            create: data
        })
    }

    async getAllStock() {
        this.prisma.stock.findMany()
    }
}
