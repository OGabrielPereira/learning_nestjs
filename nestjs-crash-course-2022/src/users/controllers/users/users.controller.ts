import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Version } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get('all')
    getUsers() {
        return this.userService.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto ) {
        console.log(userData);
        return this.userService.createUser(userData);
    }   

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.getUserById(id);
        if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        return user;
    }

}
