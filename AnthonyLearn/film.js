import { StyleSheet, Text, View, Image } from 'react-native';

const Film = ({ titre, des, q, genre1, genre2, authorname,img }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>

                <View style={styles.container}>

                    <View style={styles.leftBox}>
                        <Image source={{ uri: img }}
                            style={styles.cover} />
                    </View>
                    <View style={styles.rightBox}>

                        <Text style={styles.h1}>{titre}</Text>
                        <Text style={styles.p}>{des}</Text>
                        <Text>{q}</Text>
                        <View style={styles.container}>
                            <Text style={styles.genre}>{genre1}</Text>
                            <Text style={styles.genre}>{genre2}</Text>
                        </View>
                        <Text>{authorname}</Text>

                    </View>
                </View>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 300,
        height: 150,
        backgroundColor: "green",
        borderWidth: 3,
        borderColor: 'black'
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
    },
    cover: {
        width: 50,
        height: 50,
        borderWidth: 4,
        borderColor: 'black'
    },
    leftBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    rightBox: {
        flex: 4,
        alignItems: 'right',
        marginLeft: 20,
        marginTop: 10
    },
    h1: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 4,
        marginBottom: 2
    },
    p: {
        fontSize: 12
    },
    genre: {
        margin: 5,
        fontSize: 13
    }
});

export default Film;
