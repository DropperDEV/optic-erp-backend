import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
    constructor(private paymentsService: PaymentsService) { }

    @Post()
    createPayment(@Body() body: { invoiceId: string; amount: number; method: string }) {
        return this.paymentsService.createPayment(body);
    }

    @Get()
    getAllPayments() {
        return this.paymentsService.getAllPayments();
    }
}
