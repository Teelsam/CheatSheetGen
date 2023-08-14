
const newFormHandler = async (event) => {
    event.preventDefault(); 
    const title= document.querySelector('#title').value.trim();
    const refrence= document.querySelector('#refrence').value.trim();


    if(title && refrence){
        const data = { title, refrence }; 
        const response = await fetch('/api/cheatsheet/html',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
            "Contenr-Type": "application/json"
            }
        })
        if (response.ok){
            document.location.replace('/html');
        }
        else{
            alert('Failed to create cheatsheet')
        }
    }
}
   