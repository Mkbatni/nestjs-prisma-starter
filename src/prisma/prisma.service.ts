// Manages database connections automatically
// Ensures proper connection cleanup
// Can be injected into other services that need database access
// Provides a single point of database access throughout the application
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit(): Promise<void> {
    await (this.$connect as () => Promise<void>)();
  }

  async onModuleDestroy(): Promise<void> {
    await (this.$disconnect as () => Promise<void>)();
  }
}
