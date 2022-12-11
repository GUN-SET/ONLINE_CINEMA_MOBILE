import {FC, useRef} from 'react'
import {Animated} from 'react-native'

import MovieBackground from '@/components/screens/movie/MovieBackground'
import MovieContent from '@/components/screens/movie/MovieContent/MovieContent'
import MovieHeader from '@/components/screens/movie/MovieHeader'
import {useMovie} from '@/components/screens/movie/useMovie'
import {useUpdateCountOpened} from '@/components/screens/movie/useUpdateCountOpened'
import {Layout, Loader} from '@/components/ui'

const Movie: FC = () => {
	const y = useRef(new Animated.Value(0)).current

	const {isLoading, movie} = useMovie()
	useUpdateCountOpened()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{paddingTop: 0}}>
			<MovieHeader movie={movie} y={y} />
			<MovieBackground movie={movie} y={y} />
			<MovieContent movie={movie} y={y} />
		</Layout>
	)
}

export default Movie
