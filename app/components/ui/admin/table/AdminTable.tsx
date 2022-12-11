import {FC} from 'react'
import {ScrollView, Text, View} from 'react-native'

import {Loader} from '@/components/ui'
import AdminTableItem from '@/components/ui/admin/table/AdminTableItem'
import {IAdminTable} from '@/components/ui/admin/table/admin-table.interface'

import AdminTableHeader from './AdminTableHeader'

const AdminTable: FC<IAdminTable> = ({
	tableItems = [],
	headerItems,
	isLoading,
	removeHandler
}) => {
	return (
		<ScrollView showsHorizontalScrollIndicator={false} horizontal>
			<View className='pb-6'>
				<AdminTableHeader headerItems={headerItems} />
				{isLoading ? (
					<Loader />
				) : tableItems?.length ? (
					<ScrollView showsVerticalScrollIndicator={false}>
						{tableItems.map(tableItem => (
							<AdminTableItem
								key={tableItem._id}
								removeHandler={() => removeHandler(tableItem._id)}
								tableItem={tableItem}
							/>
						))}
					</ScrollView>
				) : (
					<Text className='text-white text-lg'>Elements not found</Text>
				)}
			</View>
		</ScrollView>
	)
}

export default AdminTable
