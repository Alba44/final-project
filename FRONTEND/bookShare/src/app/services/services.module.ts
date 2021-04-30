import { NgModule } from '@angular/core'

import { AuthGuardService } from './auth-guard.service'
import { ChatService } from './chat.service'
import { FormService } from './form.service'
import { SocketService } from './socket.service'

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    FormService,
    ChatService,
    AuthGuardService,
    SocketService
  ]
})

export class ServicesModule {}
