// @ts-nocheck

import { memo } from "react"
import { Text, TextProps } from "react-native"
import { useSelector } from "react-redux"

interface ThemedTextProps extends TextProps {
	text: string | number | JSX.Element
	color?: string
}

function ThemedText(props: ThemedTextProps) {
	const darkMode = useSelector((state: RootState) => state.settings.darkMode)

	return (
		<Text
			{...props}
			style={[
				{
					color: props?.color || darkMode ? "#e7e7e7" : "black",
				},
				props.style,
			]}
		>
			{props?.text}
		</Text>
	)
}

export default memo(ThemedText)
