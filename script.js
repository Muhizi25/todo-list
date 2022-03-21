window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-form');
    const input= document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task = input.value;
        if(!task){
            alert("pliz fill out the fast task");
        }else{
            console.log("success");
        }

    })
})

