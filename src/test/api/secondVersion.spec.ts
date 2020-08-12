import APIVersion from '../../typings/APIVersion';
import SecondVersion from '../../api/SecondVersion';

const secondVersion: APIVersion  = new SecondVersion();

describe('FirstVersion API', () => {
    it('It processes input Data to fecth name and ID', () => {
      const inputData: String = 'JOHN0000MICHAEL0009994567';
  
      const result: object = {
        firstName: 'JOHN',
        lastName: 'MICHAEL',
        clientId: '999-4567'
      };
      const data: object = secondVersion.parse(inputData)
  
      expect(data).toEqual(result)
    })
  })