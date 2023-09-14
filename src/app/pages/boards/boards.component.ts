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

  items = [
    {
      label: 'Item 1',
      items: [{ label: 'Sub Item 1.1' }, { label: 'Sub Item 1.2' }],
    },
    {
      label: 'Item 2',
      items: [{ label: 'Sub Item 2.1' }],
    },
    {
      label: 'Item 3',
      items: [
        { label: 'Sub Item 3.1' },
        { label: 'Sub Item 3.2' },
        { label: 'Sub Item 3.3' },
      ],
    },
  ];
}
