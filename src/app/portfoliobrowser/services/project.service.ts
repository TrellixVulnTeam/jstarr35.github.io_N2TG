import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class ProjectService {

  private _projects: BehaviorSubject<Project[]>;

  private dataStore: {
    projects: Project[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = { projects: [ ] };
    this._projects = new BehaviorSubject<Project[]>([]);
  }

  get projects(): Observable<Project[]> {
    return this._projects.asObservable();
  }

  projectById(id: number) {
    return this.dataStore.projects.find(x => x.id == id);
  }

/*   projectData = `[
    {
      "id": 1,
      "name": "HerdOne",
      "type": "ASP.NET",
      "description": "Livestock management application created with ASP.NET Web Forms. Using Bootstrap themes and components, HerdOne offers a clean, data-driven UI.",
      "link": "https://herdone.com",
      "assets": []
    },
    {
      "id": 2,
      "name": "HerdOne for Android",
      "type": "Android",
      "description": "A scaled down version of HerdOne.com that allowed users to access their data and perform primary functions on their mobile device. The apps offline first design allows users to use the app even when in the field where a reliable network connection is not always available.",
      "link": "",
      "assets": ["../assets/hoa.gif"]
    }
  ]
  ` */

  loadAll() {
    const projectsUrl = 'http://localhost:3000/projects'

   //  this.dataStore.projects = JSON.parse(this.projectData);
    // return this._projects.next(Object.assign({}, this.dataStore).projects);
    // return this.http.get('db.json').map(
    //   (Reponse)=>Reponse.json()
    // )
    return this.http.get<Project[]>('app/portfoliobrowser/services/db.json')
      .subscribe(data => {
        this.dataStore.projects = data;
        this._projects.next(Object.assign({}, this.dataStore).projects);
      }, error => {
        console.log("Failed to fetch users")
      });
  }

}
