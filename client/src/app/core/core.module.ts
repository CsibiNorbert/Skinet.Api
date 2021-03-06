import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { ErrorComponent } from './error/error.component';
import { ToastrModule } from 'ngx-toastr';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';

// Having singletons
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    // positionClass: Where the tost to appear
    // dup: Prevents duplicate toasts
    // This comes with it`s own styles & need imported in the angular.json
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  declarations: [
    CoreComponent,
    NavBarComponent,
    TestErrorComponent,
    ErrorComponent,
    SectionHeaderComponent
  ],
  exports: [
    NavBarComponent,
    SectionHeaderComponent
  ]
})
export class CoreModule { }
