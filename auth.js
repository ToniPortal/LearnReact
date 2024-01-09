import { Alert } from 'react-native';

const url = "http://192.168.241.203:5600/auth/";

export const register = async (pseudo, pass) => {
    // try {
    //     const f = await fetch(url + "register", {
    //         method: "POST",
    //         json: { "test": "testo" },
    //     });
    //     const json = await f.json();

    //     Alert.alert('Vous êtes maintenant enregister')
    // } catch (e) {
    //     console.log(e)
    //     Alert.alert("Une erreur est survenue")
    // }

}

var connect = false;

export const login = async (pseudo, pass) => {

    try {
        const f = await fetch(`${url}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "pseudo": pseudo, "pass": pass }),
        });

        if (!f.ok) {
            console.warn(`Erreur HTTP ! Status: ${f.status}`);
            return Alert.alert("Erreur HTTP");
        } else {
            const json = await f.json();
            // console.log(json);
            connect = true;
            Alert.alert("Login !");
            return connect;
        }


    } catch (e) {
        console.warn(e)
        Alert.alert("Une erreur est survenue")
    }

}