import {FC} from 'react'

import {AdminNavigation, AdminTable, Layout} from '@/components/ui'
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader'

import {useGenres} from './useGenres'

const GenreList: FC = () => {
	const {control, isLoading, data, deleteAsync, createAsync} = useGenres()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Genres' />
			<AdminHeader control={control} onPress={createAsync} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Name', 'Slug']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default GenreList
