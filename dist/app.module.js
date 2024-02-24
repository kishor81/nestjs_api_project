"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const vehicles_controller_1 = require("./vehicles/vehicles.controller");
const vehicles_service_1 = require("./vehicles/vehicles.service");
const vehicle_schema_1 = require("./vehicles/vehicle.schema");
const auth_service_1 = require("./auth/auth.service");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const user_schema_1 = require("./users/user.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/vehicle_management'),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Vehicle', schema: vehicle_schema_1.VehicleSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_schema_1.UserSchema }]),
        ],
        controllers: [vehicles_controller_1.VehiclesController],
        providers: [vehicles_service_1.VehiclesService, auth_service_1.AuthService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map