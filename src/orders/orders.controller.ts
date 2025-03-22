import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService) { }

    @Post()
    createOrder(@Body() data: { customerId: string, totalAmount: number }) {
        return this.orderService.createOrder(data)
    }

    @Get()
    getAllOrders(){
        return this.orderService.getAllOrders()
    }
}
