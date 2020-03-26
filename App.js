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

export default function App() {
    return (
        <NavigationContainer ref={rootNavigationRef}>
            <RootStack.Navigator>
                <RootStack.Screen name="PostListScreen" component={PostListScreen} options={{
                    headerLeft: () => <Image source={require('./assets/Icons/Camera.png')}
                                             style={{marginLeft: 15, marginBottom: 5}}/>,
                    headerTitle: () => <Image source={require('./assets/Instagram.png')} style={{width: 100}}/>,
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => rootNavigationRef.current?.navigate('MessageListScreen')}>
                                <Image source={require('./assets/Icons/Message.png')}
                                       style={{marginRight: 15, marginBottom: 5}}/>
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
    }
});
