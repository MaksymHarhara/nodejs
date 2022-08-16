const { getAllUsers, getUser, createUser, updateUser,
    deleteUser } = require('./services/UserService');

const { test, describe, it, mock } = require('@jest/globals');

const controller = require('./controllers/UserController');

jest.mock('./services/UserService');

describe("Check methods ", () => {

    beforeEach(() => {
        jest.resetAllMocks();
    });

    const mockRequest = () => {
        const req = {}
        req.body = jest.fn().mockReturnValue(req)
        req.params = jest.fn().mockReturnValue(req)
        return req
    }

    const mockResponse = () => {
        const res = {}
        res.send = jest.fn().mockReturnValue(res)
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        return res
    }

    // CREATE

    test('CREATE should 200 and return correct value', async () => {
        expect.assertions(3);

        let req = mockRequest();
        req.params.id = 1;
        const res = mockResponse();

        createUser.mockReturnValue(new Promise(function(resolve, reject) {
            return resolve("RESOLVED");
        }))

        await controller.createUser(req, res);

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(201);
    });

    test('CREATE should 500 and return correct value', async () => {
        expect.assertions(2);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        createUser.mockReturnValue(new Promise(function(resolve, reject) {
            return reject({message: "error"});
        }))

        await controller.createUser(req, res)

        //doesn't wait for promise rejection without timeout function
        await new Promise((r) => setTimeout(r, 2000));

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(500);

    });

    //UPDATE

    test('UPDATE should 200 and return correct value', async () => {
        expect.assertions(3);

        let req = mockRequest();
        req.params.id = 1;
        const res = mockResponse();

        updateUser.mockReturnValue(new Promise(function(resolve, reject) {
            return resolve(1);
        }));

        await controller.updateUser(req, res);

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('UPDATE should 500 and return correct value', async () => {
        expect.assertions(2);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        updateUser.mockReturnValue(new Promise(function(resolve, reject) {
            return reject({message: "error"});
        }));

        await controller.updateUser(req, res);

        //doesn't wait for promise rejection without timeout function
        await new Promise((r) => setTimeout(r, 2000));

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(500);
    });

    //FINDALL

    test('FINDALL should 200 and return correct value', async () => {
        expect.assertions(3);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        getAllUsers.mockReturnValue(new Promise(function(resolve, reject) {
            return resolve('data');
        }));

        await controller.getUsers(req, res);

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('FINDALL should 500 and return correct value', async () => {
        expect.assertions(2);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        getAllUsers.mockReturnValue(new Promise(function(resolve, reject) {
            return reject({message: 'error'});
        }));

        await controller.getUsers(req, res);

        //doesn't wait for promise rejection without timeout function
        await new Promise((r) => setTimeout(r, 2000));

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(500);
    });

    //FINEONE

    test('FINDONE should 200 and return correct value', async () => {
        expect.assertions(3);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        getUser.mockReturnValue(new Promise(function(resolve, reject) {
            return resolve('data');
        }));

        await controller.getUser(req, res);

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('FINDONE should 500 and return correct value', async () => {
        expect.assertions(2);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        getUser.mockReturnValue(new Promise(function(resolve, reject) {
            return reject({message: 'error'});
        }));

        await controller.getUser(req, res);

        //doesn't wait for promise rejection without timeout function
        await new Promise((r) => setTimeout(r, 2000));

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(500);
    });

    //DELETE

    test('DELETE should 200 and return correct value', async () => {
        expect.assertions(3);

        let req = mockRequest();
        req.params.id = 1;
        const res = mockResponse();

        deleteUser.mockReturnValue(new Promise(function(resolve, reject) {
            return resolve(1);
        }));

        await controller.deleteUser(req, res);

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('DELETE should 500 and return correct value', async () => {
        expect.assertions(2);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        deleteUser.mockReturnValue(new Promise(function(resolve, reject) {
            return reject({message: "error"});
        }));

        await controller.deleteUser(req, res);

        //doesn't wait for promise rejection without timeout function
        await new Promise((r) => setTimeout(r, 2000));

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(500);
    });
});
