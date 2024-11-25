import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { CreateThemeDto } from './dto/create-theme.dto'
import { UpdateThemeDto } from './dto/update-theme.dto'

@Injectable()
export class ThemeService {
	constructor(private readonly prisma: PrismaService) {}
	create(createThemeDto: CreateThemeDto) {
		return this.prisma.theme.create({
			data: {
				...createThemeDto,
				themeMessages: {
					create: createThemeDto.themeMessages,
				},
			},
		})
	}

	findAll() {
		return this.prisma.theme.findMany()
	}

	async findOne(id: string) {
		const responseTheme = await this.prisma.theme.findFirst({
			where: { id },
			include: {
				themeMessages: {
					orderBy: { createdAt: 'asc' },
					include: {
						user: {
							select: {
								id: true,
								userLogin: true,
								userImage: true,
							},
						},
					},
				},
				user: {
					select: {
						id: true,
						userLogin: true,
						userImage: true,
					},
				},
			},
		})
		const countThemeMessages = responseTheme.themeMessages.length
		return { ...responseTheme, countThemeMessages }
	}

	update(currentThemeId: string, updateThemeDto: UpdateThemeDto) {
		return this.prisma.theme.update({
			where: { id: currentThemeId },
			data: {
				titleTheme: updateThemeDto.titleTheme,
				isPrivate: updateThemeDto.isPrivate,
			},
		})
	}

	remove(id: string) {
		return this.prisma.theme.delete({
			where: { id },
		})
	}
}
