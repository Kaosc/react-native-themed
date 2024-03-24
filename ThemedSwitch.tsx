import { memo } from "react"
import { StyleProp, StyleSheet, Switch, ViewStyle } from "react-native"

function ThemedSwitch({
	label,
	value,
	onChange,
	disabled,
	style,
	darkMode,
}: {
	label?: string
	value: boolean
	onChange: () => void
	disabled?: boolean
	style?: StyleProp<ViewStyle>
	darkMode?: boolean
}) {
	return (
		<Switch
			accessibilityRole="switch"
			accessibilityLabel={label ? label : ""}
			accessibilityState={{ checked: value }}
			disabled={disabled}
			style={[styles.switch, style]}
			trackColor={{
				false: darkMode ? "#333333" : "#a3a3a3c7",
				true: darkMode ? "#9b9b9ba9" : "#7c7c7cc7",
			}}
			thumbColor={value ? (darkMode ? "#c2c2c2" : "#424242ff") : darkMode ? "#5e5e5e" : "#a3a3a3ff"}
			onChange={onChange}
			value={value}
		/>
	)
}

const styles = StyleSheet.create({
	switch: {
		transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
	},
})

export default memo(ThemedSwitch)
