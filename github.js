class Github {
    constructor(){
        this.client_id = '2677e2449c8ebdc9bbc3';
        this.client_secret = '66284c842373e066414aae5fe123e271015cc2aa';
    }
   async getUser(user){
        const profileResponse = await fetch( `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}