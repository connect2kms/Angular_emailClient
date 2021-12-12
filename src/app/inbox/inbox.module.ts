import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmaillShowComponent } from './emaill-show/emaill-show.component';

@NgModule({
  declarations: [HomeComponent, EmailCreateComponent, EmailReplyComponent, EmailIndexComponent, EmaillShowComponent],
  imports: [CommonModule, InboxRoutingModule],
})
export class InboxModule {}
