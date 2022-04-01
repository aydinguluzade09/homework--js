let Tax=[15,17.5,34]
let TaxValue = []
/*
  Satış vergisi
  =========
   Şirkət nə qədər satış vergisinin tutulacağını hesablayan proqram tələb edir.
   Satış vergisi məhsulun qiymətinin 20%-ni təşkil edir.
*/

function calculateSalesTax() {
  TaxValue.push(Tax.valueOf([0]) + Tax.valueOf([0])*20/100)
  TaxValue.push(Tax.valueOf([1]) + Tax.valueOf([1])*20/100)
  TaxValue.push(Tax.valueOf([2]) + Tax.valueOf([2])*20/100)
}
console.log(TaxValue);
/*
  CURRENCY FORMATTING
  ===================
  Qiymətlər kəsr şəklində olmalıdır.
   Onlar həmçinin valyuta simvolu (£) ilə başlamalıdırlar
   Rəqəmləri £0,00 formatına çevirən funksiyanı yazın
  
*/

function formatCurrency() {}

/* ======= Aşağıdakı kodu dəyişməyin ===== */

// Nəticə
// calculateSalesTax(15) === 18
// calculateSalesTax(17.5) === 21
// calculateSalesTax(34) === 40.8
// formatCurrency(15) === "£18.00"
// formatCurrency(17.5) === "£21.00"
// formatCurrency(34) === "£40.80"