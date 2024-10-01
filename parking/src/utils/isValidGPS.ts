import { GPS } from "../types/GPS";

export function isValidGPS(value: any): value is GPS {
    return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.latitude === 'number' &&
        typeof value.longitude === 'number'
    );
}