import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //Buscar item salvo
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key)
            return JSON.parse(passwords) || [];
        } catch (err) {
            console.log(err);
            return [];
        }
    }
    //Salvar item no storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key)
            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))
        } catch (err) {
            console.log("Erro ao salvar " + err)
        }
    }
    //Remover item do storage
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((passwords) => {
                return (passwords != item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;

        } catch (err) {
            console.log("Erro ao deletar " + err)
        }
    }

    return {
        getItem, saveItem, removeItem
    }
}

export default useStorage