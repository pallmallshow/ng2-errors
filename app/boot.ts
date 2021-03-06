import {bootstrap, Title} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {App} from './AppComponent';

import {ErrorsService} from "./Errors/Services/ErrorsService";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(App, [
    ErrorsService,

    Title,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);
