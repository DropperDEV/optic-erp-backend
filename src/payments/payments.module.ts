import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports:[PrismaService],
  providers: [PaymentsService],
  controllers: [PaymentsController]
})
export class PaymentsModule {}
