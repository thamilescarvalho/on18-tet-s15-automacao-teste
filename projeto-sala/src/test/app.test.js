const app = require('../app')
const request = require("supertest")
const model = require("../models/colaboradorasModels")

describe("Colaboradora Controller", () => {
    const colaboradoraMock = {
        email: "thami@email.com",
        password: "1234",
        preferenceName: "Thamiles"
    }

    beforeAll(async () => {
        const newColaboradora = new model(colaboradoraMock)
        await newColaboradora.save()

        colaboradoraMock.id = newColaboradora._id
    })

    test("GET /colaboradoras/all", (done) => {
        request(app)
        .get("/colaboradoras/all")
        .expect(200)
        .expect(res => {
            expect(res.body.message).toBe("Colaboradoras carregadas com sucesso!")
        })
        .end(err => {
            if (err) return done(err)
            return done()
        })
    })

    test("POST /colaboradoras/create", (done) =>{
        const colaboradoraBody = {
            email:"thami@email.com",
            password:"1234",
            preferenceName: "Thamiles"
        }
        request(app)
        .post("/colaboradoras/create")
        .send(colaboradoraBody)
        .expect(201)
        .expect(res => {
            expect(res.body.colaboradora.email).toBe("thami@email.com")
        })
        .end(err => done(err))
    })
    
    test("PUT /colaboradoras/update/:id", (done) => {
            const colaboradoraBody = {
                email: "novoemail@email.com",
                preferenceName: "nome atualizado"
            }
            request(app)
            .put("/colaboradoras/update/" + colaboradoraMock.id)
            .send(colaboradoraBody)
            .expect(200)
            .expect(res => {
                expect(res.body.colaboradora.email).toBe("novoemail@email.com")
                expect()
            })
            .end(err => done(err))
        })
    })
