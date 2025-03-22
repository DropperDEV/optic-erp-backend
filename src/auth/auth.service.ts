import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async register(name: string, email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10)
        return this.prisma.user.create({
            data: { name, email, password: hashedPassword }
        })
    }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
          throw new Error('Invalid credentials');
        }

        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
          }
          
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });
        return { token };
    }
}
