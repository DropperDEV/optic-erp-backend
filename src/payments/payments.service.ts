import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PaymentsService {
    constructor(private prisma: PrismaService) { }

    async createPayment(data: { invoiceId: string; amount: number; method: string }) {
        return this.prisma.payment.create({ data });
    }

    async getAllPayments() {
        return this.prisma.payment.findMany({ include: { invoice: true } });
    }
}
