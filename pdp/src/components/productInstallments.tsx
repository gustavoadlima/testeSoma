const findMaxInstallments = (product: any) => {
    let maxNumberOfInstallments = 0;
    let maxInstallmentValue = 0;
  
    product.items.forEach((item: any) => {
      item.sellers.forEach((seller: any) => {
        seller.commertialOffer.Installments.forEach((installment: any) => {
          if (installment.NumberOfInstallments > maxNumberOfInstallments) {
            maxNumberOfInstallments = installment.NumberOfInstallments;
            maxInstallmentValue = installment.Value;
          }
        });
      });
    });
  
    return { maxNumberOfInstallments, maxInstallmentValue };
  };
  
export { findMaxInstallments };
  