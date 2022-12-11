import {FC} from 'react'
import {View} from 'react-native'

import {Heading} from '@/components/ui/index'

const NotFound: FC = () => {
	return (
		<View>
			<Heading title='404 - Page Not Found' />
		</View>
	)
}

export default NotFound
