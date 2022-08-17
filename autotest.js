//автотест для https://swapi.dev/api/people/10/

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response contains eye colour", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.eye_color).to.eql("blue-gray");
});

pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});



//автотест для https://swapi.dev/api/planets/7/

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("forests, mountains, lakes");
});

pm.test("Connection is present", function () {
    pm.response.to.have.header("Connection");
});

pm.test("Response contains climate ", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.climate).to.eql("temperate");
});



//автотест для https://swapi.dev/api/starships/5/

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Body is correct", function () {
    pm.response.to.have.body('{"name":"Sentinel-class landing craft","model":"Sentinel-class landing craft","manufacturer":"Sienar Fleet Systems, Cyngus Spaceworks","cost_in_credits":"240000","length":"38","max_atmosphering_speed":"1000","crew":"5","passengers":"75","cargo_capacity":"180000","consumables":"1 month","hyperdrive_rating":"1.0","MGLT":"70","starship_class":"landing craft","pilots":[],"films":["https://swapi.dev/api/films/1/"],"created":"2014-12-10T15:48:00.586000Z","edited":"2014-12-20T21:23:49.873000Z","url":"https://swapi.dev/api/starships/5/"}');
});

pm.test("Response contains starship_class", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.starship_class).to.eql("landing craft");
});

pm.test("Body matches string passengers", function () {
    pm.expect(pm.response.text()).to.include("75");
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});