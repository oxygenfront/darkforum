import { useMediaQuery } from '@/pages/Chat/hooks'
import { trimmingText } from '@/shared/lib'
import type { IChat } from '@/shared/types'
import type { FC } from 'react'
import { CiChat1 } from 'react-icons/ci'
import { FiMessageSquare } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styles from './chat-link.module.sass'
type IChatLinkProps = Pick<IChat, 'id' | 'title' | 'usersCount' | 'messagesCount'>

export const ChatLink: FC<IChatLinkProps> = ({ messagesCount, usersCount, title, id }) => {
	const { isMobile } = useMediaQuery({
		desktopWidth: 1200,
		mobileWidth: 670,
		tabletWidth: 0,
	})
	const { isDesktop } = useMediaQuery({
		desktopWidth: 340,
		mobileWidth: 860,
		tabletWidth: 0,
	})
	return (
		<Link
			to={`${id}`}
			className={styles.chat__item}
		>
			<div className={styles.chat__item_left}>
				<CiChat1 />
				<span>{isDesktop ? trimmingText(title, 10) : title}</span>
			</div>
			<div className={styles.chat__item_center}>
				<span>
					{isMobile ? <FiMessageSquare /> : 'Сообщений'}
					<span className={styles.chat__item_count}>{messagesCount}</span>
				</span>
				<span className={styles.hr} />
				<span>
					{isMobile ? <FiUsers /> : 'Пользователей'} <span className={styles.chat__item_count}>{usersCount}</span>
				</span>
			</div>
			<div className={styles.chat__item_right}>
				<div>Нет сообщений</div>
			</div>
		</Link>
	)
}
