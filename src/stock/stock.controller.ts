import { Body, Controller, Get, Post } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
    constructor(private stockService: StockService) { }

    @Post()
    updateStock(@Body() data: { productId: string, quantity: number }) {
        return this.stockService.updateStock(data)
    }

    @Get()
    getAllStock() {
        return this.stockService.getAllStock();
    }
}
