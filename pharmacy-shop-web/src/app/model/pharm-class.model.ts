import {IMedicine} from './medicine.model';

export interface IPharmClass {
  id?: number;
  className?: string;
  classDescription?: string;
  medicines?: IMedicine[];
}
