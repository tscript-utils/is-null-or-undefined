import {isNullOrUndefined} from "../index";

describe('isNullOrUndefined', () => {
    it('should return true if arg is null', () => {
        expect(isNullOrUndefined(null)).toBeTruthy();
    })
    it('should return true if arg is undefined', () => {
        expect(isNullOrUndefined(undefined)).toBeTruthy();
    })
    it('should return false if arg is number', () => {
        expect(isNullOrUndefined(1)).toBeFalsy();
    })
    it('should return false if arg is string', () => {
        expect(isNullOrUndefined('5')).toBeFalsy();
    })
    it('should return object if arg is string', () => {
        expect(isNullOrUndefined({})).toBeFalsy();
    })
    it('should return array if arg is string', () => {
        expect(isNullOrUndefined([])).toBeFalsy();
    })
})
