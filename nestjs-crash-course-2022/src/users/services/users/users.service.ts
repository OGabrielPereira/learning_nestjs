import { Injectable } from '@nestjs/common';

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
    // Parei em 56m
}
