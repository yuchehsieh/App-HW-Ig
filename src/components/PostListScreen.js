import React from "react";
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import PostData from '../json/posts';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const MessageIconUrl = 'https://github.com/yuchehsieh/App-HW-Ig/blob/master/assets/Icons/Message.png?raw=true';
const TagIconUrl = 'https://github.com/yuchehsieh/App-HW-Ig/blob/master/assets/Icons/Tag.png?raw=true';

const RenderItem = ({name, likesCount, content, contentImageUrl, avatarUrl, id}) => {
    return (
        <View style={{marginBottom: 30}} key={id}>
            <View style={styles.rowContainer}>
                <View style={styles.row}>
                    <Image source={{uri: avatarUrl}} style={styles.avatar}/>
                    <Text style={styles.accountName}>{name}</Text>
                </View>
                <Ionicons name="ios-more" size={24}/>
            </View>
            <Image source={{uri: contentImageUrl}} style={styles.contentImage}/>
            <View style={styles.rowContainer}>
                <View style={{...styles.row, marginTop: 10}}>
                    <Ionicons name="md-heart-empty" size={24} style={{marginRight: 10}}/>
                    <EvilIcons name="comment" size={30} style={{marginRight: 10}}/>
                    <Image source={{uri: MessageIconUrl}} style={styles.messageIcon}/>
                </View>
                <Image source={{uri: TagIconUrl}} style={styles.tagIcon}/>
            </View>
            <Text style={styles.likesText}>{likesCount} likes</Text>
            <Text style={styles.contentBody}>
                <Text style={styles.accountName}>{name}</Text>
                {content.map((item, i) => {
                    if (item.type === 'normal') {
                        return item.text
                    } else {
                        return <Text key={i} style={styles.blueText}>{item.text}</Text>
                    }
                })}
            </Text>
        </View>
    )
};

function PostListScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={PostData}
                renderItem={({item}) => (
                    <RenderItem
                        content={item.content} name={item.name} likesCount={item.likesCount} id={item.id}
                        avatarUrl={item.avatarUrl} contentImageUrl={item.contentImageUrl}
                    />)}
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
        paddingTop: 10,
    },
    postContainer: {
        flexDirection: 'column',
        marginTop: 10
    },
    rowContainer: {
        flexDirection: 'row',
        width: screenWidth,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 10,
        height: 40,
        width: 40,
    },
    accountName: {
        fontWeight: "bold"
    },
    contentImage: {
        width: screenWidth,
        height: screenHeight * 0.7,
        marginTop: 10,
    },
    messageIcon: {
        width: 24,
        height: 24,
    },
    tagIcon: {
        width: 22,
        height: 30
    },
    likesText: {
        paddingLeft: 15,
        fontWeight: "bold",
        marginTop: 8
    },
    contentBody: {
        marginTop: 8,
        paddingHorizontal: 15
    },
    blueText: {
        color: '#002f5e'
    }
});

export default PostListScreen;