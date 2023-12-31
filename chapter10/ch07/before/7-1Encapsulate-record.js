const customerData = {
  1920: {
    name: "마틴 파울러",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
  38673: {
    name: "닐 포드",
    id: "38673",
    usages: {
      2016: {
        1: 30,
        2: 45,
      },
      2015: {
        1: 60,
        2: 73,
      },
    },
  },
};

export const writeData = (customerId, year, month, amount) => {
  customerData[customerId].usages[year][month] = amount;
};

export const compareUsage = (customerId, laterYear, month) => {
  const later = customerData[customerId].usages[laterYear][month];
  const earlier = customerData[customerId].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
};

export const getCustomer = () => customerData;
