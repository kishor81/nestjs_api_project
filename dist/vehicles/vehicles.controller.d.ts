import { VehiclesService } from '../vehicles/vehicles.service';
import { CreateVehicleDto } from '../vehicles/vehicle.dto';
import { UpdateVehicleDto } from '../vehicles/vehicle.dto';
import { Vehicle } from './vehicle.model';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    findAll(): Promise<Vehicle[]>;
    findOne(id: string): Promise<Vehicle>;
    create(createVehicleDto: CreateVehicleDto): Promise<Vehicle>;
    update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle>;
    delete(id: string): Promise<any>;
}
