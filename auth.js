import { Alert } from 'react-native';

const url = "http://localhost:5600/auth/";

export const register = async (pseudo, pass) => {
    try {
        const f = await fetch(url + "register", {
            method: "POST",
            json: { "test": "testo" },
        });
        const json = await f.json();

        Alert.alert('Vous êtes maintenant enregister')
    } catch (e) {
        console.warn(e)
        Alert.alert("Une erreur est survenue")
    }

}

export const login = async (pseudo, pass) => {

    try {
        const f = await fetch(url + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "pseudo": pseudo, "pass": pass }),
        });
    
        if (!f.ok) {
            throw new Error(`Erreur HTTP ! Status: ${f.status}`);
        }
    
        const json = await f.json();

        Alert.alert("Login !" + pseudo + pass);
    } catch (e) {
        console.warn(e)
        Alert.alert("Une erreur est survenue")
    }

}