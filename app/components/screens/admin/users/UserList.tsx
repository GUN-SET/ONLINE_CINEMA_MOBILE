import {FC} from 'react'

import {AdminNavigation, AdminTable, Layout} from '@/components/ui'
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader'

import {useUsers} from './useUsers'

const UserList: FC = () => {
	const {control, isLoading, data, deleteAsync} = useUsers()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Users' />
			<AdminHeader control={control} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Email', 'Date register']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default UserList
