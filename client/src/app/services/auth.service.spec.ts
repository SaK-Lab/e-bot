import { TestBed, inject } from '@angular/core/testing';
import { ReflectiveInjector } from '@angular/core';
import { HttpClientModule, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';



import { AuthService } from './auth.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
