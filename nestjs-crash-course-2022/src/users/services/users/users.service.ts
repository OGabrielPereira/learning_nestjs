import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: 'John Doe', email: 'john@email.com' },
        { username: 'Jane Doe', email: 'jane@email.com' },
        { username: 'John Smith', email: 'smith@email.com' }
    ];
    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType){
        this.fakeUsers.push(userDetails);
        return;
    }

    getUserById(id: number) {
        return this.fakeUsers[id];
    }

}
