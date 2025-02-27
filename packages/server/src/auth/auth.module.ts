import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { UsersModule } from '../users/users.module'
import { UsersService } from '../users/users.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AccessTokenStrategy } from './strategies/accessToken.strategy'
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy'

@Module({
	imports: [JwtModule.register({}), UsersModule],
	controllers: [AuthController],
	providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy, UsersService],
	exports: [AuthService, JwtModule],
})
export class AuthModule {}
