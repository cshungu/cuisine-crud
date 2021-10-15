/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 14/10/2021 - 20:56:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2021
    * - Author          : christian
    * - Modification    : 
**/
import * as axios from 'axios';

axios.defaults.headers.common['test'] = '435';
axios.defaults.headers.post['Authorization'] = 'xxx'; //AUTH_TOKEN;
axios.defaults.baseURL = 'https://127.0.0.1';
axios.defaults.port = 8000;
axios.defaults.timeout = 4000;

//console.log(axios.defaults);
