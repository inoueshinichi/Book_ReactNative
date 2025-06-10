
import React, {
    useState,
    useReducer,
    useEffect,
    useLayoutEffect,
    useCallback,
    useMemo,
    memo,
    useRef,
    forwardRef,
    useImperativeHandle,
    useDebugValue,
    useDeferredValue,
    useTransition,
    useContext,
    useSyncExternalStore,
    useId,
    useActionState,
    useInsertionEffect,
    useOptimistic,
} from 'react'

import {
    Text,
    StyleSheet,
    Platform,
    View,
    Button,
} from 'react-native'


export const Clock = () => {
    const [date, setDate] = useState(() => new Date())

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timerID)
        }
    }, [])

    return (
        <View>
            <Text>現在時刻</Text>
            <Text>{date.toLocaleTimeString()}</Text>
        </View>
    )
}


// カスタムフック
const useClock = () => {
    const [date, setDate] = useState(() => new Date())

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timerID)
        }
    }, [])

    return date
}

export const ClockWithCustomHooks = () => {
    const date = useClock()

    return (
        <View>
            <Text>現在時刻(カスタム)</Text>
            <Text>{date.toLocaleTimeString()}</Text>
        </View>
    )
}