import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, tap } from 'rxjs';

type Book = {
  name: string;
  coverfilename: string;
  author: string;
};

type BookResponse = {
  books: Book[];
};

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  private readonly http = inject(HttpClient);
  protected readonly loadError = signal<string | null>(null);

  protected readonly books = toSignal(
    this.http.get<BookResponse>('data/books.json').pipe(
      map((response) => response.books),
      tap(() => this.loadError.set(null)),
      catchError((error: unknown) => {
        console.error('Unable to load /public/data/books.json', error);
        this.loadError.set('The library list is unavailable right now.');
        return of([] as Book[]);
      })
    ),
    { initialValue: [] as Book[] }
  );
}
