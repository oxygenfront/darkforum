import { GET_CHAPTERS, rootApi } from '@/shared/api'
import { ApiTag } from '@/shared/api/utils/constants'
import type { IChapter } from '@/shared/model'

export const chaptersApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		getChapters: builder.query<IChapter[], void>({
			query: () => `${GET_CHAPTERS}`,
			providesTags: [ApiTag.CHAPTERS],
		}),
	}),
})

export const { useGetChaptersQuery } = chaptersApi
