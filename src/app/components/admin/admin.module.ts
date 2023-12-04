import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@NgModule({
  declarations: [HomeComponent, CursoComponent, SobreComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
