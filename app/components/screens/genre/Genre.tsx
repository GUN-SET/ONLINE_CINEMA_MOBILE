import {FC} from 'react'

import {Layout, Loader} from '@/components/ui'
import NotFound from '@/components/ui/NotFound'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

import {useGenre} from './useGenre'

const Genre: FC = () => {
	const {movies, isLoading, genre} = useGenre()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{genre ? (
				<MovieCatalog
					title={genre.name}
					movies={movies || []}
					description={genre.description}
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Genre
