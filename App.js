import { useGet } from './hooks/useGet';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [data, isLoading, error] = useGet(20)
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={"large"} color={'tomato'} />}
      {data && !isLoading && (
        <View style={[styles.width, styles.spacer]}>

          <Text style={styles.name}>{data.name}</Text>
          <Image style={styles.image} source={{ uri: data.image }}></Image>

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

