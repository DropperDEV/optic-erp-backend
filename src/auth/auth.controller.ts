import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register(@Body() data: { name: string, email: string, password: string }) {
        return this.authService.register(data.name, data.email, data.password)
    }
    @Post('login')
    login(@Body() data: { name: string, email: string, password: string }) {
        return this.authService.login(data.name, data.password)
    }
}
