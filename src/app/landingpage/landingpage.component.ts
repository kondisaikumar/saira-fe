import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { LandingSearchComponent } from "../landing-search/landing-search.component";
import { LandingSidepanelComponent } from '../landing-sidepanel/landing-sidepanel.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landingpage',
  imports: [NavbarComponent, LandingSearchComponent, LandingSidepanelComponent, FooterComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
