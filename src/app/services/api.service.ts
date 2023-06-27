import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {

    private serviceAddress = '';

    setAddress(address: string): void {
        this.serviceAddress = address;
    }

    makeURL(number1: number, number2: number, operation: string): URL {
        const resource = `${operation}/${number1}/${number2}`
        return new URL(resource, this.serviceAddress);
    }

    calculate(number1: number, number2: number, operation: string, handler: any): void {
        fetch(this.makeURL(number1, number2, operation))
        .then(res => {
            console.log(res)
            return res.json();
        })
        .then((response)=> {
            
            handler(response);
          },
          (err)=> {
            handler(err);
            console.log(err);
          }
        );
    }
}