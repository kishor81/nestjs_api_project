export declare class CreateVehicleDto {
    make: string;
    model: string;
    year: number;
    registrationNumber: string;
    status?: 'active' | 'maintenance' | 'retired';
    location: string;
    driver?: string;
}
export declare class UpdateVehicleDto {
    make?: string;
    model?: string;
    year?: number;
    registrationNumber?: string;
    status?: 'active' | 'maintenance' | 'retired';
    location?: string;
    driver?: string;
}
