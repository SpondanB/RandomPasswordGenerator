const outputPassword = document.getElementById("outputPassword")

function startFunction(){
    let length = document.getElementById("length").value
    let lowercase = document.getElementById("lc").checked
    let uppercase = document.getElementById("uc").checked
    let nums = document.getElementById("nc").checked
    let specialchar = document.getElementById("sc").checked

    let lowercasearr = 'abcdefghijklmnopqrstuvwxyz'
    let uppercasearr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numsarr = '0123456789'
    let specialchararr = '!@#$%^&*()_-+=[]{}:;<>/?'

    let allowedChars = ''
    let password = ''

    allowedChars += lowercase ? lowercasearr : ''
    allowedChars += uppercase ? uppercasearr : ''
    allowedChars += nums ? numsarr : ''
    allowedChars += specialchar ? specialchararr : ''

    if(allowedChars.length === 0 || length <= 0){
        outputPassword.innerHTML = 'Enter proper input.'
    }
    else{
        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length)
            password += allowedChars[randomIndex]
        }
        outputPassword.innerHTML = `Your Password is: ${password}`
        console.log(password)
    }
}