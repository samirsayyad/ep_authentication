const globalUser = (()=>{

    const createUser =function(){
        let userId = mongoObjectId();
        if (!localStorage.getItem('client_id'))
            localStorage.setItem('client_id',userId)
        return userId;
    }
    const mongoObjectId = function () {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };
    const getUser =function(){
        let userId = localStorage.getItem('client_id');
        if (!userId)
            return createUser();
        return userId;
    }
    return{
        createUser,
        getUser
    }
})

globalUser.createUser()