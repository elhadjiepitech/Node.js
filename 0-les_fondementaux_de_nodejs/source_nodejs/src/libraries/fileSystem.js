const fs = require('fs');  // Importation du module fs (file system) de Node.js

module.exports = {
    createDirectory: (name)=>{  // Créer un dossier avec la méthode: mkdirSync
        try {
            
            fs.mkdirSync(name)
    
        } catch (error) {
    
            console.log(error);
    
        }
    
    },
    createFile: (filePath, content)=>{  // Créer un fichier avec la méthode: appendFileSync
        try {
            
            fs.appendFileSync(filePath, content)
    
        } catch (error) {
    
            console.log(error);
    
        }
    
    },
    removeFile: (filePath)=>{   // Supprimer un fichier avec la méthode: unlinkSync
        try {

            fs.unlinkSync(filePath)

        } catch (error) {
            
            console.log(error);
            
        }
    },
    removeDirectory: (name)=>{  // Supprimer un dossier
        try {
            
            fs.rmdirSync(name)
    
        } catch (error) {
    
            console.log(error);
    
        }
    
    }
}

//Pour lancer exécuter le code: node npm_du_fichier.js