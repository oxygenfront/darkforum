import { BlockContainer } from '@/shared/ui/BlockContainer'
import { ReviewItem } from '@/shared/ui/ReviewItem'
import type { FC } from 'react'
import styles from './purchased-block.module.sass'
export const PurchasedBlock: FC = () => {
	return (
		<BlockContainer
			mod='purchased'
			title='Последние покупки'
			modalTitles={['Новости', 'Недельные новости', 'Новости', 'Недельные новости', 'Новости']}
		>
			<div className={styles.block__bottom}>
				<ReviewItem />
				<ReviewItem />
				<ReviewItem />
				<ReviewItem />
			</div>
		</BlockContainer>
	)
}
