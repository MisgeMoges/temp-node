
const os = require('os');

const user = os.userInfo()

console.log(user)

//The method returns the uptime using seconds

console.log(`The system uptime is: ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmen(),
    freeMen: os.freemen()
};

console.log(currentOS)











