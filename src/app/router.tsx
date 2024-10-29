import { BaseLayout as App } from '@/app/layout'
import { ChapterPage } from '@/pages/Chapter/chapter'
import { WarrantorPage } from '@/pages/Warrantor'
import { PATH } from '@/shared/model'
// import { Profile } from '@/layout/Profile'
import { ChaptersBlock } from '@/widgets/ChaptersBlock'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: PATH.BASE,
		element: <App />,
		children: [
			{
				path: PATH.BASE,
				element: <ChaptersBlock />,
			},
			{
				path: PATH.WARRANTOR,
				element: <WarrantorPage />,
			},
			{
				path: PATH.CHAPTER,
				element: <ChapterPage />,
			},
			// {
			// 	path: PATH.THEME,
			// 	element: <ThemePage />,
			// },
		],
	},
])
