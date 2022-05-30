import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [keys, setKeys] = useState([]);
  const [result, setResult] = useState([]);

  let combination = "";
  function getResult() {
    for (let i = 0; i < keys.length; i++) {
      combination = combination + keys[i];
    }
    const executeStringNumber = eval(combination);
    setResult(executeStringNumber);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.output2} >
          <Text style={styles.output2}>
            {result}
          </Text>
        </TouchableOpacity>
        <Text style={styles.output}>
          {keys}
        </Text>
        <View style={styles.container_keys}>
          <TouchableOpacity onPress={() => setKeys([])} >
            <Text style={styles.keys}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys(keys.slice(0, -1))}>
            <Text style={styles.keys}>{'<-'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '.'])}>
            <Text style={styles.keys2}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '%'])}>
            <Text style={styles.keys2}>%</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_keys}>
          <TouchableOpacity onPress={() => setKeys([...keys, '1'])} >
            <Text style={styles.keys}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '2'])}>
            <Text style={styles.keys}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '-'])}>
            <Text style={styles.keys2}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '+'])}>
            <Text style={styles.keys2}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_keys}>
          <TouchableOpacity onPress={() => setKeys([...keys, '3'])}>
            <Text style={styles.keys}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '4'])}>
            <Text style={styles.keys}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '/'])}>
            <Text style={styles.keys2}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '*'])}>
            <Text style={styles.keys2}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_keys}>
          <TouchableOpacity onPress={() => setKeys([...keys, '5'])}>
            <Text style={styles.keys}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '6'])}>
            <Text style={styles.keys}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '%'])}>
            <Text style={styles.keys2}>%</Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={() => getResult()}>
            <Text style={styles.keys2}>=</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_keys}>
          <TouchableOpacity onPress={() => setKeys([...keys, '7'])}>
            <Text style={styles.keys}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '8'])}>
            <Text style={styles.keys}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '9'])}>
            <Text style={styles.keys}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, '0'])}>
            <Text style={styles.keys}>0</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#417D7A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_keys: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  keys: {
    display: 'flex',
    backgroundColor: '#125B50',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#354545',
    fontSize: 25,
    color: '#fff',
    width: 100,
    height: 100,
  },
  keys2: {
    display: 'flex',
    backgroundColor: '#F8B400',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#354545',
    fontSize: 25,
    color: '#fff',
    width: 100,
    height: 100,
  },
  output: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35,
    color: '#fff',
    backgroundColor: '#069A8E',
    width: '100%',
    height: 30,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  output2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35,
    color: '#fff',
    backgroundColor: '#069A8E',
    width: '100%',
    height: 70,
    marginVertical: 3,
    marginHorizontal: 5,
  }
});
