import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'

import {
    Headline,
    Title,
    Paragraph,
    Caption,
    Subheading,
    Button,
    Card,
    Avatar,
} from 'react-native-paper'


const styles = {
    typoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        paddingHorizontal: 15,
        marginTop: 30,
        borderWidth: 1,
    },
    
}

const TypographySample = () => {
    return (
        <View style={styles.typoContainer}>
            <Headline>Papaer紹介</Headline>
            <Title>タイトル</Title>
            <Subheading>Typography</Subheading>
            <Paragraph>｢春はあけぼの」</Paragraph>
            <Paragraph>春はあけぼの。やうやう白くなりゆく山ぎは、少しあかりて、紫だちたる雲のほそくたなびきたる。</Paragraph>
            <Caption>春は、夜がほのぼのと明け始める頃がいい。だんだん白んでいく山際が、少し明るくなって、紫がかった雲が細くたなびいているのが。</Caption>
            <Subheading>Button</Subheading>
            <Subheading>Card</Subheading>
        </View>
    )
}

const Buttons = () => {
    // コンポーネント内部にStyleSheetを含めることができる.
    const btnStyle = StyleSheet.create({
        btnContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            borderTopWidth: 1,
            marginTop: 20,
            paddingTop: 10,
            backgroundColor: "#bbb",
        },
        btnItem: {
            marginVertical: 10,
            borderRadius: 12
        }
    })

    return (
        <View style={btnStyle.btnContainer}>
            <Button style={btnStyle.btnItem} mode='text'>普通のボタン(mode=text)</Button>
            <Button style={btnStyle.btnItem} mode='contained'>Containedなボタン(mode=contained)</Button>
            <Button style={btnStyle.btnItem} icon='camera' mode='contained'>カメラボタン</Button>
            <Button style={btnStyle.btnItem} icon='camera' mode='outlined'>Outlinedなボタン</Button>
        </View>
    )
}


const CartContent = () => {
    const cardStyles = StyleSheet.create({

    })

    return (
        <View>
            <Subheading>Card</Subheading>
            <Card>
                {/* <Card.Cover source={require('../assets/my_garage.JPG')} /> */}
                <Card.Title
                    title="篠栗ベース88"
                    subtitle="ガレージの風景"
                    left={props => <Avatar.Text {...props} label="IS" 
                />} />
                <Card.Content>
                    <Paragraph>篠栗ベース88を開設しました</Paragraph>
                </Card.Content>
                <Card.Actions style={{ justifyContent: 'flex-end' }}>
                    <Button>見ない</Button>
                    <Button mode='contained'>見る</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

export const Main = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <TypographySample />
                <CartContent />
            </ScrollView>
            {/* <Buttons /> */}
        </SafeAreaView>
    )
}

