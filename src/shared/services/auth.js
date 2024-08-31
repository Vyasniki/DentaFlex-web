import axios from 'axios';

const { default: errorCodes } = require("../errorCodes");

export const LoginFn = async (username, password) => {
    const res = await axios.post('/api/auth/login', 
            {
                username,
                password
            });

            if(res){
                return res;
            }else{
                return errorCodes['DFA0001'];

            }
}

