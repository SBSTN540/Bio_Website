import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(){ }

   validEmail(email_addr: string): boolean{
    var valid:boolean;
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    valid = regexp.test(email_addr);
    return valid;
  }


  async send() {
      let name = (<HTMLInputElement>document.getElementById('name')).value;
      let email = (<HTMLInputElement>document.getElementById('email')).value;
      let message = (<HTMLInputElement>document.getElementById('message')).value;
      let validMail = this.validEmail(email)
      if (!validMail){
        alert('Email not valid');
      }
      else if ( (name != '') && validMail && (message != ''))
      {
        alert('Message Sent!');
        (<HTMLInputElement>document.getElementById('name')).value = '';
        (<HTMLInputElement>document.getElementById('email')).value = '';
        (<HTMLInputElement>document.getElementById('message')).value = '';
        const  params = new HttpParams().set('name', name).set('email', email).set('message', message);
        this.http.post("https://mail-delivery-bird.herokuapp.com/forward",
        params )
        .subscribe(
        data => {
        console.log("POST Request is successful ", data);
        },
        error  => {

        console.log("Error", error);

        }

        );
      }
      else
        alert('Missing information');
  }


}
