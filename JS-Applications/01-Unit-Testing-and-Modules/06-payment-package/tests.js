const expect = require('chai').expect;
const PaymentPackage = require('./PaymentPackage.js');

describe('PaymentPackage', function () {
  const validName = 'My Package';
  const validValue = 120;

  describe('Instantiation and structure', function () {
    it('works with valid parameters', function () {
      expect(() => new PaymentPackage(validName, validValue)).to.not.throw();
    });

    it('is correctly set up', function () {
      const instance = new PaymentPackage(validName, validValue);
      expect(instance.name).to.be.equal(validName);
      expect(instance.value).to.be.equal(validValue);
      expect(instance.VAT).to.be.equal(20);
      expect(instance.active).to.be.equal(true);
    });

    it('does not work with invalid name', function () {
      expect(() => new PaymentPackage('', validValue)).to.throw();
      expect(() => new PaymentPackage(undefined, validValue)).to.throw();
      expect(() => new PaymentPackage({}, validValue)).to.throw();
    });

    it('does not work with invalid value', function () {
      expect(() => new PaymentPackage(validName, '')).to.throw();
      expect(() => new PaymentPackage(validName, -3)).to.throw();
      expect(() => new PaymentPackage(validName, [])).to.throw();
    });

    it('has all properties', function () {
      const instance = new PaymentPackage(validName, validValue);

      expect(instance).to.have.property('name');
      expect(instance).to.have.property('value');
      expect(instance).to.have.property('VAT');
      expect(instance).to.have.property('active');
    });
  });

  describe('Accessors', function () {
    let instance = null;
    beforeEach(() => {
      instance = new PaymentPackage(validName, validValue);
    });

    it('accepts and sets valid name', function () {
      instance.name = 'New Package';
      expect(instance.name).to.be.equal('New Package');
    });

    it('rejects invalid name', function () {
      expect(() => (instance.name = '')).to.throw();
      expect(() => (instance.name = undefined)).to.throw();
      expect(() => (instance.name = {})).to.throw();
    });

    it('accepts and sets valid value', function () {
      instance.value = 90;
      expect(instance.value).to.be.equal(90);
    });

    it('rejects invalid value', function () {
      expect(() => (instance.value = '')).to.throw();
      expect(() => (instance.value = undefined)).to.throw();
      expect(() => (instance.value = -5)).to.throw();
    });

    it('accepts and sets valid VAT', function () {
      instance.VAT = 15;
      expect(instance.VAT).to.be.equal(15);
    });

    it('rejects invalid VAT', function () {
      expect(() => (instance.VAT = '')).to.throw();
      expect(() => (instance.VAT = undefined)).to.throw();
      expect(() => (instance.VAT = -8)).to.throw();
    });

    it('accepts and sets valid active', function () {
      instance.active = true;
      expect(instance.active).to.be.true;

      instance.active = false;
      expect(instance.active).to.be.false;
    });

    it('rejects invalid active', function () {
      expect(() => (instance.active = '')).to.throw();
      expect(() => (instance.active = undefined)).to.throw();
      expect(() => (instance.active = -8)).to.throw();
    });
  });

  describe('String info', function () {
    let instance = null;
    beforeEach(() => {
      instance = new PaymentPackage(validName, validValue);
    });

    it('contains the name', function () {
      expect(instance.toString()).to.contain(validName);
    });

    it('contains the value', function () {
      expect(instance.toString()).to.contain(validValue.toString());
    });

    it('contains the VAT', function () {
      expect(instance.toString()).to.contain(instance.VAT + '%');
    });

    it('displays inactive label', function () {
      instance.active = false;
      expect(instance.toString()).to.contain('(inactive)');
    });

    it('updates info through setters', function () {
      instance.name = 'New Package';
      instance.value = 90;
      instance.VAT = 9;

      const output = instance.toString();

      expect(output).to.contain('New Package');
      expect(output).to.contain('90');
      expect(output).to.contain('9%');
    });
  });
});
