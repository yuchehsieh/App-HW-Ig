import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MessageListData from '../json/messageList';

const screenWidth = Math.round(Dimensions.get('window').width);

const RenderItem = ({name, id, activeMessage, avatarUrl}) => {
    return (
        <View style={styles.singleChatContainer} key={id}>
            <View style={styles.leftElementContainer}>
                <Image source={{uri: avatarUrl}} style={{height: 45, width: 45}}/>
                <View style={styles.nameContainer}>
                    <Text>{name}</Text>
                    <Text style={styles.activity}>{activeMessage}</Text>
                </View>
            </View>
            <Feather name="camera" size={28} color={'grey'}/>
        </View>
    )
};

function MessageListScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={MessageListData}
                renderItem={({item}) => (
                    <RenderItem name={item.name} activeMessage={item.activeMessage} id={item.id}
                                avatarUrl={item.avatarUrl}/>)}
                keyExtractor={({id}) => id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 15
    },
    singleChatContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: screenWidth,
        paddingHorizontal: 15,
        marginBottom: 20
    },
    leftElementContainer: {
        flexDirection: 'row',
    },
    nameContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    activity: {
        color: 'grey',
        marginTop: 5
    }
});

export default MessageListScreen;