import { Injectable } from '@angular/core';

export class AngularJasperConfig {
    server:string;
    login:string;
    password:string;
}

@Injectable()
export class AngularJasper {
    config:AngularJasperConfig;
    visualizePromise:Promise<any>;

    constructor(config:AngularJasperConfig) {
        this.config = config;

        this.loadVisualize();
    }

    loadVisualize() {
        var script = document.createElement('script');

        this.visualizePromise = new Promise((resolve, reject) => {
            script.setAttribute('src', `${this.config.server}/client/visualize.js`);
            script.onload = () => {
                window['visualize']({
                    auth: {
                        name: this.config.login,
                        password: this.config.password
                    }
                }, resolve, reject);
            };
            document.body.appendChild(script);
        });
    }
}