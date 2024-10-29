import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ logo, lang, experience }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: logo }} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.languageText}>{lang}</Text>
                <Text style={styles.experienceText}>Опыт: {experience} лет</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    languageText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    experienceText: {
        fontSize: 14,
        color: 'gray'
    }
});

export default LanguageItem;