import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import MessageListScreen from './src/components/MessageListScreen';
import PostListScreen from "./src/components/PostListScreen";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const RootStack = createStackNavigator();
const rootNavigationRef = React.createRef();

const InstagramImageUrl = 'https://github.com/yuchehsieh/App-HW-Ig/blob/master/assets/Instagram.png?raw=true';
const CameraIconUrl = 'https://github.com/yuchehsieh/App-HW-Ig/blob/master/assets/Icons/Camera.png?raw=true';
const MessageIconUrl = 'https://github.com/yuchehsieh/App-HW-Ig/blob/master/assets/Icons/Message.png?raw=true';

export default function App() {
    return (
        <NavigationContainer ref={rootNavigationRef}>
            <RootStack.Navigator>
                <RootStack.Screen name="PostListScreen" component={PostListScreen} options={{
                    headerLeft: () => <Image source={{uri: CameraIconUrl}} style={styles.cameraIcon}/>,
                    headerTitle: () => <Image source={{uri: InstagramImageUrl}} style={styles.InstagramImage}/>,
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => rootNavigationRef.current?.navigate('MessageListScreen')}>
                                <Image source={{uri: MessageIconUrl}}
                                       style={styles.messageIcon}/>
                            </TouchableOpacity>
                        )
                    }
                }}/>
                <RootStack.Screen
                    name="MessageListScreen"
                    component={MessageListScreen}
                    options={{
                        title: 'qishan_yu',
                        headerLeft: () => {
                            return (
                                <TouchableOpacity style={{marginLeft: 15}}
                                                  onPress={() => rootNavigationRef.current?.navigate('PostListScreen')}>
                                    <Ionicons name="ios-arrow-back" size={24}/>
                                </TouchableOpacity>
                            )
                        },
                        headerRight: () => {
                            return (
                                <View style={styles.row}>
                                    <TouchableOpacity style={{marginRight: 15}}>
                                        <FontAwesome name="video-camera" size={22}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <FontAwesome name="pencil-square-o" size={22}/>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        paddingRight: 15,
    },
    messageIcon: {
        marginRight: 15,
        marginBottom: 5,
        width: 24,
        height: 24,
    },
    cameraIcon: {
        marginLeft: 15,
        marginBottom: 5,
        width: 24,
        height: 24
    },
    InstagramImage: {
        width: 110,
        height: 40
    }
});
