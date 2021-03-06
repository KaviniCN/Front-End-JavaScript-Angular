import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders : Leader[] = LEADERS;

  selectedLeader: Leader;

  constructor(private leaderService: LeaderService) { }

  ngOnInit() {

    this.leaderService.getLeaders()
      .then(leaders => this.leaders = this.leaders);
  }

  
  onSelect(leader: Leader) {
    this.selectedLeader = leader;
  }

}