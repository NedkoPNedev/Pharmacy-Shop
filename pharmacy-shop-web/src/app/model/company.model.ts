import {IPharmClass} from './pharm-class.model';

export interface ICompany {
  companyName?: string;
  companyAddress?: string;
  companyPhoneNumber?: string;
  pharmClasses?: IPharmClass[];
}
