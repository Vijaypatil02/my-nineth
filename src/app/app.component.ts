import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserServiceService} from './user-service.service';
// @ts-ignore
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {DataSource} from '@angular/cdk/collections';

export interface Datas {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}
const ELEMENT_DATA: Element[] = [];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-nineth';
  loginFrom = new FormGroup({
    email: new FormControl(``, Validators.required),
    password: new FormControl(``)
  });
  displayedColumns: string[] = ['id', 'avatar', 'first_name', 'last_name', 'email'];
  // @ts-ignore
  dataSource: Datas[];
  // @ts-ignore
  data: any[];
  // @ts-ignore
  ELEMENT_DATA: Datas[] = [];
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: UserServiceService) {
    this.service.getData().subscribe(data => {
      console.warn(data);
      // @ts-ignore
      this.data = data;
    });
  }
  // @ts-ignore
  dataSource = new MatTableDataSource<Datas>(this.ELEMENT_DATA);

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.service.getDatas().subscribe((res: any) => {
      const data = res.data as Datas[];
      // @ts-ignore
      this.dataSource = new MatTableDataSource<Datas>(data);
      // @ts-ignore
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    });
    // @ts-ignore
    // this.dataSource.paginator = this.paginator;
  }

}
