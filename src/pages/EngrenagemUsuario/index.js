// EngrenagemUsuario.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function EngrenagemUsuario() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página de Configurações</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default EngrenagemUsuario;
