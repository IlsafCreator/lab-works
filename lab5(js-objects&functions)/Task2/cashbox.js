var cashbox = {
  amount: 0,
  addPayment: function (payment) {
    if (payment.amount > 0) {
      this.amount = this.amount + payment.amount;
      if (payment.info === null || payment.info === undefined) {
        console.log('Пополнение счёта на сумму ' + payment.amount + ' уе произведёно.');
        console.log('Текущий баланс: ' + this.amount + ' уе.');
      } else {
        console.log('Зачисление на счёт. Платеж: "' + payment.info + '" на сумму: ' + payment.amount + ' уе произведён.');
        console.log('Текущий баланс: ' + this.amount + ' уе.');
      }
    } else {
      console.log('ОШИБКА. Не удаётся совершить платёж "' + payment.info + '"');
    }
  },
  refundPayment: function (refund) {
    if (this.amount > 0 && this.amount - refund.amount >= 0 && refund.amount > 0) {
      this.amount = this.amount - refund.amount;
      if (refund.info === null || refund.info === undefined) {
        console.log('Снятие со счёта на сумму ' + refund.amount + ' уе произведёно.');
        console.log('Текущий баланс: ' + this.amount + ' уе.');
      } else {
        console.log('Снятие со счёта. "' + refund.info + '" на сумму: ' + refund.amount + ' уе.');
        console.log('Текущий баланс: ' + this.amount + ' уе.');
      }
    } else if (this.amount >= 0 && this.amount - refund.amount < 0) {
      console.log('ОШИБКА. Недостаточно средств для снятия со счёта ');
      console.log('Текущий баланс: ' + this.amount + ' уе.');
    } else {
      console.log('ОШИБКА. Не удаётся совершить снятие.');
    }
  }
};


cashbox.addPayment({ amount: -10, info: 'Оплата штрафа' });
cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' });

cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
cashbox.refundPayment({ amount: 100, info: 'Налоги' });
cashbox.refundPayment({ amount: -100, info: 'Возврат клиенту' }); 