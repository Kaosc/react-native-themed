// @ts-nocheck

import { memo } from "react"
import { StyleSheet, Switch, SwitchProps } from "react-native"
import { useSelector } from "react-redux"

function ThemedSwitch(props: SwitchProps) {
	const darkMode = useSelector((state: RootState) => state.settings.darkMode)

	return (
		<Switch
			accessibilityRole="switch"
			style={[styles.switch, props?.style]}
			trackColor={
				props?.trackColor || {
					false: darkMode ? "#333333" : "#a3a3a3c7",
					true: darkMode ? "#9b9b9ba9" : "#7c7c7cc7",
				}
			}
			thumbColor={props?.value ? (darkMode ? "#c2c2c2" : "#424242ff") : darkMode ? "#5e5e5e" : "#a3a3a3ff"}
		/>
	)
}

const styles = StyleSheet.create({
	switch: {
		transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
	},
})

export default memo(ThemedSwitch)
