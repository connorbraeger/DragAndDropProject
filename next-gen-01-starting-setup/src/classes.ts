abstract class Department {
  //name: string;
  static fiscalYear = 2021;
  protected employees: string[] = [];
  constructor(protected readonly id: string, protected name: string) {
    //this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department Id" + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please use a valid value");
    }
    this.addReport(value);
  }
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  describe() {
    console.log("Accounting Department Id" + this.id + this.name);
  }
}
//const accounting = new AccountingDepartment("rando", []);
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

//console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();

const accounting2 = AccountingDepartment.getInstance();
accounting2.addReport("Something went wrong");
accounting2.printReports();
accounting2.mostRecentReport = "test";
console.log(accounting2.mostRecentReport);
const employee1 = Department.createEmployee("Connor");
console.log(employee1);
console.log(Department.fiscalYear);
