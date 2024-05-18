export function getEnv() {

    let envLocation = window.location.origin;
    console.log("envLocation : ", envLocation);

    let ENDPOINT = 'http://localhost:5050/';

    switch (envLocation) {

        case "http://localhost:3000":
            return {

                ENDPOINT: ENDPOINT

            }

    }


}