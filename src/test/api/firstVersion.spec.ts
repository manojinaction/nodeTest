import APIVersion from '../../typings/APIVersion';
import FirstVersion from '../../api/FirstVersion';

const firstVersion: APIVersion  = new FirstVersion();

describe('FirstVersion API', () => {
    it('It processes input Data to fecth name and ID', () => {
      const inputData: String = 'JOHN0000MICHAEL0009994567';
  
      const result: object = {
        firstName: 'JOHN0000',
        lastName: 'MICHAEL000',
        clientId: '9994567'
      };
      const data: object = firstVersion.parse(inputData)
  
      expect(data).toEqual(result)
    })
  })