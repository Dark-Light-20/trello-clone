import { Component } from '@angular/core';
import {
  faHouse,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faElementor, faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  readonly boardIcon = faTrello;
  readonly templateIcon = faElementor;
  readonly homeIcon = faHouse;
  readonly recentIcon = faClock;
  readonly expandedIcon = faAngleUp;
  readonly collapsedIcon = faAngleDown;
  readonly highlightsIcon = faHeart;
  readonly viewsIcon = faBorderAll;
  readonly membersIcon = faUsers;
  readonly settingsIcon = faGear;

}
