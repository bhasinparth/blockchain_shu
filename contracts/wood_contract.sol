pragma solidity ^0.5.0;


contract Wood_contract{
    address s_id;
    string s_name;
    string wood_type;
    string qty;

    address man_id;
    string man_name;

    string product_name;
    string product_qty;

    address dist_id;
    string dist_name;

    string cust_name;
    string sold_qty;

    function add_owner_info (
        string memory source_name,
        string memory w_type,
        string memory w_qty,
        address manf_id,
        string memory manf_name
    ) public{
        if(msg.sender!=s_id){
            return;
        }
        s_name=source_name;
        wood_type=w_type;
        qty=w_qty;
        man_id=manf_id;
        man_name=manf_name;
    }

    constructor() public{
        s_id=msg.sender;
    }

    function add_manf_info(
        address d_id,
        string memory d_name,
        string memory p_name,
        string memory p_qty
    )public{
        if(msg.sender!=man_id){
            return ;
        }
        dist_id=d_id;
        dist_name=d_name;
        product_name=p_name;
        product_qty=p_qty;
    }

    function add_dist_info(
        string memory c_name,
        string memory s_qty
    )public{
        if(msg.sender!=dist_id){
            return;
        }

        cust_name=c_name;
        sold_qty=s_qty;
    }

    function get_contract() public view returns(
        address  t_s_id,
        string memory t_s_name,
        string memory t_wood_type,
        address t_man_id,
        string memory t_man_name,
        string memory t_product_name,
        string memory t_cust_name) {
        return(s_id,s_name,wood_type, man_id,man_name,product_name,cust_name);
    }


}