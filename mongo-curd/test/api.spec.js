const axios = require('axios').default;
const expect = require("chai").expect;


describe('API testing', () => {
    
    it('POST /user API test', async () => {
        let result = await axios({
            method: 'post',
            url: 'http://localhost:3000/user',
            data: {
                name: "Sai teja",
                age: 25,
                city: "Mumbai",
                phone: "720501011111"
            }
        });
        expect(result.status).to.be.eq(201);
    })

    it('Dummy test', async () => {
        let result = await axios.get('http://localhost:3000/');
        expect(result.data).to.be.eq("server is running")
    })


});