import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyseRoutingModule } from './analyse-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { AnalyseComponent } from './analyse.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileService } from '../shared/services/file.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AnalyseComponent],
  imports: [
    CommonModule,
    AnalyseRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AnalyseComponent
  ],
  providers:[
    FileService,
    HttpParams,
    HttpClient,
    CookieService
  ]
})
export class AnalyseModule { }
