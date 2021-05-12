import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FlexLayoutModule} from '@angular/flex-layout';
import { User } from '../shared/components/classes/user';
import { UserService } from '../shared/services/user.service';

export interface FileData {
  id: string;
  serverName: string;
  fileName: string;
  fileSize: string;
  dateUploaded: string;
}

/** Constants used to fill up our data base. */

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public currentUser : User = new User();
  displayedColumns: string[] = ['id', 'server name', 'file name', 'file size', 'date uploaded'];
  dataSource: MatTableDataSource<FileData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService : UserService) {
    //Pie part

    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
    this.getUserInfo();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));

  }
  getUserInfo(){
    this.userService.getUserData()
      .subscribe((data:any)=>{
        this.currentUser = data;
      },
      error => {
        console.log(error);
      });
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): FileData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    serverName: name,
    fileName: Math.round(Math.random() * 100).toString(),
    fileSize: "20MB",
    dateUploaded: 'today'
  };
}
