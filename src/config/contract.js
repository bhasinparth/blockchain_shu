const web3 = require('./setup');
const keys= require('../config/keys');

//var wood_contractContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"get_contract","outputs":[{"name":"t_s_id","type":"address"},{"name":"t_s_name","type":"string"},{"name":"t_wood_type","type":"string"},{"name":"t_man_id","type":"address"},{"name":"t_man_name","type":"string"},{"name":"t_product_name","type":"string"},{"name":"t_cust_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"c_name","type":"string"},{"name":"s_qty","type":"string"}],"name":"add_dist_info","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"source_name","type":"string"},{"name":"w_type","type":"string"},{"name":"w_qty","type":"string"},{"name":"manf_id","type":"address"},{"name":"manf_name","type":"string"}],"name":"add_owner_info","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"d_id","type":"address"},{"name":"d_name","type":"string"},{"name":"p_name","type":"string"},{"name":"p_qty","type":"string"}],"name":"add_manf_info","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
const abi= [{"constant":true,"inputs":[],"name":"get_contract","outputs":[{"name":"t_s_id","type":"address"},{"name":"t_s_name","type":"string"},{"name":"t_wood_type","type":"string"},{"name":"t_man_id","type":"address"},{"name":"t_man_name","type":"string"},{"name":"t_product_name","type":"string"},{"name":"t_cust_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"c_name","type":"string"},{"name":"s_qty","type":"string"}],"name":"add_dist_info","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"source_name","type":"string"},{"name":"w_type","type":"string"},{"name":"w_qty","type":"string"},{"name":"manf_id","type":"address"},{"name":"manf_name","type":"string"}],"name":"add_owner_info","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"d_id","type":"address"},{"name":"d_name","type":"string"},{"name":"p_name","type":"string"},{"name":"p_qty","type":"string"}],"name":"add_manf_info","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
//const abi = [{"constant":false,"inputs":[{"name":"_username","type":"string"}],"name":"addUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_userRated","type":"string"}],"name":"getIntegerRating","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ratingFrom","type":"string"},{"name":"_userRated","type":"string"},{"name":"data","type":"uint256"}],"name":"addRating","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_username","type":"string"}],"name":"getUserTimesVoted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userRated","type":"string"}],"name":"getRatingParameters","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserSize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_username","type":"string"}],"name":"getUserRating","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"rating_from","type":"string"},{"indexed":true,"name":"rating_to","type":"string"},{"indexed":false,"name":"rating","type":"uint256"}],"name":"RatingActivity","type":"event"}];
const c_add= keys.cont_ad;
const cont= new web3.eth.Contract(abi,c_add);

module.exports=cont;