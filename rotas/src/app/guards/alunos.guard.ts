import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean{

        //console.log(route);
        //console.log(state);

        if (state.url.includes('editar')) {
            
        }
        console.log('AlunosGuard: Guarda de rotas - Alunos - filha');
        return true;
    }
}