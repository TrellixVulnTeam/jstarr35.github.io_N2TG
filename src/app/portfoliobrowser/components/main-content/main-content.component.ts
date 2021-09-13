import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  project: Project;
  constructor(
    private route: ActivatedRoute,
    private service: ProjectService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) id = 1;
      this.project = null;

     /*  this.service.loadAll().subscribe(
        (data) => {
          this.project = data[0]
        }
      ) */

      this.service.projects.subscribe(projects => {
        if (projects.length == 0) return;

        setTimeout(() => {
          this.project = this.service.projectById(id);
        }, 500)

      });

    })
  }

}
