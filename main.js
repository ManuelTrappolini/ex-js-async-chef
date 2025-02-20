//In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
//Recuperare la ricetta da https://dummyjson.com/recipes/{id}
//Estrarre la proprietà userId dalla ricetta
//Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
//Restituire la data di nascita dello chef


async function fetchJson(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const getChefBirthday = async (id) => {
    try {
        const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`)
        console.log(recipe);

        if (!recipe) {
            throw new Error('Ricetta non trovato nella ricetta');
        }

        const userId = recipe.userId
        console.log(recipe.userId);

        if (!userId) {
            throw new Error('userId non trovato nella ricetta');
        }

        const user = await fetchJson(`https://dummyjson.com/users/${userId}`)
        console.log(user);


        return user.birthDate
    } catch (error) {
        console.error('Errore nella funzione getChefBirthday;', error)
        throw error
    }

}

(async () => {
    try {
        const birthday = await getChefBirthday(4)
        console.log(`La data di nascita dello chef é il ${birthday}`);
    } catch (error) {
        console.error('Errore:', error.message)
    }


})()