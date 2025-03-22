import { Body, Controller, Get, Post } from '@nestjs/common';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
    constructor(private invoiceService: InvoicesService) { }

    @Post()
    createInvoice(@Body() data: { orderId: string; amount: number; dueDate: Date }) {
        return this.invoiceService.createInvoice(data);
    }
    @Get()
    getAllInvoices() {
        return this.invoiceService.getAllInvoices();
    }
}
