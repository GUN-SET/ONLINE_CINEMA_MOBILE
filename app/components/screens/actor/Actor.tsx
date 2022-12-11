import {FC} from 'react'

import {useActor} from '@/components/screens/actor/useActor'
import {Layout, Loader} from '@/components/ui'
import NotFound from '@/components/ui/NotFound'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

const Actor: FC = () => {
	const {movies, isLoading, actor} = useActor()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{actor ? (
				<MovieCatalog title={actor.name} movies={movies || []} isBackButton />
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Actor
