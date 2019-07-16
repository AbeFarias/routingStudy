import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter: number = 0;
  
  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { 
    const queryParams = this.route.snapshot.queryParams;
  }

  ngOnInit() {
  }

  handleSomethingElseClick(): void{
    // this.router.navigate(['/login'])

    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: {
        counter: ++this.counter
      },
      queryParamsHandling: 'merge'
    });
  }

}
