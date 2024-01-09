import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TextInput } from 'react-native';

import { register, login } from './auth';

import Film from './film';


export default function App() {
  const [pseudo, onChangePseudo] = React.useState('');
  const [pass, onChangePass] = React.useState('');
  const [connect,setConnect] = React.useState(false);

  return (
    <SafeAreaView>
      <Text style={styles.br} />

      <View style={styles.container}>
        <Button
          title="Register"
          onPress={() => register(pseudo, pass)}
        />
        <Button
          title="Login"
          onPress={async () => {
            const le = await login(pseudo, pass)
            setConnect(le);
          }}
        />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangePseudo}
        value={pseudo}
        placeholder="Pseudo"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder="Password"
      />

      <View style={styles.br} />


      {connect ? (
        <View>
          <Film titre="Pacman" des="un très bon film qui participe bien a l'effort général" q="2022" genre1="action" genre2="spatial" authorname="Pierre" img='https://reactjs.org/logo-og.png' />

          <Film titre="DeadPool" des="BlaBlac bla bla" q="2019" genre1="action" genre2="action" authorname="Pierre" img='https://media1.tenor.com/m/okYJHJU_YasAAAAd/a-mimir.gif' />
        </View>
      ) : (
        <View>
          <Text>Pas connecter</Text>
        </View>
      )}



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  red: {
    backgroundColor: "red"
  },
  pp: {
    width: 70,
    height: 70,
    backgroundColor: "grey",
    borderRadius: 100

  },
  br: {
    marginTop: 10
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 4
  },
  title: {
    marginLeft: 10,
    backgroundColor: "grey",
    padding: 3
  },
  soustitle: {
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: "red",
    padding: 3
  }
});
