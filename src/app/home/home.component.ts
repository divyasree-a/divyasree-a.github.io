import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  text: string = '';
  name: string = 'Divyasree Attaluri';

  ngOnInit(): void {
      this.type();
  }

  type() {
    const interval = 100;
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < this.name.length) {
        this.text += this.name[index];
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, interval);
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
