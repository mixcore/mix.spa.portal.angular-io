import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';

import {
  authLogin,
  authLogout,
  routeAnimations,
  LocalStorageService,
  selectIsAuthenticated,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme
} from '@mixcore/core';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from '@mixcore/core/settings/settings.actions';

@Component({
  selector: 'mixcore-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  // showFiller = false;
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../../assets/logo.png').default;
  languages = ['en', 'de']; // , 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'
  navigation = [
    { link: 'portal/dashboard', label: 'mixcore.menu.dashboard', icon: "dashboard" },
    { link: 'portal/navigation', label: 'mixcore.menu.navigation', icon: "account_tree" },
    { link: 'portal/posts', label: 'mixcore.menu.posts', icon: "create" },
    { link: 'pages', label: 'mixcore.menu.pages', icon: "article" },
    { link: 'modules', label: 'mixcore.menu.modules', icon: "developer_board" },
    { link: 'databases', label: 'mixcore.menu.databases', icon: "storage" },
    { link: 'Categories', label: 'mixcore.menu.categories', icon: "category" },
    { link: 'Tags', label: 'mixcore.menu.tags', icon: "loyalty" },
    // { link: 'about', label: 'mixcore.menu.about', icon: "dashboard" },
    // { link: 'feature-list', label: 'mixcore.menu.features', icon: "dashboard" },
    { link: 'examples', label: 'mixcore.menu.examples', icon: "dashboard" }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'mixcore.menu.settings', icon: "settings" }
  ];

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private store: Store,
    private storageService: LocalStorageService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  onLoginClick() {
    this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    this.store.dispatch(authLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }
}
