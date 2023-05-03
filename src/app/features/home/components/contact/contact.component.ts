import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  public CopyEmail() {
    navigator.clipboard.writeText("matheusmarinho.lima@hotmail.com");

    this.messageService.add({severity: 'success', summary: 'Email Address has been copied!'});
  }

}
