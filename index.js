let dbUsers = [
    {
        username :"yat",
        password:"pass",
        name: "yat",
        email:"email"
    },
    //setiap user kene ade lain username
    {
        username :"aya",
        password:"passw",
        name: "aya",
        email:"email"
    }
]
//purpose to sent request to cloud about the detail of login
function login(username,password){
console.log ("someone try to login with", username, password)
let matched =dbUsers.find(element =>{
    element.username==username
})
    //console.log(matched)
    if (matched)
    {
        if (matched.password == password){
            return matched
        }else{
            return "Password Not matched"
        }
    }
    else {
        return "username not found"
    }  
}

function register (newusername, newpassword, newname, newemail){
    //to do :check if username exist

    dbUsers.push({
        username: newusername,
        password: newpassword,
        name: newname,
        email:newemail,
    })
}

//call function (give parameter) try to ;ogin
//login("yat","pass")
console.log(login("autem","passwo"))
//try register
register("wan","word", "wan2","mail")
console.log(login("wan","word"))