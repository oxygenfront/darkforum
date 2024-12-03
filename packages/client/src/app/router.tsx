import { BaseLayout as App } from '@/app/layout'
import { ChapterPage } from '@/pages/Chapter'
import { Profile } from '@/pages/Profile'
import { ThemePage } from '@/pages/Theme'
import { WarrantorPage } from '@/pages/Warrantor'
import { PATH } from '@/shared/constants'

import { ChaptersLinksBlock } from '@/widgets/ChaptersLinks'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter(
	[
		{
			path: PATH.BASE,
			element: <App />,
			children: [
				{
					path: PATH.BASE,
					element: <ChaptersLinksBlock />,
				},
				{
					path: PATH.WARRANTOR,
					element: <WarrantorPage />,
				},
				{
					path: PATH.CHAPTER,
					element: <ChapterPage />,
				},
				{
					path: PATH.THEME,
					element: <ThemePage />,
				},
				{
					path: PATH.PROFILE,
					element: <Profile />,
				},
			],
		},
	],
	{
		future: {
			v7_startTransition: false,
		},
	},
)
