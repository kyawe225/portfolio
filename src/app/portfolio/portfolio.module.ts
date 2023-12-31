import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [
    PortfolioComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PortfolioRoutingModule
  ],
})
export class PortfolioModule { }
