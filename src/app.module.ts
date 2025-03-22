import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [CustomersModule, AuthModule, ConfigModule.forRoot(), ProductsModule, OrdersModule, InvoicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
