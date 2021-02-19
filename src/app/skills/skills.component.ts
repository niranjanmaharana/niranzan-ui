import { Component, OnInit } from '@angular/core';
import { SkillSetService } from '../services/skillset.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private _skillsetService: SkillSetService) { }

  ngOnInit() {
  }

}
