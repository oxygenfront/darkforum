import { baseQueryFunction } from '@/shared/api/utils/baseQuery'
import { ApiTag, SliceName } from '@/shared/api/utils/constants'
import { createApi } from '@reduxjs/toolkit/query/react'

export const rootApi = createApi({
	reducerPath: SliceName.rootApi,
	baseQuery: baseQueryFunction,
	tagTypes: [ApiTag.AUTH],
	endpoints: () => ({}),
})
