import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useWarmUpBrowser } from './../hooks/useWarmUpBrouser';
import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';

// Complete OAuth session when redirected back from the browser
WebBrowser.maybeCompleteAuthSession();

export default function AuthScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId } = await startOAuthFlow();

      if (createdSessionId) {
        // Define or import `setActive` correctly
        // Example: Assuming setActive is part of your authentication logic
        // setActive({ session: createdSessionId });
        console.log('Session created successfully:', createdSessionId);
      } else {
        console.log('No session created');
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, [startOAuthFlow]);

  return (
    <View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 100,
        }}
      >
        <Image
          source={require('./../assets/images/login.png')}
          style={{
            width: 250,
            height: 500,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: '#000',
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            //fontFamily: 'outfit-bold',
          }}
        >
          Fa dintr-un vis o realiatate
          <Text
            style={{
              color: '#4640D8',
            }}
          >
            {' '}
            Comutity
            {'\n'}
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 15,
            //fontFamily: 'outfit',
            textAlign: 'center',
            marginVertical: 15,
            color: '#8f8f8f',
          }}
        >
          Gaseste-ti persoana potrivita la ce ai nevoie, sau fii tu persoana
          care rezolva problemele altora
        </Text>

        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              //fontFamily: 'outfit',
            }}
          >
            Fa-ti un cont!!!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: '#fff',
    padding: 20,
  },
  btn: {
    backgroundColor: '#4640D8',
    padding: 16,
    borderRadius: 99,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
  },
});
