import * as React from 'react'
import {
    useState,
    useReducer,
    useEffect,
    useLayoutEffect,
    useContext,
    useMemo,
    useCallback,
    memo,
    useRef,
    forwardRef,
    useImperativeHandle,
    useTransition,
    useDeferredValue,
    useDebugValue,
    useSyncExternalStore,
    useId,
    useActionState,
    useInsertionEffect,
    useOptimistic,
} from 'react'
import { 
    useNavigation,
} from "@react-navigation/native"
import { 
    View,
    SafeAreaView, 
    StyleSheet, 
    StyleProp,
    ViewStyle,
    KeyboardAvoidingView,
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


export const ComposeScreen: React.FC = () => {
    const theme = useTheme()

    const [text, setText] = useState<string>('')

    const onPressSave = () => {
        // TODO 保存処理
    }

    const container: StyleProp<ViewStyle> = {
        flex: 1,
        padding: 16,
        backgroundColor: theme.colors.background,
    }

    return (
        <KeyboardAvoidingView style={container}>
            <TextInput style={{ marginBottom: 16 }}
                mode="outlined"
                placeholder="Please write memo"
                multiline
                onChangeText={(text) => setText(text)}>
            </TextInput>
            <Button
                mode="contained"
                onPress={onPressSave}>
                保存
            </Button>
        </KeyboardAvoidingView>
    )
}