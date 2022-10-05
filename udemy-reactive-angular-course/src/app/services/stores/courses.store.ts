import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map, shareReplay, tap } from "rxjs/operators";
import { LoadingService } from "../../loading/loading.service";
import { Course, sortCoursesBySeqNo } from "../../model/course";
import { MessagesService } from "../messages.service";

@Injectable({
  providedIn: "root",
})
export class CoursesStore {
  private subject = new BehaviorSubject<Course[]>([]);

  courses$: Observable<Course[]> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private messagesService: MessagesService
  ) {
    this.loadAllCourses();
  }

  filterByCategory(category: string): Observable<Course[]> {
    return this.courses$.pipe(
      map((courses) =>
        courses
          .filter((course) => course.category == category)
          .sort(sortCoursesBySeqNo)
      )
    );
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    const courses = this.subject.getValue();
    const index = courses.findIndex((x) => x.id == courseId);
    const updatedCourse: Course = {
      ...courses[index],
      ...changes,
    };

    const updatedCourses: Course[] = courses.slice(0);
    updatedCourses[index] = updatedCourse;

    this.subject.next(updatedCourses);

    return this.http.put(`/api/courses/${courseId}`, changes).pipe(
      catchError((error) => {
        const message: string = "Unable to save course";
        console.log(message, error);

        this.messagesService.showErrors(message);

        return throwError(error);
      }),
      shareReplay()
    );
  }

  private loadAllCourses() {
    const loadCourses$ = this.http.get<Course[]>("/api/courses").pipe(
      map((response) => response["payload"]),
      catchError((error) => {
        const message = "Loading coures failed.";
        this.messagesService.showErrors(message);
        console.log(message, error);
        return throwError(error);
      }),
      tap((courseList) => this.subject.next(courseList))
    );

    this.loadingService.showLoaderUntilCompleted(loadCourses$).subscribe();
  }
}
