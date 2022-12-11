import {FC} from 'react'
import {View} from 'react-native'

import {Field, Heading, Layout, Loader} from '@/components/ui'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

import {ISearchFormData} from './search.interface'
import {useSearch} from './useSearch'

const Search: FC = () => {
	const {searchTerm, movies, isLoading, control} = useSearch()

	return (
		<Layout isHasPadding>
			<Heading title='Search' />
			<View className='mt-3'>
				<Field<ISearchFormData>
					control={control}
					name='searchTerm'
					placeholder='Type something...'
					keyboardType='web-search'
				/>
			</View>
			{!!searchTerm ? (
				<View className='mt-3'>
					{isLoading ? <Loader /> : <MovieCatalog title='' movies={movies} />}
				</View>
			) : null}
		</Layout>
	)
}

export default Search
