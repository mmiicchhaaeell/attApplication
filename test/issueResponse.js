module.exports = [
    {
        "url": "https://api.github.com/repos/att/rcloud/issues/2617",
        "repository_url": "https://api.github.com/repos/att/rcloud",
        "labels_url": "https://api.github.com/repos/att/rcloud/issues/2617/labels{/name}",
        "comments_url": "https://api.github.com/repos/att/rcloud/issues/2617/comments",
        "events_url": "https://api.github.com/repos/att/rcloud/issues/2617/events",
        "html_url": "https://github.com/att/rcloud/issues/2617",
        "id": 378731328,
        "node_id": "MDU6SXNzdWUzNzg3MzEzMjg=",
        "number": 2617,
        "title": "Error: a.gistname is undefined; can't access its \"localeCompare\" property",
        "user": {
        "login": "gordonwoodhull",
        "id": 1366709,
        "node_id": "MDQ6VXNlcjEzNjY3MDk=",
        "avatar_url": "https://avatars2.githubusercontent.com/u/1366709?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gordonwoodhull",
        "html_url": "https://github.com/gordonwoodhull",
        "followers_url": "https://api.github.com/users/gordonwoodhull/followers",
        "following_url": "https://api.github.com/users/gordonwoodhull/following{/other_user}",
        "gists_url": "https://api.github.com/users/gordonwoodhull/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gordonwoodhull/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gordonwoodhull/subscriptions",
        "organizations_url": "https://api.github.com/users/gordonwoodhull/orgs",
        "repos_url": "https://api.github.com/users/gordonwoodhull/repos",
        "events_url": "https://api.github.com/users/gordonwoodhull/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gordonwoodhull/received_events",
        "type": "User",
        "site_admin": false
        },
        "labels": [
        {
        "id": 10592620,
        "node_id": "MDU6TGFiZWwxMDU5MjYyMA==",
        "url": "https://api.github.com/repos/att/rcloud/labels/bug",
        "name": "bug",
        "color": "fc2929",
        "default": true
        }
        ],
        "state": "open",
        "locked": false,
        "assignee": {
        "login": "JABedford",
        "id": 32302360,
        "node_id": "MDQ6VXNlcjMyMzAyMzYw",
        "avatar_url": "https://avatars3.githubusercontent.com/u/32302360?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/JABedford",
        "html_url": "https://github.com/JABedford",
        "followers_url": "https://api.github.com/users/JABedford/followers",
        "following_url": "https://api.github.com/users/JABedford/following{/other_user}",
        "gists_url": "https://api.github.com/users/JABedford/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/JABedford/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/JABedford/subscriptions",
        "organizations_url": "https://api.github.com/users/JABedford/orgs",
        "repos_url": "https://api.github.com/users/JABedford/repos",
        "events_url": "https://api.github.com/users/JABedford/events{/privacy}",
        "received_events_url": "https://api.github.com/users/JABedford/received_events",
        "type": "User",
        "site_admin": false
        },
        "assignees": [
        {
        "login": "JABedford",
        "id": 32302360,
        "node_id": "MDQ6VXNlcjMyMzAyMzYw",
        "avatar_url": "https://avatars3.githubusercontent.com/u/32302360?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/JABedford",
        "html_url": "https://github.com/JABedford",
        "followers_url": "https://api.github.com/users/JABedford/followers",
        "following_url": "https://api.github.com/users/JABedford/following{/other_user}",
        "gists_url": "https://api.github.com/users/JABedford/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/JABedford/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/JABedford/subscriptions",
        "organizations_url": "https://api.github.com/users/JABedford/orgs",
        "repos_url": "https://api.github.com/users/JABedford/repos",
        "events_url": "https://api.github.com/users/JABedford/events{/privacy}",
        "received_events_url": "https://api.github.com/users/JABedford/received_events",
        "type": "User",
        "site_admin": false
        }
        ],
        "milestone": null,
        "comments": 1,
        "created_at": "2018-11-08T13:28:59Z",
        "updated_at": "2018-11-08T13:33:33Z",
        "closed_at": null,
        "author_association": "MEMBER",
        "body": "Fresh session, created a notebook and renamed it to put it in a folder (`rcloud.params/mats new api`)\r\n\r\nGot the above error. Tried creating another notebook and wasn't able to repro, but returning to the same notebook I still got the same error.\r\n\r\nMade a change to the notebook, got the same error again. But when I reload the page and then open the notebook again, it is okay and the change was saved.\r\n\r\nIt's clearly a superficial error in the notebook tree sort somewhere.\r\n\r\n```\r\nError: a.gistname is undefined; can't access its \"localeCompare\" property\r\nTypeError: a.gistname is undefined; can't access its \"localeCompare\" property\r\n    compare_nodes@http://minimonolith.dev.local:8080/js/rcloud_bundle.js:14043:25\r\n    find_sort_point@http://minimonolith.dev.local:8080/js/rcloud_bundle.js:14462:30\r\n    insert_in_order@http://minimonolith.dev.local:8080/js/rcloud_bundle.js:14488:26\r\n    update_tree@http://minimonolith.dev.local:8080/js/rcloud_bundle.js:14846:28\r\n    update_tree_entry@http://minimonolith.dev.local:8080/js/rcloud_bundle.js:14997:24\r\n    update_notebook_view@http://minimonolith.dev.local:8080/js/rcloud_bundle.js:14434:21\r\n    update_notebook_from_gist/<@http://minimonolith.dev.local:8080/js/rcloud_bundle.js:14309:28\r\nFrom previous event:\r\n    update_notebook_from_gist@http://minimonolith.dev.local:8080/js/rcloud_bundle.js:14308:18\r\n    update_notebook_from_gist@http://minimonolith.dev.local:8080/js/rcloud_bundle.js:16188:20\r\n    load_callback/</</<@http://minimonolith.dev.local:8080/editor_tab.js:780:48\r\nFrom previous event:\r\n    load_callback/</<@http://minimonolith.dev.local:8080/editor_tab.js:779:41\r\nFrom previous event:\r\n    load_callback/<@http://minimonolith.dev.local:8080/editor_tab.js:762:24\r\nFrom previous event:\r\n    load_notebook/<@http://minimonolith.dev.local:8080/editor_tab.js:158:22\r\nFrom previous event:\r\n    load_notebook@http://minimonolith.dev.local:8080/editor_tab.js:156:20\r\n    open_notebook@http://minimonolith.dev.local:8080/editor_tab.js:184:17\r\n    click_recent@http://minimonolith.dev.local:8080/editor_tab.js:573:19\r\n    dispatch@http://minimonolith.dev.local:8080/lib/js/jquery-2.1.1.js:4408:15\r\n    add/elemData.handle@http://minimonolith.dev.local:8080/lib/js/jquery-2.1.1.js:4095:6\r\n```"
        },
        {
        "url": "https://api.github.com/repos/att/rcloud/issues/2616",
        "repository_url": "https://api.github.com/repos/att/rcloud",
        "labels_url": "https://api.github.com/repos/att/rcloud/issues/2616/labels{/name}",
        "comments_url": "https://api.github.com/repos/att/rcloud/issues/2616/comments",
        "events_url": "https://api.github.com/repos/att/rcloud/issues/2616/events",
        "html_url": "https://github.com/att/rcloud/issues/2616",
        "id": 378694002,
        "node_id": "MDU6SXNzdWUzNzg2OTQwMDI=",
        "number": 2616,
        "title": "tiny scrollbar and diff annotations are visible and interactive in Apply Changes",
        "user": {
        "login": "gordonwoodhull",
        "id": 1366709,
        "node_id": "MDQ6VXNlcjEzNjY3MDk=",
        "avatar_url": "https://avatars2.githubusercontent.com/u/1366709?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gordonwoodhull",
        "html_url": "https://github.com/gordonwoodhull",
        "followers_url": "https://api.github.com/users/gordonwoodhull/followers",
        "following_url": "https://api.github.com/users/gordonwoodhull/following{/other_user}",
        "gists_url": "https://api.github.com/users/gordonwoodhull/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gordonwoodhull/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gordonwoodhull/subscriptions",
        "organizations_url": "https://api.github.com/users/gordonwoodhull/orgs",
        "repos_url": "https://api.github.com/users/gordonwoodhull/repos",
        "events_url": "https://api.github.com/users/gordonwoodhull/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gordonwoodhull/received_events",
        "type": "User",
        "site_admin": false
        },
        "labels": [
        {
        "id": 10592620,
        "node_id": "MDU6TGFiZWwxMDU5MjYyMA==",
        "url": "https://api.github.com/repos/att/rcloud/labels/bug",
        "name": "bug",
        "color": "fc2929",
        "default": true
        }
        ],
        "state": "open",
        "locked": false,
        "assignee": {
        "login": "JABedford",
        "id": 32302360,
        "node_id": "MDQ6VXNlcjMyMzAyMzYw",
        "avatar_url": "https://avatars3.githubusercontent.com/u/32302360?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/JABedford",
        "html_url": "https://github.com/JABedford",
        "followers_url": "https://api.github.com/users/JABedford/followers",
        "following_url": "https://api.github.com/users/JABedford/following{/other_user}",
        "gists_url": "https://api.github.com/users/JABedford/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/JABedford/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/JABedford/subscriptions",
        "organizations_url": "https://api.github.com/users/JABedford/orgs",
        "repos_url": "https://api.github.com/users/JABedford/repos",
        "events_url": "https://api.github.com/users/JABedford/events{/privacy}",
        "received_events_url": "https://api.github.com/users/JABedford/received_events",
        "type": "User",
        "site_admin": false
        },
        "assignees": [
        {
        "login": "JABedford",
        "id": 32302360,
        "node_id": "MDQ6VXNlcjMyMzAyMzYw",
        "avatar_url": "https://avatars3.githubusercontent.com/u/32302360?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/JABedford",
        "html_url": "https://github.com/JABedford",
        "followers_url": "https://api.github.com/users/JABedford/followers",
        "following_url": "https://api.github.com/users/JABedford/following{/other_user}",
        "gists_url": "https://api.github.com/users/JABedford/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/JABedford/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/JABedford/subscriptions",
        "organizations_url": "https://api.github.com/users/JABedford/orgs",
        "repos_url": "https://api.github.com/users/JABedford/repos",
        "events_url": "https://api.github.com/users/JABedford/events{/privacy}",
        "received_events_url": "https://api.github.com/users/JABedford/received_events",
        "type": "User",
        "site_admin": false
        }
        ],
        "milestone": {
        "url": "https://api.github.com/repos/att/rcloud/milestones/38",
        "html_url": "https://github.com/att/rcloud/milestone/38",
        "labels_url": "https://api.github.com/repos/att/rcloud/milestones/38/labels",
        "id": 3222365,
        "node_id": "MDk6TWlsZXN0b25lMzIyMjM2NQ==",
        "number": 38,
        "title": "2.1",
        "description": "RCloud 2.1",
        "creator": {
        "login": "gordonwoodhull",
        "id": 1366709,
        "node_id": "MDQ6VXNlcjEzNjY3MDk=",
        "avatar_url": "https://avatars2.githubusercontent.com/u/1366709?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gordonwoodhull",
        "html_url": "https://github.com/gordonwoodhull",
        "followers_url": "https://api.github.com/users/gordonwoodhull/followers",
        "following_url": "https://api.github.com/users/gordonwoodhull/following{/other_user}",
        "gists_url": "https://api.github.com/users/gordonwoodhull/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gordonwoodhull/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gordonwoodhull/subscriptions",
        "organizations_url": "https://api.github.com/users/gordonwoodhull/orgs",
        "repos_url": "https://api.github.com/users/gordonwoodhull/repos",
        "events_url": "https://api.github.com/users/gordonwoodhull/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gordonwoodhull/received_events",
        "type": "User",
        "site_admin": false
        },
        "open_issues": 47,
        "closed_issues": 3,
        "state": "open",
        "created_at": "2018-03-27T14:57:03Z",
        "updated_at": "2018-11-08T11:48:47Z",
        "due_on": "2018-11-30T08:00:00Z",
        "closed_at": null
        },
        "comments": 0,
        "created_at": "2018-11-08T11:39:35Z",
        "updated_at": "2018-11-08T11:39:35Z",
        "closed_at": null,
        "author_association": "MEMBER",
        "body": "It's difficult to dig into this since it seems right-clicking is disabled somehow. Monaco's scrollbar and some annotations are visible in the right gutter of the diffs:\r\n\r\n![image](https://user-images.githubusercontent.com/1366709/48196403-808d4280-e320-11e8-944f-129e16a75cb4.png)\r\n\r\nWhen the page first loads I am able to drag the tiny scrollbar. The only effect is that the cursor moves and some grey boxes appear. I presume these are diff annotations, but they don't seem to align with what we are doing.\r\n\r\nThis is not as urgent a problem as some of the other things we are looking at, but it still would be nice to completely hide the scrollbar now that #2608 is fixed."
        },
        {
        "url": "https://api.github.com/repos/att/rcloud/issues/2614",
        "repository_url": "https://api.github.com/repos/att/rcloud",
        "labels_url": "https://api.github.com/repos/att/rcloud/issues/2614/labels{/name}",
        "comments_url": "https://api.github.com/repos/att/rcloud/issues/2614/comments",
        "events_url": "https://api.github.com/repos/att/rcloud/issues/2614/events",
        "html_url": "https://github.com/att/rcloud/pull/2614",
        "id": 376435996,
        "node_id": "MDExOlB1bGxSZXF1ZXN0MjI3NjUzMjU5",
        "number": 2614,
        "title": "Changes supporting rcloud.params",
        "user": {
        "login": "useless5771",
        "id": 578443,
        "node_id": "MDQ6VXNlcjU3ODQ0Mw==",
        "avatar_url": "https://avatars2.githubusercontent.com/u/578443?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/useless5771",
        "html_url": "https://github.com/useless5771",
        "followers_url": "https://api.github.com/users/useless5771/followers",
        "following_url": "https://api.github.com/users/useless5771/following{/other_user}",
        "gists_url": "https://api.github.com/users/useless5771/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/useless5771/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/useless5771/subscriptions",
        "organizations_url": "https://api.github.com/users/useless5771/orgs",
        "repos_url": "https://api.github.com/users/useless5771/repos",
        "events_url": "https://api.github.com/users/useless5771/events{/privacy}",
        "received_events_url": "https://api.github.com/users/useless5771/received_events",
        "type": "User",
        "site_admin": false
        },
        "labels": [],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2018-11-01T15:13:31Z",
        "updated_at": "2018-11-07T14:37:44Z",
        "closed_at": null,
        "author_association": "COLLABORATOR",
        "pull_request": {
        "url": "https://api.github.com/repos/att/rcloud/pulls/2614",
        "html_url": "https://github.com/att/rcloud/pull/2614",
        "diff_url": "https://github.com/att/rcloud/pull/2614.diff",
        "patch_url": "https://github.com/att/rcloud/pull/2614.patch"
        },
        "body": "First commit is a port of a fix to bootstrap form validation styling rules for checkboxes and radio buttons.\r\n\r\nThe second commit adds a function gracefully stopping the execution of cells by allowing the currently executed cell to complete.\r\n\r\nThe rationale to expose this is to support rcloud.params forms that don't 'busy-wait' for user to submit the form (https://github.com/att/rcloud.params/issues/12)."
        }
    ]