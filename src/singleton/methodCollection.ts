import { MethodNotFoundException } from '../exceptions/index'

class MethodCollection {
  private static instance: MethodCollection
  private methods: Record<string, (...args: any[]) => any> = {}
  private constructor () {

  }

  public addMethod (name: string, method: (...args: any[]) => any): void {
    MethodCollection.getInstance().methods[name] = method
  }

  public addMethods (methods: Record<string, (...args: any[]) => any>): void {
    MethodCollection.getInstance().methods = methods
  }

  public clean (): void {
    MethodCollection.getInstance().methods = {}
  }

  public executeMethod (name: string, ...args: any[]): any {
    if (MethodCollection.getInstance().methods[name] !== undefined && typeof MethodCollection.getInstance().methods[name] === 'function') {
      const result = MethodCollection.getInstance().methods[name](...args as [])
      if (result !== undefined) { return result }
    } else {
      throw new MethodNotFoundException(name)
    }
  }

  public remove (name: string): void {
    if (MethodCollection.getInstance().methods[name] !== undefined) {
      Reflect.deleteProperty(MethodCollection.getInstance().methods, name)
    } else {
      throw new MethodNotFoundException(name)
    }
  }

  public static getInstance (): MethodCollection {
    if (MethodCollection.instance === undefined) {
      MethodCollection.instance = new MethodCollection()
    }
    return MethodCollection.instance
  }
}

export default MethodCollection
