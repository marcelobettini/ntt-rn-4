import { useGet } from './hooks/useGet';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [randomChar, setRandomChar] = useState(randomizer(1, 826))
  const [data, isLoading, error] = useGet(randomChar)
  const handlePress = () => {
    const num = randomizer(1, 826)
    setRandomChar(prevValue => prevValue = num)
  }
  function randomizer(min, max) {
    return Math.round(Math.random() * (max - min) * min)
  }

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={"large"} color={'tomato'} />}
      {data && !isLoading && (
        <View style={[styles.width, styles.spacer]}>

          <Text style={[styles.name, styles.width]}>{data.name}</Text>
          <Image style={[styles.image, styles.rounded]} source={{ uri: data.image }}></Image>
          <View style={styles.spacer}>

            <TouchableOpacity
              onPress={handlePress}>
              <Text style={[styles.name, styles.rounded, styles.width, styles.blue, styles.button]}>RANDOMIZE</Text>
            </TouchableOpacity>
          </View>
        </View>
      )

      }
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 10,
    textAlign: 'center',
    padding: 10,
  },

  black: {
    backgroundColor: 'black',
    color: 'white',
  },
  blue: {
    backgroundColor: '#483D8B',
    color: 'white',
  },
  rounded: {
    borderRadius: 15
  },
  width: {
    width: 300,
  },
  button: {
    shadowColor: "white",
    shadowOffset: {
      width: 10,
      height: 5
    },
    shadowOpacity: .5,
    shadowRadius: 3,
    elevation: 5
  },
  spacer: {
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    // resizeMode: 'contain'
  }
});

