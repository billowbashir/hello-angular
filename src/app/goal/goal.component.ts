import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: '/goal.component.html',
  styleUrls: ['/goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
        new Goal(1,'Watch Finding Nemo','watch the whole movie',new Date(2018,3,14)),
        new Goal(2,'Buy Cookies','from the supermarket',new Date(2018,3,29)),
        new Goal(3, 'Get new Phone Case','strong phone case with green color',new Date(2018,3,8)),
        new Goal(4, 'Get Dog Food','i dont like dogs so dont',new Date(2018,3,17)),
        new Goal(5, 'Solve math homework','finish it all',new Date(2018,3,24)),
        new Goal(6, 'Plot my world domination plan','hitler style',new Date(2030,3,14)),
    ]
    toggleDetails(index){
      this.goals[index].showDescription = !this.goals[index].showDescription;
    }
    deleteGoal(isComplete, index){
      if (isComplete){
        let toDelete=confirm(`are you sure u want to delete ${this.goals[index].name}`)
        if (toDelete){
          this.goals.splice(index, 1)
        }
      }
    }
    addNewGoal(goal){
      let goalLength=this.goals.length;
      goal.id=goalLength+1;
      goal.completeDate=new Date(goal.completeDate)
      this.goals.push(goal)
    }
  constructor() {}

  ngOnInit() {
  }

}
