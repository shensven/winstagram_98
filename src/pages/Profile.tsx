import React from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet, View} from 'react-native';
// import 'xp.css/dist/98.css';

const Profile: React.FC = () => {
    return (
        <View style={style.root}>
            <WebView
                originWhitelist={['*']}
                source={{html: '<button>Hello world</button>'}}
            />
        </View>
    );
};

const style = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default Profile;
