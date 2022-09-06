const mongoose = require('mongoose')

main()
.then(() => {
    console.log('[DATABASE] DATABASE CONECTED');
})
.catch(err => {
    console.log(err)
});

async function main() {
  await mongoose.connect('mongodb://localhost:27017/user')
}


module.exports = mongoose