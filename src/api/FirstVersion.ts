import APIVersion from 'typings/APIVersion';

export default class FirstVersion implements APIVersion {
    parse(data: String){
        return  {
                firstName: data.slice(0,8),
                lastName: data.slice(8,18),
                clientId: data.slice(-7)
            };
     }
}