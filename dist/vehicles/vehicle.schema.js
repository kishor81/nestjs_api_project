"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleSchema = void 0;
const mongoose_1 = require("mongoose");
exports.VehicleSchema = new mongoose_1.Schema({
    make: String,
    Vehiclemodel: String,
    year: Number,
    registrationNumber: String,
    status: {
        type: String,
        enum: ['active', 'maintenance', 'retired'],
        default: 'active',
    },
    location: String,
    driver: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Driver',
    },
}, { timestamps: true });
//# sourceMappingURL=vehicle.schema.js.map