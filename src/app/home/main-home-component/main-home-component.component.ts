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

  public dataAuthorDescritive: string;
  public dataAuthorName: string;

  public dataTeraphyAboutDescritive: string;
  public dataTeraphyAboutTitle: string;
  public dataTeraphyAboutSubtitle: string;

  public dataAboutTitle: string;
  public dataAboutStreet: string;
  public dataAboutEmail: string;
  public dataAboutTelephone: string;

  public posts = [
    {
      title: 'Terapia Particular',
      imageUrl: 'assets/TeraphyImg4.jpg',
      hour: '1 h',
      price: 'R$ 49.99',
      otherImageUrl: 'assets/TeraphyImg4_Focus.jpg',
      mainContentTitle: 'Terapia particular',
      mainContentBaseHour: '1 h',
      mainContentBasePrice: 'R$ 49.99',
      descriptionContentServiceDescription: `
        Sentindo-se um pouco para baixo ultimamente e nada parece melhorar sua disposição?
        Pode ser hora de procurar ajuda de um profissional licenciado.
        Minhas sessões de Terapia particular ajudam os pacientes a desenvolverem atitudes
        positivas em relação às circunstâncias mais complexas e desafiadoras da vida.
        Entre em contato comigo e deixe eu ajudar você a encontrar o melhor de si mesmo.
      `,
      aboutContactInformationEmailDescription: '165032@gmail.com',
      detailUrl: 'agenda/1'
    },
    {
      title: 'Consulta Psiquiátrica',
      imageUrl: 'assets/TeraphyImg5.jpg',
      hour: '1.5 h',
      price: 'R$ 89.99',
      otherImageUrl: 'assets/TeraphyImg5_Focus.jpg',
      mainContentTitle: 'Consulta Psiquiátrica',
      mainContentBaseHour: '1.5 h',
      mainContentBasePrice: 'R$ 89.99',
      descriptionContentServiceDescription: `
        Nas minhas sessões de terapia, trabalharemos juntos para resolver problemas
        atuais e focar nos pensamentos e nos comportamentos positivos. Vou ajudar a
        elaborar suas reações e fornecerei ferramentas valiosas para lidar com os
        obstáculos da vida. Tenho certeza de que você achará meu serviço personalizado de
        Consulta psiquiátrica inspirador. Ligue para marcar um horário.
      `,
      aboutContactInformationEmailDescription: '165032@gmail.com',
      detailUrl: 'agenda/2'
    },
    {
      title: 'Terapia de Casal',
      imageUrl: 'assets/TeraphyImg6.jpg',
      hour: '2 h',
      price: 'R$ 129.99',
      otherImageUrl: 'assets/TeraphyImg6_Focus.jpg',
      mainContentTitle: 'Terapia de Casal',
      mainContentBaseHour: '2 h',
      mainContentBasePrice: 'R$ 129.99',
      descriptionContentServiceDescription: `
        Se está procurando serviço de Terapia de casal de qualidade,
        com um(a) Psicólogo(a) profissional e comprometido(a), você está no lugar certo.
        Guio meus pacientes durante todo o processo e implemento métodos para ajudá-los a
        estabelecer novas atitudes em relação aos assuntos mais complexos de suas vidas.
        Entre em contato e veja o que posso fazer por você.
      `,
      aboutContactInformationEmailDescription: '165032@gmail.com',
      detailUrl: 'agenda/3'
    }
  ]

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

    const dataAuthorName: string = "Nathaniel Lambert";
    const authorDescritive: string = `
      "Discutir experiências positivas leva a um aumento do bem-estar, aumento da
      satisfação geral da vida e melhora o nível de energia"
    `;

    const teraphyAboutTitle: string = "TUDO SOBRE A TERAPIA";
    const teraphyAboutSubtitle: string = "Orientando você no caminho certo";
    const teraphyAboutDescritive: string = `
      Implemento métodos eficazes de psicoterapia para incentivar a autocompreensão
      dos pacientes e incentivá-los a adotar novas atitudes e sentimentos em relação
      a sua vida. É essencial ter em mente que a terapia não é um remédio mágico ou
      uma solução rápida. Terapia é um processo de cicatrização que requer participação
      e investimento - tanto do paciente como do profissional. Basicamente, fazer pequenas
      mudanças no comportamento autodestrutivo e lidar com sentimentos de tristeza, medo e
      dor podem trazer resultados que alteram a qualidade de vida.
    `;

    const aboutTitle: string = "ENTRE EM CONTATO";
    const aboutStreet: string = "Av. Bernardino de Campos, 98 - São Paulo";
    const aboutEmail: string = "165032@gmail.com";
    const aboutTelephone: string = "Tel: (11) 3456-7890";

    this.setDataTitle(title);
    this.setDataSubTitle(subTitle);
    this.setDataDescritive(data);

    this.setDataAuthorName(dataAuthorName);
    this.setDataAuthorDescritive(authorDescritive);

    this.setDataTeraphyAboutTitle(teraphyAboutTitle);
    this.setDataTeraphyAboutSubtitle(teraphyAboutSubtitle);
    this.setDataTeraphyAboutDescritive(teraphyAboutDescritive);

    this.setDataAboutTitle(aboutTitle);
    this.setDataAboutStreet(aboutStreet);
    this.setDataAboutEmail(aboutEmail);
    this.setDataAboutTelephone(aboutTelephone);

    /*
    this.httpClientService.getPokemon("https://pokeapi.co/api/v2/pokemon")
    .subscribe((data: PokemonApiDTO) => {
      this.pokemonResult = data.results
      console.log(this.pokemonResult)
    });
    */
  }

  public getStaticImageUrl: () => String = () => {
    return "assets/TeraphyImg7.jpg";
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

  private setDataTeraphyAboutDescritive: (value: string) => void = (value: string) => {
    this.dataTeraphyAboutDescritive = value;
  }

  private setDataTeraphyAboutTitle: (value: string) => void = (value: string) => {
    this.dataTeraphyAboutTitle = value;
  }

  private setDataTeraphyAboutSubtitle: (value: string) => void = (value: string) => {
    this.dataTeraphyAboutSubtitle = value;
  }

  private setDataAuthorDescritive: (value: string) => void = (value: string) => {
    this.dataAuthorDescritive = value;
  }

  private setDataAuthorName: (value: string) => void = (value: string) => {
    this.dataAuthorName = value;
  }

  private setDataAboutTitle: (value: string) => void = (value: string) => {
    this.dataAboutTitle = value;
  }

  private setDataAboutStreet: (value: string) => void = (value: string) => {
    this.dataAboutStreet = value;
  }

  private setDataAboutEmail: (value: string) => void = (value: string) => {
    this.dataAboutEmail = value;
  }

  private setDataAboutTelephone: (value: string) => void = (value: string) => {
    this.dataAboutTelephone = value;
  }
}
