import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Account, AccountRelations} from '../models';
import {DbDataSource} from '../datasources';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype.id,
  AccountRelations
  > {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Account, dataSource);
  }
}