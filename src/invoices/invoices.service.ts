import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class InvoicesService {
    constructor(private prisma: PrismaService) { }

    async createInvoice(data: { orderId: string; amount: number; dueDate: Date }) {
        return this.prisma.invoice.create({ data })
    }

    async getAllInvoices() {
        return this.prisma.invoice.findMany({ include: { order: true } })
    }
}
