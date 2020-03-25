import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  questions = []
  quizId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      fetch(`http://localhost:3000/api/quizzes/${this.quizId}/questions`)
        .then(response => response.json())
        .then(questions => this.questions = questions);
    });
  }

}
