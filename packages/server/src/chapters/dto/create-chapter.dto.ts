import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateChapterDto {
	@ApiProperty()
	@IsNotEmpty()
	titleChapter: string
}
