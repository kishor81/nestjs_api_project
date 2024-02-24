import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./user.model").User[]>;
    createUser(createUserDto: CreateUserDto): Promise<import("./user.model").User>;
}
