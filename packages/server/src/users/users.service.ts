import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}
	create(createUserDto: CreateUserDto) {
		return this.prisma.user.create({ data: createUserDto })
	}

	findAll() {
		return this.prisma.user.findMany()
	}

	findById(id: string) {
		return this.prisma.user.findFirst({ where: { id: id } })
	}

	findByEmail(userEmail: string) {
		return this.prisma.user.findFirst({ where: { userEmail: userEmail } })
	}

	update(id: string, updateUserDto: UpdateUserDto) {
		return this.prisma.user.updateMany({ where: { id: id }, data: updateUserDto })
	}

	remove(id: string) {
		return this.prisma.user.delete({ where: { id: id } })
	}
}
