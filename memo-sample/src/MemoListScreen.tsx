import React from 'react'
import { 
    SafeAreaView, 
    StyleSheet, 
    StyleProp,
    ViewStyle,
    FlatList,
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
import * as fns from 'date-fns'


const memos = [
    {
        text: 'メモテスト',
        createdAt: new Date().getTime()
    }
]

export const MemoListScreen: React.FC = () => {
    const theme = useTheme()
    const nav = useNavigation()

    const onAddMemo = () => {
        nav.navigate("Compose")
    }

    const container: StyleProp<ViewStyle> = {
        flex: 1,
        backgroundColor: theme.colors.background,
    }
   
    return (
        <SafeAreaView style={container}>
            <FlatList 
                style={{ flex: 1 }} 
                data={memos} 
                keyExtractor={item => `${item.createdAt}`}
                renderItem={({item}) => (
                    <List.Item title={item.text}
                        titleNumberOfLines={2}
                        style={{ backgroundColor: "purple" }}
                        descriptionStyle={{ textAlign: 'right' }}
                        description={`作成日時: ${fns.format(item.createdAt, 'yyy.MM.dd HH:mm')}`} />
                )}
            ></FlatList>
            <FAB style={{ position: 'absolute', right: 32, bottom: 32, borderRadius: 100 }} 
                icon="plus" onPress={onAddMemo}
            />
        </SafeAreaView>
    )
}