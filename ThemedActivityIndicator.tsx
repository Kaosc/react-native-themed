// @ts-nocheck

import { memo } from "react"
import { ActivityIndicator, ActivityIndicatorProps } from "react-native"
import { useSelector } from "react-redux"

function ThemedActivityIndicator(props: ActivityIndicatorProps) {
	const darkMode = useSelector((state: RootState) => state.settings.darkMode)

	return (
		<ActivityIndicator
			{...props}
			color={props?.color ? props.color : darkMode ? "#fff" : "#000"}
		/>
	)
}

export default memo(ThemedActivityIndicator)
