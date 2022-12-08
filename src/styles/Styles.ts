import { StyleSheet } from "react-native";


export const Styles = StyleSheet.create({


    colors: {
        color: "rgba(9, 15, 20, 1)",
        blanco: 'rgba(187, 190, 195, 1)',
        color2:'"#243337"'
    },
    /// darck color  
    dacrkColor: {
        color: "#030708",
        
    },
    /// lite color  
    liteColor: {
        color: '#fafbfd',
        color2: "#5764c5",
        color3: '#d5daeb',
        color4: "#99a0d4"
    }

})


///  componets Style  
export const ComponetsStyles = StyleSheet.create({

    ////  may custom alert
    alertStyles: {
        color: '',

        container: {
            flexDirection: "row",
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            borderRadius: 10,
            backgroundColor: 'green',
            isError: {
                backgroundColor: 'red'
            }
        },
        textAlert: {
            color: 'white',
        }
    }
})


///  login styles  

export const LoginStyles = StyleSheet.create({
    body: {
        backgroundColor: Styles.liteColor.color,
        height: "100%",
        alignItems: 'center',
        position: 'relative'
    },

    logo: {
        width: '100%',
        height: '100%'
    },


    gradients: {
        width: '100%',
        height: 200,
        position: 'absolute',
        marginBottom: 0
    },

    logoContainer: {
        width: 100,
        height: 100,
        marginTop: '30%',
        marginBottom: 40
    },

    logoStyles: {
        color: Styles.liteColor.color2,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600'
    },

    inputConted: {
        justifyContent: "center",
        alignItems: 'center'
    },

    bottom: {
        backgroundColor: Styles.liteColor.color2,
        padding: 10,
        borderRadius: 10,
        width: 100,
        alignItems: 'center'
    },
    textINput: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        width: 300,
        borderRadius: 10,
        padding: 10,
        borderColor: Styles.liteColor.color2,
        fontWeight: "500",
        backgroundColor: '#f4f4f4'
    },

    textBotom: {
        color: "white",
        fontSize: 15,
        textTransform: 'capitalize'
    }
})