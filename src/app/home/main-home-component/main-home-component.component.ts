import { PokemonApiDTO, PokemonResultDTO } from './../../config/HttpClientService.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/config/HttpClientService.service';

@Component({
  selector: 'app-main-home-component',
  templateUrl: './main-home-component.component.html',
  styleUrls: ['./main-home-component.component.css']
})
export class MainHomeComponentComponent implements OnInit {

  constructor(private readonly httpClientService: HttpClientService) { }
  public pokemonResult: PokemonResultDTO[];

  ngOnInit(): void {
    this.httpClientService.getPokemon("https://pokeapi.co/api/v2/pokemon")
    .subscribe((data: PokemonApiDTO) => {
      this.pokemonResult = data.results
      console.log(this.pokemonResult)
    });
  }

}
