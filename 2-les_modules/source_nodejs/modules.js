import fs from 'fs';

// Les modules en Node, c'est quoi ?
// Il voir la documentation, car il en beaucoup, mais voici quelques exemples:

// - fs: pour manipuler les fichiers
// - http: pour créer un serveur
// - path: pour manipuler les chemins
// - os: pour manipuler le système d'exploitation
// - crypto: pour crypter des données
// - events: pour créer des événements
// - et bien d'autres encore


fs.mkdir("assets/images", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Le dossier a été créé avec succès");
    }
});
// Cette commande permet de créer un dossier. Elle prend deux paramètres :
// un nom et un callback