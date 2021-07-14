import React from 'react'

const ImportAnswers = ({ onLoadJsonData }) => {

    let fileReader;
  
    const handleFileRead = (e) => {
        const content = fileReader.result;
        console.log('handleFileRead', content)
        onLoadJsonData(content)
    };
    
    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };
    

    return (
        <div className='upload-expense'>
        <input
            type='file'
            id='file'
            className='input-file'
            accept='.json'
            onChange={e => handleFileChosen(e.target.files[0])}
        />
    </div>
    )
}

export default ImportAnswers
