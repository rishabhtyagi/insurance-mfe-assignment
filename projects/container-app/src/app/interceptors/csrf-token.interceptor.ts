// src/app/interceptors/csrf-token.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CsrfTokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const csrfToken = this.getCsrfTokenFromCookie(); // You should implement a way to get CSRF token (e.g., from a cookie)
    if (csrfToken) {
      const clonedRequest = req.clone({
        setHeaders: {
          'X-CSRF-TOKEN': csrfToken
        }
      });
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }

  private getCsrfTokenFromCookie(): string | null {
    // Implement logic to retrieve CSRF token from cookies or local storage
    return document.cookie.replace(/(?:(?:^|.*;\s*)X-CSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, '$1');
  }
}
