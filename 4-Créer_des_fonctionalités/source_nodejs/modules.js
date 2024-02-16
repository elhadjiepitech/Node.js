import fs from 'fs';
import { config } from 'process';

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



// Il suffit de faire npm init et faire des config
// C'est dans le fichier package.json que l'on peut configurer notre projet
// on ajoutes {
//   "name": "source_nodejs",
//   "version": "1.0.0",
//   "type": "module",
//   ...
// }