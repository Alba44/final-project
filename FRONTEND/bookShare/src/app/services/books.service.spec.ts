import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { of } from 'rxjs'

import { BooksService } from './books.service'

describe('BooksService', () => {
  let service: BooksService
  let mockHttpClient: {get: jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksService, { provide: HttpClient, useValue: mockHttpClient }],
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(BooksService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should call getAllBooks', (done) => {
    mockHttpClient.get.and.returnValue(of({}))

    service.getAllBooks().subscribe(() => {
      expect(mockHttpClient.get.calls.count()).toBe(1)
      done()
    })
  })
})
