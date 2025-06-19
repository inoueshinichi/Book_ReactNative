import * as React from 'react'
import { 
    useNavigation,
} from "@react-navigation/native"
import { 
    SafeAreaView, 
    StyleSheet, 
    StyleProp,
    ViewStyle,
} from 'react-native'
import { 
    ActivityIndicator,
    Appbar,
    Avatar,
    Badge,
    Banner,
    BottomNavigation,
    Button,
    Card,
    Chip,
    DataTable,
    Dialog,
    Divider,
    Drawer,
    FAB,
    HelperText,
    IconButton,
    TouchableRipple,
    List,
    Menu,
    Modal,
    Portal,
    ProgressBar,
    Searchbar,
    Snackbar,
    Surface,
    Switch,
    TextInput,
    ToggleButton,
    Text,
    // 順次追加
} from 'react-native-paper'
import {
    useTheme,
} from 'react-native-paper'

export const PaperTextScreen: React.FC = () => {
    const theme = useTheme()
    const container: StyleProp<ViewStyle> = {
            flex: 1,
            backgroundColor: theme.colors.background,
            alignItems: 'center',
            justifyContent: 'center',
    }

    return (
        <SafeAreaView style={container}>
            <Text variant="displayLarge">Display Large</Text>
            <Text variant="displayMedium">Display Medium</Text>
            <Text variant="displaySmall">Display small</Text>

            <Text variant="headlineLarge">Headline Large</Text>
            <Text variant="headlineMedium">Headline Medium</Text>
            <Text variant="headlineSmall">Headline Small</Text>

            <Text variant="titleLarge">Title Large</Text>
            <Text variant="titleMedium">Title Medium</Text>
            <Text variant="titleSmall">Title Small</Text>

            <Text variant="bodyLarge">Body Large</Text>
            <Text variant="bodyMedium">Body Medium</Text>
            <Text variant="bodySmall">Body Small</Text>

            <Text variant="labelLarge">Label Large</Text>
            <Text variant="labelMedium">Label Medium</Text>
            <Text variant="labelSmall">Label Small</Text>
        </SafeAreaView>
    )
}