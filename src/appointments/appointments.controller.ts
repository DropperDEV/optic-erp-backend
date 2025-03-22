import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
    constructor(private appointmentsService: AppointmentsService) { }

    @Post()
    createAppointment(@Body() body: { customerId: string; date: Date }) {
        return this.appointmentsService.createAppointment(body);
    }

    @Get()
    getAllAppointments() {
        return this.appointmentsService.getAllAppointments();
    }
}
