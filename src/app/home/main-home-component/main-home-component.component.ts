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

  public dataDescritive: string;
  public dataTitle: string;
  public dataSubtitle: string;

  ngOnInit(): void {
    const title: string = "PSICÓLOGO";
    const subTitle: string = "Um(a) Psicólogo(a) para orientá-lo";
    const data: string = `
      Você está vivenciando questões relacionadas a um trauma, ao sofrimento, ao vício,
      à ansiedade ou a grandes mudanças de vida? Chega um momento em que a ajuda de um
      profissional certificado é necessária para lidarmos com muitos dos desafios da vida.
      Sou um(a) Psicólogo(a) licenciado(a) em São Paulo e estou aqui para apoiar você na sua
      jornada de cura e auto-descoberta.
    `;

    this.setDataTitle(title);
    this.setDataSubTitle(subTitle);
    this.setDataDescritive(data);

    /*
    this.httpClientService.getPokemon("https://pokeapi.co/api/v2/pokemon")
    .subscribe((data: PokemonApiDTO) => {
      this.pokemonResult = data.results
      console.log(this.pokemonResult)
    });
    */
  }

  public getParallaxImageUrl: () => String = () => {
    return "url('../../../assets/TeraphyImg.jpg')";
  }

  private setDataDescritive: (value: string) => void = (value: string) => {
    this.dataDescritive = value;
  }

  private setDataTitle: (value: string) => void = (value: string) => {
    this.dataTitle = value;
  }

  private setDataSubTitle: (value: string) => void = (value: string) => {
    this.dataSubtitle = value;
  }

}
