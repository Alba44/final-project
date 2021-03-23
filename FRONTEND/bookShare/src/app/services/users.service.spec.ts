import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { UsersService } from './users.service'
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms'

describe('UsersService', () => {
  let service: UsersService

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule] // cosas que te suele pedir
    })
    service = TestBed.inject(UsersService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
