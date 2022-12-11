import {ComponentType} from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Trending: undefined
	Search: undefined
	Favorites: undefined
	Profile: undefined
	Screen404: undefined
	Movie: {
		slug: string
	}
	Genre: {
		slug: string
	}
	Actor: {
		slug: string
	}
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
	MovieEdit: {
		id: string
	}
	MovieList: undefined
	GenreEdit: {
		id: string
	}
	GenreList: undefined
	ActorEdit: {
		id: string
	}
	ActorList: undefined
	UserEdit: {
		id: string
	}
	UserList: undefined
	Admin: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	isAdmin?: boolean
}
