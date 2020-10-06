import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MainServiceService} from '../../main-service.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consult-component',
  templateUrl: './consult-component.component.html',
  styleUrls: ['./consult-component.component.css']
})
export class ConsultComponentComponent implements OnInit, OnDestroy {

  checkoutForm: FormGroup;
  private suscribeGet: Subscription;
  responseMainServive: any;
  flagTable: boolean;

  constructor(private formBuilder: FormBuilder, private mainService: MainServiceService) { 
    this.flagTable = false;
    this.checkoutForm = this.formBuilder.group({
      id_tecnico: new FormControl('', [Validators.required, Validators.minLength(5)]),
      week: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });
  }

  get id_tecnico() { return this.checkoutForm.get('id_tecnico') }
  get week() { return this.checkoutForm.get('week') }

  onSubmit(){
    console.log('Data: ', this.checkoutForm.value);
    if (this.checkoutForm.valid) {
      //this.checkoutForm.controls['id_tecnico'].value, this.checkoutForm.controls['week'].value
      console.log('entra');
      this.suscribeGet = this.mainService.consultService(this.checkoutForm.controls['id_tecnico'].value, this.checkoutForm.controls['week'].value).subscribe(response => {
        console.log("responseMainServive: ", response)
        this.responseMainServive = response
        this.flagTable = true
      })
    } else {
      alert('Algunos Datos que diligenciaste no son validos')
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.suscribeGet.unsubscribe()
  }

}
