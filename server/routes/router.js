const express=require('express');
const route=express.Router();//allows us to creeate diffrent router in a seperate file

const services =require('../services/render');
/*
@description Root route
@method GET
*/
route.get('/',services.homeRoutes);// root route with method get when folder matches
/*
@description add user
@method GET /add-user
*/
route.get('/add-user',services.add_user);
/*
@description update user
@method GET update-user
*/
route.get('/update-user',services.update_user);

module.exports=route