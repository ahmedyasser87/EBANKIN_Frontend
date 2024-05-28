export interface AccountDetails {
  accountOperationDTOList: AccountOperation[];
  balance:                 number;
  currentPage:             number;
  totalPages:              number;
  pageSize:                number;
  accountId:               string;
}

export interface AccountOperation {
  id:            number;
  operationDate: Date;
  amount:        number;
  type:          string;
  description:   string;
}
