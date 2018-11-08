var axios = require("axios");
const myToken = "?access_token=e1f49e6f1e0ce465af2da0ea16f66c47beb8dacc";

function issueHandler(req, res) {  
    var repoArray = [];
    var issueList = [];
  
    // get all the repositories of att from github 
    axios
      .get("https://api.github.com/orgs/att/repos" + myToken)
      .then(response => {
        response.data.forEach(element => {
          if(element.private === false) {
            var a = {repo: element.name};
            repoArray.push(a);
          }
        });
        return new Promise(function(resolve, reject) {
          resolve();
        });
      })
      .catch(error => {
        console.log('Something is wrong with getting repositories. Check error below');
        console.log(error);
      })
      // get all the issues of all the repositories
      .then(response => {
          var myPromises = [];
          repoArray.forEach(element => {
              myPromises.push(
                  axios.get("https://api.github.com/repos/att/" + element.repo + "/issues" + myToken)
                  .then(response => {
                      response.data.forEach(element => {
                          var temp = {};
  
                          if(element.state === 'open') {
                              temp['issue_id'] = element.id;
                              temp['issue_title'] = element.title;
                          }
                          if(element.comments > 0)
                              temp.comments = element['comments_url'];
                          issueList.push(temp);
                      })
                  })
                  .catch(error => {
                      console.log('Something is wrong with getting issues. Check error below');
                      console.log(error);
                  })
              );
          });
          Promise.all(myPromises).then(() => {
              return new Promise(function(resolve, reject){
                  resolve();
              }) 
          })
          // get all the comments for all the issues that have comments
          .then(response => {
              var promises = [];
              issueList.forEach(element => {
                  if(typeof element.comments !== 'undefined') {
                      var temp2 = [];
                      promises.push(
                          axios.get(element.comments + myToken)
                          .then(response => {
                              response.data.forEach(data => {
                                  temp2.push(data.body);
                              })
                              element.comments = temp2;
                          })
                          .catch(error => {
                              console.log('Something is wrong with getting comments. Check error below');
                              console.log(error);
                          })
                      );
                  }
              });
              Promise.all(promises).then(() => {
                  res.send(issueList);
              })
              
          })
          .catch(error => {
              console.log('issueList might have problem. Check error below');
              console.log(error);
          })
      })
      .catch( error => {
          console.log('repoArray might have problem. Check error below');
          console.log(error)
      })
  }

module.exports = issueHandler;