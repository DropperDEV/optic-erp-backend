import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductCategory } from '@prisma/client';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Post()
    createProduct(@Body() data: { name: string, description?: string, price: number, stock: number,category: ProductCategory }) {
        return this.productService.createProduct(data)
    }

    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }
}
