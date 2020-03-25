import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes = []
  constructor() { }

  ngOnInit(): void {
    fetch('http://localhost:3000/api/quizzes')
      .then(response => response.json())
      .then(quizzes => this.quizzes = quizzes)
  }

}
