import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { InvoicesModule } from './invoices/invoices.module';
import { PaymentsModule } from './payments/payments.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [CustomersModule, AuthModule, ConfigModule.forRoot(), ProductsModule, OrdersModule, InvoicesModule, PaymentsModule, PaymentsModule, AppointmentsModule, StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
