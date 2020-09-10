import {Entity, model, property} from '@loopback/repository';

@model()
export class Account extends Entity {
  @property({
    id: true,
    type: 'Number',
    generated: true
  })
  id: number;

  @property({
    type: 'string'
  })
  name: string;

  @property({
    type: 'boolean',
    required: true,
  })
  hasAccount: boolean;

  constructor(data?: Partial<Account>) {
    super(data);
  }
}

export interface AccountRelations {
  // describe navigational properties here
}

export type AccountWithRelations = Account & AccountRelations;
