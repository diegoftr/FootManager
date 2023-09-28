import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import awsconfig from './aws-exports'; 
import Auth from '@aws-amplify/auth';
import 'zone.js'
import { API, Amplify } from 'aws-amplify';

Amplify.configure(awsconfig)
API.configure(awsconfig);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
