import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [StockService],
  controllers: [StockController]
})
export class StockModule {}
