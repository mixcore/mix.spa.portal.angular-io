import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
      path: 'posts',
      loadChildren: () =>
        import('./pages/posts/posts.module').then((m) => m.PostsModule)
    },
  /*
{
    path: 'app-settings',
    loadChildren: () =>
      import('./pages/app-settings/app-settings.module').then((m) => m.AppSettingsModule)
  },
{
    path: 'attribute-sets',
    loadChildren: () =>
      import('./pages/attribute-sets/attribute-sets.module').then((m) => m.AttributeSetsModule)
  },
{
    path: 'attribute-set-data',
    loadChildren: () =>
      import('./pages/attribute-set-data/attribute-set-data.module').then((m) => m.AttributeSetDataModule)
  },
{
    path: 'configurations',
    loadChildren: () =>
      import('./pages/configurations/configurations.module').then((m) => m.ConfigurationsModule)
  },
{
    path: 'languages',
    loadChildren: () =>
      import('./pages/languages/languages.module').then((m) => m.LanguagesModule)
  },
{
    path: 'customers',
    loadChildren: () =>
      import('./pages/customers/customers.module').then((m) => m.CustomersModule)
  },
{
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
{
    path: 'files',
    loadChildren: () =>
      import('./pages/files/files.module').then((m) => m.FilesModule)
  },
{
    path: 'forms',
    loadChildren: () =>
      import('./pages/forms/forms.module').then((m) => m.FormsModule)
  },
{
    path: 'import',
    loadChildren: () =>
      import('./pages/import/import.module').then((m) => m.ImportModule)
  },
{
    path: 'json-data',
    loadChildren: () =>
      import('./pages/json-data/json-data.module').then((m) => m.JsonDataModule)
  },
{
    path: 'resource',
    loadChildren: () =>
      import('./pages/resource/resource.module').then((m) => m.ResourceModule)
  },
{
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule)
  },
{
    path: 'medias',
    loadChildren: () =>
      import('./pages/medias/medias.module').then((m) => m.MediasModule)
  },
{
    path: 'messenger',
    loadChildren: () =>
      import('./pages/messenger/messenger.module').then((m) => m.MessengerModule)
  },
{
    path: 'modules',
    loadChildren: () =>
      import('./pages/modules/modules.module').then((m) => m.ModulesModule)
  },
{
    path: 'module-data',
    loadChildren: () =>
      import('./pages/module-data/module-data.module').then((m) => m.ModuleDataModule)
  },
{
    path: 'module-gallery',
    loadChildren: () =>
      import('./pages/module-gallery/module-gallery.module').then((m) => m.ModuleGalleryModule)
  },
{
    path: 'module-post',
    loadChildren: () =>
      import('./pages/module-post/module-post.module').then((m) => m.ModulePostModule)
  },
{
    path: 'moduleData',
    loadChildren: () =>
      import('./pages/moduleData/moduleData.module').then((m) => m.ModuledataModule)
  },
{
    path: 'navigations',
    loadChildren: () =>
      import('./pages/navigations/navigations.module').then((m) => m.NavigationsModule)
  },
{
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersModule)
  },
{
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages/pages.module').then((m) => m.PagesModule)
  },
{
    path: 'page-gallery',
    loadChildren: () =>
      import('./pages/page-gallery/page-gallery.module').then((m) => m.PageGalleryModule)
  },
{
    path: 'page-page',
    loadChildren: () =>
      import('./pages/page-page/page-page.module').then((m) => m.PagePageModule)
  },
{
    path: 'page-position',
    loadChildren: () =>
      import('./pages/page-position/page-position.module').then((m) => m.PagePositionModule)
  },
{
    path: 'page-post',
    loadChildren: () =>
      import('./pages/page-post/page-post.module').then((m) => m.PagePostModule)
  },
{
    path: 'permissions',
    loadChildren: () =>
      import('./pages/permissions/permissions.module').then((m) => m.PermissionsModule)
  },
{
    path: 'roles',
    loadChildren: () =>
      import('./pages/roles/roles.module').then((m) => m.RolesModule)
  },
{
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then((m) => m.ServicesModule)
  },
{
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then((m) => m.SettingsModule)
  },
{
    path: 'social-feed',
    loadChildren: () =>
      import('./pages/social-feed/social-feed.module').then((m) => m.SocialFeedModule)
  },
{
    path: 'store',
    loadChildren: () =>
      import('./pages/store/store.module').then((m) => m.StoreModule)
  },
{
    path: 'templates',
    loadChildren: () =>
      import('./pages/templates/templates.module').then((m) => m.TemplatesModule)
  },
{
    path: 'themes',
    loadChildren: () =>
      import('./pages/themes/themes.module').then((m) => m.ThemesModule)
  },
{
    path: 'url-alias',
    loadChildren: () =>
      import('./pages/url-alias/url-alias.module').then((m) => m.UrlAliasModule)
  },
{
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule)
  },
  */
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'feature-list',
    loadChildren: () =>
      import('./pages/feature-list/feature-list.module').then(
        (m) => m.FeatureListModule
      )
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (m) => m.SettingsModule
      )
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./pages/examples/examples.module').then(
        (m) => m.ExamplesModule
      )
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
