import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private accountService = inject(AccountService);
  @Output() cancelRegister = new EventEmitter();
  model: any = {}
  
  register() {
    this.accountService.register(this.model).subscribe({
      next: (response: any) => {
        console.log(response);
        this.cancel();
      },
      error: (error: any) => console.log(error)
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
