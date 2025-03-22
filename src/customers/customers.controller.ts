import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customerService: CustomersService) { }

    @Post()
    create(@Body() data: { name: string, email: string, phone?: string }) {
        return this.customerService.createCustomer(data);
    }

    @Get()
    findAll() {
        return this.customerService.getCustomer()
    }
}
