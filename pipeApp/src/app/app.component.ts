import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { RickNmortyService } from './services/rick-nmorty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pipeApp';
  characters: any[] = [];
  search: string = '';
  // nombre = 'soy un texto para un pipe';
  nombre = 1;
  currentPage = 0;

  constructor(
    private rickService: RickNmortyService
  ) { }

  ngOnInit(): void {
    this.getAllChars();
  }

  getAllChars() {
    this.rickService.getAllCharacters().subscribe((res) => {
      console.log(res.results);
      this.characters = res.results;
    });
  }

  nextPage() {
    if (this.currentPage < this.characters.length - 1) {
      this.currentPage += 2;
      console.log(this.currentPage);
    }    
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 2;
      console.log(this.currentPage);
    }
  }

  onSearch(strBusqueda: string) {
    this.search = strBusqueda;
    
  }
}
