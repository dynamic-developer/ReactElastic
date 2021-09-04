import { IRoleDef } from '../../../Types/Domain/Role';
import { Dispatch } from 'react';

export interface RoleListProp {
  getFilterData?:(searchkey:string)=>void;
  getData?:(entityStateId:number)=>void;
  roleDefs: IRoleDef[];
  theme?: any;
}
