const expect = require('chai').expect;
const httpMocks = require("node-mocks-http");
const nock = require('nock');

const exampleIssueHandler = require("../issueHandler");

const repoResponse = require('./repoResponse');
const issueResponse = require('./issueResponse');
const commentResponse = require('./commentResponse');

const myToken = "?access_token=e1f49e6f1e0ce465af2da0ea16f66c47beb8dacc";

describe("test", () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .get('/orgs/att/repos' + myToken)
            .reply(200, repoResponse);
        nock('https://api.github.com')
            .get('/repos/att/rcloud/issues' + myToken)
            .reply(200, issueResponse);
        nock('https://api.github.com')
            .get('/repos/att/rcloud/issues/2617/comments' + myToken)
            .reply(200, commentResponse);
    });
    it("should return a list of issues", (done) => {
        const mockRequest = httpMocks.createRequest({
            method: 'GET',
            url: '/issues'
        });
        const mockResponse = httpMocks.createResponse();
        exampleIssueHandler(mockRequest, mockResponse);
        
        setTimeout(() => {
            expect(mockResponse._getData().length).to.equal(3);
            done();
        }, 4000);

  }).timeout(5000);;
});