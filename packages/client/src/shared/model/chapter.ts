import { IMessage } from '@/shared/model'
import { ITheme } from '@/shared/model'

export interface IChapter {
	id: string
	chapterTitle: string
	countThemes: number
	countMessages: number
	latestMessage: IMessage
	chapterThemes: ITheme[]
}
