import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from 'generated/prisma';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      return await this.prisma.user.create({ data });
    } catch (error) {
      console.error('CREATE USER ERROR:', error);
      throw error;
    }
  }

  async findAll(): Promise<any[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<any | null> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(
    id: number,
    data: { name?: string; email?: string },
  ): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await this.prisma.user.delete({ where: { id } });
  }
}
