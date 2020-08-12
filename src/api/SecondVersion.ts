import APIVersion from 'typings/APIVersion';

export default class SecondVersion implements APIVersion {
    parse(data: String){
        return  {
                firstName: data.slice(0,8).replace(/^0+|0+$/g, ""), // remove 0s using regex
                lastName: data.slice(8,18).replace(/^0+|0+$/g, ""), // remove 0s using regex
                clientId: data.slice(-7).replace(/(\d{3})(\d{4})/, '$1-$2') // convert in XXX-XXXX format
            };
     }
}