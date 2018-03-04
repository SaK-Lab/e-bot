import { TestBed, inject } from '@angular/core/testing';
import { ReflectiveInjector } from '@angular/core';
import { HttpClientModule, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';



import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
