import {FC} from 'react'

import {Layout, Loader} from '@/components/ui'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

import {useFavorites} from './useFavorites'

const Favorites: FC = () => {
	const {favoriteMovies, isLoading} = useFavorites()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			<MovieCatalog title='Favorites' movies={favoriteMovies} />
		</Layout>
	)
}

export default Favorites
