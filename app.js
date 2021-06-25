// Init Github;
const github = new Github;

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
    const searchText = e.target.value;

    if(searchText !== ''){
        github.getUser(searchText).then(data => console.log(data));
    }else{
        
    }
   
})