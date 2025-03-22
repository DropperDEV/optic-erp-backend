import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrdersService {
    constructor(private prisma: PrismaService) { }

    async createOrder(data: { customerId: string, totalAmount: number }) {
        return this.prisma.order.create({ data })
    }

    async getAllOrders() {
        return this.prisma.order.findMany({ include: { customer: true } })
    }

}
