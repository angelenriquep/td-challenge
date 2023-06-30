import { ShopCustomer } from '../domain/ShopCustomer';
import { BackofficeCourseDuration } from '../../domain/BackofficeCourseDuration';
import { BackofficeCourseId } from '../../domain/BackofficeCourseId';
import { BackofficeCourseName } from '../../domain/BackofficeCourseName';
import { BackofficeCourseRepository } from '../../domain/BackofficeCourseRepository';

export class ShopCustomerCreator {
  constructor(private backofficeCourseRepository: BackofficeCourseRepository) { }

  async run(id: string, duration: string, name: string) {
    const course = new ShopCustomer(
      new BackofficeCourseId(id),
      new BackofficeCourseName(name),
      new BackofficeCourseDuration(duration)
    );

    return this.backofficeCourseRepository.save(course);
  }
}
