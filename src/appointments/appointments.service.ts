import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AppointmentsService {
    constructor(private prisma: PrismaService) {}

    async createAppointment(data: { customerId: string; date: Date }) {
      return this.prisma.appointment.create({ data });
    }
  
    async getAllAppointments() {
      return this.prisma.appointment.findMany({ include: { customer: true } });
    }
}
