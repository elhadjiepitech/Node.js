const fs = require('fs');

module.exports = {
    createDirectory: (name)=>{
        try {
            
            fs.mkdirSync(name)
    
        } catch (error) {
    
            console.log(error);
    
        }
    
    },
    createFile: (filePath, content)=>{
        try {
            
            fs.appendFileSync(filePath, content)
    
        } catch (error) {
    
            console.log(error);
    
        }
    
    },
    removeFile: (filePath)=>{
        try {

            fs.unlinkSync(filePath)

        } catch (error) {
            
            console.log(error);
            
        }
    },
    removeDirectory: (name)=>{
        try {
            
            fs.rmdirSync(name)
    
        } catch (error) {
    
            console.log(error);
    
        }
    
    }
}
