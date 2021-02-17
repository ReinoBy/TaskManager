import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  Designation: string | undefined;
  Username: string | undefined;
  NoOfTeamMembers: number | undefined;
  TotalCostOfAllProjects: number | undefined;
  PendingTasks: number | undefined;
  UpComingProjects: number | undefined;
  ProjectCost: number | undefined;
  CurrentExpenditure: number | undefined;
  AvailableFunds: number | undefined;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary = [] as any;
  TeamMembers = [] as any;

  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = [
      'Maardu mõis', 'Keila jaam', 'Turba kauplus'
    ];
    this.Projects = [
      'Project ABB', 'Project BBC', 'Project CBS', 'Project DDT'
    ];

    for (let i = 2021; i >= 2010; i--) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      {Region: 'East', TeamMembersCount: 20, TemporarilyUnavalableMembers: 4},
      {Region: 'South', TeamMembersCount: 15, TemporarilyUnavalableMembers: 4},
      {Region: 'West', TeamMembersCount: 13, TemporarilyUnavalableMembers: 4},
      {Region: 'North', TeamMembersCount: 27, TemporarilyUnavalableMembers: 4},
    ];
    this.TeamMembers = [
      {
        Region: 'East', Members: [
          {ID: 1, Name: 'Ford', Status: 'Available'},
          {ID: 2, Name: 'Mia', Status: 'Available'},
          {ID: 3, Name: 'Cord', Status: 'Busy'},
          {ID: 4, Name: 'Mike', Status: 'Not Available'},
        ]
      },
      {
        Region: 'South', Members: [
          {ID: 5, Name: 'Ford', Status: 'Available'},
          {ID: 6, Name: 'Mia', Status: 'Available'},
          {ID: 7, Name: 'Cord', Status: 'Busy'},
          {ID: 8, Name: 'Mike', Status: 'Not Available'},
        ]
      },
      {
        Region: 'West', Members: [
          {ID: 9, Name: 'Ford', Status: 'Available'},
          {ID: 10, Name: 'Mia', Status: 'Available'},
          {ID: 11, Name: 'Cord', Status: 'Busy'},
          {ID: 12, Name: 'Mike', Status: 'Not Available'},
        ]
      },
      {
        Region: 'North', Members: [
          {ID: 13, Name: 'Ford', Status: 'Available'},
          {ID: 14, Name: 'Mia', Status: 'Available'},
          {ID: 15, Name: 'Cord', Status: 'Busy'},
          {ID: 16, Name: 'Mike', Status: 'Not Available'},
        ]
      }
    ];
  }

  onProjectChange($event: MouseEvent)
  {
    console.log($event.target.innerHTML);
  }
}
