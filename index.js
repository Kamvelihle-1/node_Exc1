const {writeFile, readFile, appendFile} = require ('fs')

writeFile('data.txt', 'Hello node file system','utf-8', (err) => {
    if (err) 
        console.log(err);
    else
        console.log('The file has been saved!');
  });

//When writing a second line to data.txt it overrides the previous line/content

appendFile('data.txt','\nNode.js for backend','utf-8',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('File has been appended');
})
