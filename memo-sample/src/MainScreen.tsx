import React from 'react'
import { 
    SafeAreaView, 
    StyleSheet, 
    StyleProp,
    ViewStyle,
} from 'react-native'
import { 
    useNavigation,
} from "@react-navigation/native"
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



// Paparコレクション(MD3)
import { PaperTextScreen } from './PaperTextScreen'

export const MainScreen: React.FC = () => {
    const theme = useTheme()
    const nav = useNavigation()

    const container: StyleProp<ViewStyle> = {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    }
   
    return (
        <SafeAreaView style={container}>
            <Text variant="titleLarge">これはメイン画面です</Text>
            <Button mode="contained" style={{ marginVertical: 10}} onPress={() => nav.navigate('MemoList')}>
                To Memo Screen
            </Button>
            <Button mode="contained" style={{ marginVertical: 10}} onPress={() => nav.navigate('PaperText')}>
                To MD3 Text
            </Button>
        </SafeAreaView>
    )
}

