import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting {
  settingsForm = new FormGroup({
    adminName: new FormControl('Administrador', Validators.required),
    email: new FormControl('admin@adminpro', [Validators.required, Validators.email]),
    theme: new FormControl('light'),
    notifications: new FormControl(true)
  })

  constructor() {
  }

  saveSettings(){
    if (this.settingsForm.valid){
      Swal.fire({
        title: 'Cambios de la configuración del sistema',
        text: 'Configuración guardada correctamente',
        icon: "success"
      });
    }
  }

}
