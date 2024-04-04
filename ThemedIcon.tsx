// @ts-nocheck

import { memo } from "react"
import { StyleProp, TextStyle } from "react-native"
import {
	MaterialCommunityIcons,
	// MaterialIcons,
	// FontAwesome6,
	// FontAwesome5,
} from "@expo/vector-icons"
import { useSelector } from "react-redux"

import { darkTheme, lightTheme } from "../../styles/Theme"

interface ThemedIconProps extends Omit<React.ComponentProps<typeof MaterialCommunityIcons>, "name"> {
	name: string
	size: number
	style?: StyleProp<TextStyle>
	color?: string
}

const iconComponents = {
	// leaderboard: MaterialIcons,
	// award: FontAwesome6,
	// trophy: FontAwesome5,
}

function ThemedIcon(props: ThemedIconProps) {
	const darkMode = useSelector((state: RootState) => state.settings.darkMode)
	const IconComponent = iconComponents[props?.name] || MaterialCommunityIcons

	return (
		<IconComponent
			{...props}
			name={props?.name}
			size={props?.size}
			style={[
				props?.style,
				darkMode ? darkTheme.icon : lightTheme.icon,
				{ color: props?.color || darkMode ? "#f1f1f1" : "#1f1f1f" },
			]}
		/>
	)
}

export default memo(ThemedIcon)
