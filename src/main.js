const http = require('http');
const { parse } = require('querystring');

const web3= require('./config/setup.js');
var w_contract= require('./config/contract');
const keys= require('./config/keys');

const acc=web3.eth.accounts.privateKeyToAccount('0xB282DA748B5F7DC71CE3ECCE67D0C0B162D915EC5C74CD62CEF00005943EFE28');
web3.eth.accounts.wallet.add(acc);
web3.eth.defaultAccount=acc.address;

const server = http.createServer((req, res) => {

    if (req.method === 'POST') {
        collectRequestData(req, result => {
            console.log(result);
            w_contract.methods.get_contract().call().then(function (res){
                console.log(res);
            });

            w_contract.methods.add_owner_info(result.s_name,result.w_type,result.qty,result.m_id,result.m_name).send({
                from:'0x4B9Bb6483B2b2BE6C27b5FfFCB9e6258D27bd7Ad',gas:1000000}, (error, transactionHash) => {
                console.log(transactionHash);
            });


            w_contract.methods.get_contract().call().then(function (res){
                console.log("After Updation")
                console.log(res);
            });
            res.end(`Data received.`);
        });
    }
else{

    res.end(`
        <!DOCTYPE html>
<html>
<head>
    <title>Demo_Tree_Blockchain</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
<div class="container-fluid">
    <div class="jumbotron jumbotron-fluid">
        <h1 class="display-4 text-center">Owner</h1>
    </div>
</div>

<form action="/" method="post" class="row" style="width:50%; margin: 25px auto;">
    <div class="input-group mb-3">
        <p class="mr-3 col-lg-3">Source Name</p>
        <input class="form-control col-lg-9" type = "text" id="s_name"  name = "s_name" placeholder = "">
    </div>
    <div class="input-group mb-3">
        <p class="mr-3 col-lg-3">Manufacturer Name</p>
        <input class="form-control col-lg-9" type = "text" id="m_name"  name = "m_name" placeholder = "">
    </div>
    <div class="input-group mb-3">
        <p class="mr-3 col-lg-3">Manufacturer ID</p>
        <input class="form-control col-lg-9" type = "text" id="m_id" name = "m_id" placeholder = "">
    </div>
    <div class="input-group mb-3">
        <p class="mr-3 col-lg-3">Wood Type</p>
        <input class="form-control col-lg-9" type = "text" id="w_type" name = "w_type" placeholder = "">
    </div>
    <div class="input-group mb-3">
        <p class="mr-3 col-lg-3">Quantity</p>
        <input class="form-control col-lg-9" type = "text" id="qty" name = "qty" placeholder = "">
    </div>
    <div class="form-group">
        <button id="button"  class="btn btn-lg btn-primary btn-block">Submit</button>
    </div>

</form>

</body>
</html>
        
    `);}
});
server.listen(3000);

function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}