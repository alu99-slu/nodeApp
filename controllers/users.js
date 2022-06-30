const User = require('../models/schema');

exports.createUsers = (req, res)=>{
    const data = new User(req.body)
    console.log(data)
    data.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/users');
        // res.send('Product Created successfully')
        console.log('successfully uploaded');
    })
}

exports.deleteUsers = async (req, res)=>{
    console.log(req.params.id);
    try{
        const result = await User.findByIdAndDelete(req.params.id)
        res.redirect('/users');
    }catch (error){
        console.log(error);
    }
}

exports.getalldoc = async (req, res)=> {
    try{
        const result = await User.find()
        // console.log(result);
        res.render('index',{data: result});
    }catch (error) {
        console.log(error)
    }
};




