import { TestBed } from '@angular/core/testing';
import {LoginScreenService} from './loginscreen.service;

describe('LoginScreenService',()=>{
    beforeEach(() => 
    TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: LoginScreenService = TestBed.get(LoginScreenService);
        expect(service).toBeTruthy();
    })
})