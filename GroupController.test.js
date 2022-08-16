const { test, describe, it, mock } = require('@jest/globals');
const { getAllGroups, getGroup, createGroup, updateGroup, deleteGroup } = require('./services/GroupService');

const controller = require('./controllers/GroupController');

jest.mock('./services/GroupService');

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

    test('CREATE should 201 and return correct value', async () => {
        expect.assertions(3);

        let req = mockRequest();
        req.params.id = 1;
        const res = mockResponse();

        createGroup.mockReturnValue(new Promise(function(resolve, reject) {
            return resolve("RESOLVED");
        }))

        await controller.createGroup(req, res);

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(201);
    });

    test('CREATE should 500 and return correct value', async () => {
        expect.assertions(2);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        createGroup.mockReturnValue(new Promise(function(resolve, reject) {
            return reject({message: "error"});
        }))

        await controller.createGroup(req, res)

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

        updateGroup.mockReturnValue(new Promise(function(resolve, reject) {
            return resolve(1);
        }));

        await controller.updateGroup(req, res);

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('UPDATE should 500 and return correct value', async () => {
        expect.assertions(2);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        updateGroup.mockReturnValue(new Promise(function(resolve, reject) {
            return reject({message: "error"});
        }));

        await controller.updateGroup(req, res);

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

        getAllGroups.mockReturnValue(new Promise(function(resolve, reject) {
            return resolve('data');
        }));

        await controller.getGroups(req, res);

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('FINDALL should 500 and return correct value', async () => {
        expect.assertions(2);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        getAllGroups.mockReturnValue(new Promise(function(resolve, reject) {
            return reject({message: 'error'});
        }));

        await controller.getGroups(req, res);

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

        getGroup.mockReturnValue(new Promise(function(resolve, reject) {
            return resolve('data');
        }));

        await controller.getGroup(req, res);

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('FINDONE should 500 and return correct value', async () => {
        expect.assertions(2);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        getGroup.mockReturnValue(new Promise(function(resolve, reject) {
            return reject({message: 'error'});
        }));

        await controller.getGroup(req, res);

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

        deleteGroup.mockReturnValue(new Promise(function(resolve, reject) {
            return resolve(1);
        }));

        await controller.deleteGroup(req, res);

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('DELETE should 500 and return correct value', async () => {
        expect.assertions(2);

        let req = mockRequest();
        req.params.id = null;
        const res = mockResponse();

        deleteGroup.mockReturnValue(new Promise(function(resolve, reject) {
            return reject({message: "error"});
        }));

        await controller.deleteGroup(req, res);

        //doesn't wait for promise rejection without timeout function
        await new Promise((r) => setTimeout(r, 2000));

        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(500);
    });
});
