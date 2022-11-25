import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return [{ 
            username: 'John Doe', email: 'johndoe@test.com' 
        }];
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto ) {
        console.log(userData);
        return {};
    }   

    @Get(':id')
    getUserById(@Param('id') id: string) {
        console.log(id)
        return { id };
    }


}
