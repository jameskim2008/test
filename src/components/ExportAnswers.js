

const ExportAnswers = ({ tasks }) => {
    const exportAnswers = () => {
        const fileName = "file";
        const json = JSON.stringify(tasks);
        const blob = new Blob([json],{type:'application/json'});
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);        
    }
        
    return (
        <div>
            {tasks.length > 0 && <button className='btn' onClick={exportAnswers}>Export Answers</button>}
        </div>
    )
}

export default ExportAnswers
