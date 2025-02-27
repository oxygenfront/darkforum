import { ROLES } from '@/shared/constants'
import type { IInitialState, TPayload } from '@/shared/types'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IInitialState = {
	login: {
		userEmail: '',
		userPassword: '',
	},
	register: {
		userLogin: '',
		userEmail: '',
		userPassword: '',
		userConfirmPassword: '',
		role: ROLES.USER,
	},
	forgot: {
		userEmail: '',
	},
}

export const formsDataSlice = createSlice({
	name: 'formsData',
	initialState,
	reducers: {
		changeData: (state, action: PayloadAction<TPayload>) => {
			const { type, payload } = action.payload

			switch (type) {
				case 'login':
					state.login = { ...state.login, ...payload }
					break
				case 'register':
					state.register = { ...state.register, ...payload }
					break
				case 'forgot':
					state.forgot = { ...state.forgot, ...payload }
					break
				default:
					break
			}
		},
		clearReplyData: (state) => {
			state.login = initialState.login
			state.forgot = initialState.forgot
			state.register = initialState.register
		},
	},
})

export const { changeData, clearReplyData } = formsDataSlice.actions
