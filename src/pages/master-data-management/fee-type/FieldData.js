export const fieldData = [
  {
    data: "feeTypeCode",
    title: "Fee Type Code",
    type: "number",
    validationContent: {
      validationType: "number",
      typeErrorMsg: "Field is required",
      validations: [
        {
          type: "required",
          msg: "Required!",
        },
      ],
    },
  },
  {
    data: "feeTypeName",
    title: "Fee Type Name",
    type: "text",
    validationContent: {
      validationType: "string",
      typeErrorMsg: "Field is required",
      validations: [
        {
          type: "required",
          msg: "Required!",
        },
        {
          type: "min",
          value: 5,
          msg: "Min is 5!",
        },
      ],
    },
  },
  {
    data: "description",
    title: "Description",
    type: "text",
  },
  {
    data: "status",
    title: "Status",
    type: "text",
  },
];

export const dataDummy = [
  {
    feeTypeCode: 1,
    feeTypeName: "Service Fee",
    description: "description",
    status: "Active",
  },
  {
    feeTypeCode: 2,
    feeTypeName: "Reissue Fee",
    description: "description",
    status: "Active",
  },
  {
    feeTypeCode: 3,
    feeTypeName: "Refund Fee",
    description: "description",
    status: "Active",
  },
  {
    feeTypeCode: 4,
    feeTypeName: "MDR Fee",
    description: "description",
    status: "Active",
  },
  {
    feeTypeCode: 5,
    feeTypeName: "Late Payment",
    description: "description",
    status: "Active",
  },
];
