import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MainServiceService} from '../../main-service.service'
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registry-component',
  templateUrl: './registry-component.component.html',
  styleUrls: ['./registry-component.component.css']
})
export class RegistryComponentComponent implements OnInit, OnDestroy {

  checkoutForm: FormGroup;
  private suscribePost: Subscription;

  constructor(private formBuilder: FormBuilder, private mainService: MainServiceService, private datePipe: DatePipe) {
    this.checkoutForm = this.formBuilder.group({
      id_servicio: new FormControl('', [Validators.required, Validators.minLength(5)]),
      id_tecnico: new FormControl('', [Validators.required, Validators.minLength(5)]),
      fecha_inicio: new FormControl('', [Validators.required]),
      fecha_fin: new FormControl('', [Validators.required]),
    });
   }

   public onSubmit() {
     if (this.checkoutForm.valid) {
        this.checkoutForm.controls.fecha_inicio.setValue(this.datePipe.transform(this.checkoutForm.controls['fecha_inicio'].value, 'yyyy-MM-dd hh:mm:ss'))
        this.checkoutForm.controls.fecha_fin.setValue(this.datePipe.transform(this.checkoutForm.controls['fecha_fin'].value, 'yyyy-MM-dd HH:mm:ss'))
        this.suscribePost = this.mainService.saveNewService(this.checkoutForm.value).subscribe(response => {
        console.log(response);
        alert('Usurio Registrado con exito')
      })
     } else {
        alert('Algunos Datos que diligenciaste no son validos')
     }
     
   }

  get id_servicio() { return this.checkoutForm.get('id_servicio') }
  get id_tecnico() { return this.checkoutForm.get('id_tecnico') }
  get fecha_inicio() { return this.checkoutForm.get('fecha_inicio') }
  get fecha_fin() { return this.checkoutForm.get('fecha_fin') } 

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.suscribePost.unsubscribe()
  }

}
