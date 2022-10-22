import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { headingText, lightFont, mediumFont } from '../../Component/DesignTheme'

const Inbox = () => {
    const data = [
        { name: 'Fruit', id: 1 },
        { name: 'VegeTable', id: 2 },
        { name: 'Rustic BreakFast', id: 3 },
        { name: 'Fruit', id: 4 },
        { name: 'Fruit', id: 5 },
        { name: 'Fruit', id: 6 },
        { name: 'Fruit', id: 7 },
        { name: 'Fruit', id: 8 },
        { name: 'Fruit', id: 9 },
        { name: 'Fruit', id: 10 },
    ]
    return (
        <View style={styles.conatiner}>
            {
                //#region inbox messgage list
                <>
                    <FlatList
                        style={{}}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled
                        keyExtractor={itemId => itemId.id}
                        data={data}
                        renderItem={({ item, index }) => (
                            <View style={styles.inBoxCard}>
                                <Text style={{ fontFamily: lightFont, fontSize: headingText - 2 }}>
                                    Lorem ipsum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>

                                <Text style={{ fontFamily: lightFont, fontSize: headingText - 4, color: 'grey' }}>WednesDay , October 11,2022</Text>
                            </View>
                        )}
                    />
                </>
                //#region 
            }
        </View>
    )
}

export default Inbox

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: scale(10)
    },
    inBoxCard: {
        width: '99%',
        minHeight: moderateScale(40),
        borderWidth: 1,
        borderColor: '#dadada',
        marginTop: moderateScale(10),
        paddingHorizontal: scale(10),
        paddingVertical: moderateScale(10),
        marginBottom:moderateScale(10)
    }
})