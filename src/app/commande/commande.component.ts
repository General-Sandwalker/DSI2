import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-commande',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent {
  command = {
    name: '',
    description: ''
  };

  onSubmit() {
    console.log('Command submitted:', this.command);
  }
}