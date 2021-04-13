import React from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import 'xp.css/dist/98.css';

const Profile: React.FC = () => {
    return (
        <View style={styles.root}>
            <WebView
                originWhitelist={['*']}
                source={{html: '<button>Hello world</button>'}}
            />
            <TouchableOpacity style={styles.button}>
                <Text>Hello World</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    button: {
        alignSelf: 'center',
        width: 100,
        padding: 10,
        margin: 10,
    },
});

export default Profile;
