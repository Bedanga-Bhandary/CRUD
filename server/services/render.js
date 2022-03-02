exports.homeRoutes=(req,res)=>{ //when url mathces root route i.e '/' execute call back function 
    res.render('index');  //no need for extension because the engine was initiallized with the ejs extension 
}

exports.add_user=(req,res)=>{
    res.render('add_user');
}

exports.update_user=(req,res)=>{
    res.render('update_user');
}