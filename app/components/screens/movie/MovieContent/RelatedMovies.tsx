import {FC} from 'react'
import {ListRenderItemInfo, Text, View} from 'react-native'

import {useRelatedMovies} from '@/components/screens/movie/MovieContent/useRelatedMovies'
import {Loader} from '@/components/ui'
import HorizontalList from '@/components/ui/HorizontalList'
import MovieItem from '@/components/ui/movie/movie-item/MovieItem'

import {IMovie} from '@/shared/types/movie.interface'

interface IRelatedMovies {
	genreIds: string[]
	currentMovieId: string
}

const RelatedMovies: FC<IRelatedMovies> = ({currentMovieId, genreIds}) => {
	const {data, isLoading} = useRelatedMovies(genreIds, currentMovieId)

	if (isLoading) return <Loader />
	if (!data?.length) return null

	return (
		<View className='my-8'>
			<Text className='text-white text-2xl font-semibold mb-5'>
				RelatedMovies
			</Text>
			<HorizontalList
				snapToInterval={160}
				data={data}
				// @ts-ignore
				renderItem={({item: movie, index}: ListRenderItemInfo<IMovie>) => (
					<MovieItem
						key={movie._id}
						movie={movie}
						index={index}
						style={{
							marginRight: 16,
							width: 144
						}}
					/>
				)}
			/>
		</View>
	)
}

export default RelatedMovies
