import axios from "axios";

const graphqlMutation = {
    query: `
        mutation {
            create(data: { title: "Modem", 
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
            price: 550 }) {
                id
            }
        }`,
};

const mutationOptions = {
    url: "http://localhost:3000/graphql",
    method: "POST",
    data: graphqlMutation,
};

const mutationResponse = await axios(mutationOptions);

console.log(mutationResponse.data);

const grapqhQuery = {
    query: `{
        getProduct(id: "${mutationResponse.data.data.create.id}") {
            title
        }
    }`,
};

const queryOptions = {
    url: "http://localhost:3000/graphql",
    method: "POST",
    data: grapqhQuery,
};

const queryResponse = await axios(queryOptions);

console.log(queryResponse.data);

const updateGraphql = {
    query: `
        mutation {
            update(id: "${mutationResponse.data.data.create.id}", data: { title: "Interfaz", thumbnail: "interfaz Imagen", price: 21 }) {
                id
                title
                price
            }
        }
    `,
};

const updateOptions = {
    url: "http://localhost:3000/graphql",
    method: "POST",
    data: updateGraphql,
};

const updateResponse = await axios(updateOptions);

console.log(updateResponse.data);