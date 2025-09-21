import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AuthorDto } from '../../data-structures/dtos/AuthorDto';

export class AuthorData implements InMemoryDbService {
  createDb(): { authors: AuthorDto[] } {
    const authors: AuthorDto[] = [
      {
        id: 1,
        authorCode: '409-56-7008',
        firstName: 'Abraham',
        lastName: 'Bennet',
        phoneNumber: '415 658-9932',
        address: '6223 Bateman St.',
        city: 'Berkeley',
        state: 'CA',
        zipCode: '94705',
        contract: true,
      },
      {
        id: 2,
        authorCode: '213-46-8915',
        firstName: 'Marjorie',
        lastName: 'Green',
        phoneNumber: '415 986-7020',
        address: '309 63rd St. #411',
        city: 'Oakland',
        state: 'CA',
        zipCode: '94618',
        contract: false,
      },
    ];

    return { authors };
  }
}
