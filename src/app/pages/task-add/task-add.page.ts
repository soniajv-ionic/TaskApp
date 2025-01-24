import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonModal,
  IonButtons,
  IonSelect,
  IonSelectOption,
  IonMenuButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonInput,
  IonToggle,
  IonItem,
  IonLabel,
  IonButton,
  IonDatetime,
  IonDatetimeButton,
} from '@ionic/angular/standalone';
import { TaskManagerService } from '../../services/task-manager.service'; // Importa el servicio
import { ITask } from '../../interfaces/itask'; // Importa la interfaz
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.page.html',
  styleUrls: ['./task-add.page.scss'],
  standalone: true,
  imports: [
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonDatetimeButton,
    IonDatetime,
    IonSelect,
    IonSelectOption,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonLabel,
    IonItem,
    IonToggle,
    IonInput,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class TaskAddPage implements OnInit {
  // Propiedades del formulario
  taskName: string = '';
  taskDescription: string = '';
  taskPriority: 'low' | 'medium' | 'high' = 'low'; // Valor predeterminado
  //taskDeadline: string = '';
  taskDone: boolean = false;
  selectedDate: string = ''; // Variable para almacenar la fecha y hora seleccionada
  initialDate: string = '2023-11-02T01:22:00'; // Fecha y hora inicial para mostrar por defecto
  modalController: any;

  constructor(private taskManagerService: TaskManagerService) {}

  ngOnInit() {}

  // Método para cerrar el modal y manejar el valor seleccionado
  closeModal() {
    // Aquí puedes hacer algo con la fecha seleccionada (por ejemplo, mostrarla o guardarla)
    console.log('Fecha seleccionada:', this.selectedDate);

    // Cerrar el modal
    this.modalController.dismiss();
  }

  // Método para manejar la dismissión del modal
  onModalDismiss() {
    console.log('Modal cerrado');
  }

  // Método para enviar la tarea
  submitTask() {
    newTask: ITask = {}; // Creamos un objeto de tipo ITask

    // Llamamos al servicio para agregar la tarea
    this.taskManagerService.addTask(newTask)

    // Opcional: Reseteamos los campos del formulario después de agregar la tarea
    this.resetForm();
  }

  // Método para resetear el formulario
  resetForm() {
    this.taskName = '';
    this.taskDescription = '';
    this.taskPriority = 'low';
    this.taskDeadline = '';
    this.taskDone = false;
  }
}
