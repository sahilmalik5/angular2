import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { Contact } from './contact.component';

describe('Contact', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    // provide a better mock
    {
      provide: ActivatedRoute,
      useValue: {
        data: {
          subscribe: (fn) => fn({yourData: 'yolo'})
        }
      }
    },
    Contact
  ]);

  it('should log ngOnInit', inject([ Contact ], (contact) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    contact.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
