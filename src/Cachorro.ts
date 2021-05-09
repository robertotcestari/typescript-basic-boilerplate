class Cachorro {
  public name = 'Dingo';
  private age = 25;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public getGreeting(): string {
    return `Eu sou o ${this.name} e tenho ${this.age}`;
  }
}

export default Cachorro;
