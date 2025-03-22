import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class CustomersService {
    constructor(private prisma: PrismaService) { }

    async createCustomer(data: { name: string, email: string, phone?: string }) {
        return this.prisma.customer.create({ data })
    }

    async getCustomer() {
        return this.prisma.customer.findMany();
    }
}
